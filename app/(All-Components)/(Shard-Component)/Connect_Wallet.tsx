'use client';
import React from 'react';
import { RiErrorWarningLine } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';

import metamask from '../../../public/(home-page-image)/Navbar-image/Metamask2.png';
import Binance from '../../../public/(home-page-image)/Navbar-image/binance.png';
import trustwallet from '../../../public/(home-page-image)/Navbar-image/Trust-Wallet.png';

interface ConnectWalletProps {
  onClose: () => void;
}

const Connect_Wallet: React.FC<ConnectWalletProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/5 backdrop-blur-md" ></div>

      {/* Modal */}
      <div className="relative z-10 w-80 rounded-2xl bg-[#0c042c89] p-5 backdrop-blur-md space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <RiErrorWarningLine className="text-2xl text-[#ffce1f] hover:scale-105 cursor-pointer" />
          <h3 className="text-2xl font-medium text-white">Connect Wallet</h3>
          <ImCancelCircle
            onClick={onClose}
            className="text-2xl text-[#ff1f1f] cursor-pointer hover:scale-110 transition"
          />
        </div>

        {/* Wallet options */}
        {[{ src: metamask, name: 'Meta Mask' }, { src: Binance, name: 'Binance' }, { src: trustwallet, name: 'Trust Wallet' }].map(
          (wallet, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between hover:bg-[#FF5F1F] px-3 py-2 rounded-md cursor-pointer border border-[#FF5F1F] mt-2 transition transform hover:scale-105"
            >
              <div className="flex items-center gap-x-2">
                <Image src={wallet.src} alt={wallet.name} className="h-8 w-8" />
                <h3 className="text-lg font-semibold text-white">{wallet.name}</h3>
              </div>
              <div className="bg-white inline-block px-2 rounded-full py-0.5">
                <h4 className="text-[#FF5F15] text-[10px]">Qr Code</h4>
              </div>
            </div>
          )
        )}

        {/* Search */}
        <div className="h-12 bg-[#190A4F] rounded-md flex items-center justify-between px-2 mt-4 hover:scale-105">
          <div className="flex items-center space-x-2">
            <span className="bg-[#2e19d2] h-8 w-8 rounded-sm flex items-center justify-center">
              <CiSearch className="text-[#ff5f1f] text-2xl" />
            </span>
            <p className="text-[12px] text-white">Search Wallet</p>
          </div>
          <div className="bg-[#ff5f1f] px-2 py-0.5 rounded-full">
            <p className="text-[12px] text-white">876+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect_Wallet;
