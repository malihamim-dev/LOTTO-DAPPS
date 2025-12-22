"use client";

import { ReactElement, useEffect } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

// Custom interface for particle layer data
interface ParticleUserData {
  velocities: Float32Array;
  basePositions: Float32Array;
  baseColors: Float32Array;
  colorVelocities: Float32Array;
  rotationSpeed: number;
}

export default function Background2(): ReactElement  {
  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let composer: EffectComposer;
    let particleLayers: THREE.Points[] = [];

    const mouse = new THREE.Vector3(0, 0, 0);
    const targetMouse = new THREE.Vector3(0, 0, 0);
    const mouseRadius = 20;
    let time = 0;

    let ripples: {
      x: number;
      y: number;
      radius: number;
      strength: number;
      maxRadius: number;
      speed: number;
      color: THREE.Color;
    }[] = [];

    const layersConfig = [
      {
        count: 200,
        size: 0.3,
        colorRange: { hue: [0.75, 0.9], sat: [0.7, 1], light: [0.5, 0.7] },
        rotationSpeed: 0.001,
      },
      {
        count: 250,
        size: 0.2,
        colorRange: { hue: [0.45, 0.6], sat: [0.6, 0.8], light: [0.4, 0.6] },
        rotationSpeed: 0.0005,
      },
    ];

    // Create particle system with proper TypeScript typing
    function createParticleSystem(config: any): THREE.Points {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(config.count * 3);
      const colors = new Float32Array(config.count * 3);
      const basePositions = new Float32Array(config.count * 3);
      const baseColors = new Float32Array(config.count * 3);

      for (let i = 0; i < config.count; i++) {
        const i3 = i * 3;

        const radius = 10 + Math.random() * 100;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        positions.set([x, y, z], i3);
        basePositions.set([x, y, z], i3);

        const dist = Math.sqrt(x * x + y * y + z * z) / 110;

        const hue = THREE.MathUtils.lerp(config.colorRange.hue[0], config.colorRange.hue[1], dist);
        const sat = THREE.MathUtils.lerp(config.colorRange.sat[0], config.colorRange.sat[1], dist);
        const light = THREE.MathUtils.lerp(config.colorRange.light[0], config.colorRange.light[1], dist);

        const color = new THREE.Color().setHSL(hue, sat, light);
        colors.set([color.r, color.g, color.b], i3);
        baseColors.set([color.r, color.g, color.b], i3);
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const texture = new THREE.TextureLoader().load(
        "https://placehold.co/32x32/ffffff/ffffff.png?text=+"
      );

      const material = new THREE.PointsMaterial({
        size: config.size,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
        map: texture,
      });

      const points = new THREE.Points(geometry, material);

      points.userData = {
        velocities: new Float32Array(config.count * 3),
        basePositions,
        baseColors,
        colorVelocities: new Float32Array(config.count * 3),
        rotationSpeed: config.rotationSpeed,
      } satisfies ParticleUserData;

      return points;
    }

    function createRipple(x: number, y: number) {
      ripples.push({
        x,
        y,
        radius: 0,
        strength: 2.5,
        maxRadius: mouseRadius * 4,
        speed: 4,
        color: new THREE.Color(0xffffff),
      });
    }

    function init() {
      const container = document.getElementById("three-bg");
      if (!container) return;

      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x020108, 0.008);

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 100;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x020108);

      container.appendChild(renderer.domElement);

      const renderScene = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);

      composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);

      // Add particle layers
      layersConfig.forEach((cfg) => {
        const layer = createParticleSystem(cfg);
        particleLayers.push(layer);
        scene.add(layer);
      });

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("click", onClick);
      window.addEventListener("resize", onResize);
    }

    function updateParticles() {
      targetMouse.lerp(mouse, 0.05);

      ripples = ripples.filter((r) => {
        r.radius += r.speed;
        r.strength *= 0.96;
        return r.radius < r.maxRadius;
      });

      particleLayers.forEach((layer) => {
        const pos = layer.geometry.attributes.position.array as Float32Array;
        const col = layer.geometry.attributes.color.array as Float32Array;

        const userdata = layer.userData as ParticleUserData;

        const { velocities, basePositions, baseColors, colorVelocities } = userdata;
        const total = pos.length / 3;

        for (let i = 0; i < total; i++) {
          const i3 = i * 3;

          let px = pos[i3];
          let py = pos[i3 + 1];
          let pz = pos[i3 + 2];

          let force = new THREE.Vector3();
          let colorShift = new THREE.Vector3();

          // Mouse interaction
          const mouseDist = mouse.distanceTo(new THREE.Vector3(px, py, pz));
          if (mouseDist < mouseRadius) {
            const str = (1 - mouseDist / mouseRadius) * 0.1;
            const dir = new THREE.Vector3(px, py, pz).sub(mouse).normalize();
            force.add(dir.multiplyScalar(str));

            const intensity = (1 - mouseDist / mouseRadius) * 0.8;
            colorShift.set(intensity, intensity, intensity);
          }

          // Ripple interaction
          ripples.forEach((rip) => {
            const dist = Math.hypot(rip.x - px, rip.y - py);
            const width = 15;

            if (Math.abs(dist - rip.radius) < width) {
              const fall = 1 - Math.abs(dist - rip.radius) / width;
              const rForce = rip.strength * fall * 0.1;

              const dir = new THREE.Vector3(px, py, pz)
                .sub(new THREE.Vector3(rip.x, rip.y, pz))
                .normalize();

              force.add(dir.multiplyScalar(rForce));
              colorShift.add(
                new THREE.Vector3(rip.color.r, rip.color.g, rip.color.b).multiplyScalar(fall * rip.strength)
              );
            }
          });

          // Update velocity
          velocities[i3] += force.x;
          velocities[i3 + 1] += force.y;
          velocities[i3 + 2] += force.z;

          velocities[i3] += (basePositions[i3] - px) * 0.02;
          velocities[i3 + 1] += (basePositions[i3 + 1] - py) * 0.02;
          velocities[i3 + 2] += (basePositions[i3 + 2] - pz) * 0.02;

          velocities[i3] *= 0.94;
          velocities[i3 + 1] *= 0.94;
          velocities[i3 + 2] *= 0.94;

          pos[i3] += velocities[i3];
          pos[i3 + 1] += velocities[i3 + 1];
          pos[i3 + 2] += velocities[i3 + 2];

          colorVelocities[i3] += colorShift.x;
          colorVelocities[i3 + 1] += colorShift.y;
          colorVelocities[i3 + 2] += colorShift.z;

          colorVelocities[i3] += (baseColors[i3] - col[i3]) * 0.05;
          colorVelocities[i3 + 1] += (baseColors[i3 + 1] - col[i3 + 1]) * 0.05;
          colorVelocities[i3 + 2] += (baseColors[i3 + 2] - col[i3 + 2]) * 0.05;

          colorVelocities[i3] *= 0.9;
          colorVelocities[i3 + 1] *= 0.9;
          colorVelocities[i3 + 2] *= 0.9;

          col[i3] += colorVelocities[i3];
          col[i3 + 1] += colorVelocities[i3 + 1];
          col[i3 + 2] += colorVelocities[i3 + 2];
        }

        layer.geometry.attributes.position.needsUpdate = true;
        layer.geometry.attributes.color.needsUpdate = true;
      });
    }

    function animate() {
      requestAnimationFrame(animate);
      time += 0.01;

      updateParticles();

      particleLayers.forEach((layer) => {
        const userdata = layer.userData as ParticleUserData;
        layer.rotation.y += userdata.rotationSpeed;
        layer.rotation.x = Math.sin(time * 0.1) * 0.05;
      });

      camera.position.x = Math.sin(time * 0.2) * 2;
      camera.position.y = Math.cos(time * 0.3) * 2;
      camera.lookAt(scene.position);

      composer.render();
    }

    function onMouseMove(event: MouseEvent) {
      targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      const vector = new THREE.Vector3(targetMouse.x, targetMouse.y, 0.5);
      vector.unproject(camera);

      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;

      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      targetMouse.copy(pos);
      mouse.copy(pos);
    }

    function onClick(event: MouseEvent) {
      const mouseVec = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      const vector = new THREE.Vector3(mouseVec.x, mouseVec.y, 0.5);
      vector.unproject(camera);

      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;

      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      createRipple(pos.x, pos.y);
    }

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    }

    init();
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      {/* Background Canvas */}
      <div id="three-bg" className="fixed inset-0 w-full h-full z-0 overflow-hidden"></div>

      {/* Soft Glow Layer */}
      <div className="fixed inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,255,0.05)_0%,rgba(80,40,200,0.03)_40%,transparent_70%)] mix-blend-screen"></div>
    </>
  );
}
