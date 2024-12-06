"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomNavbar = () => {
  const currentPath = usePathname();

  const isActive = (path) => currentPath.includes(path);

  return (
    <div className="fixed bottom-0 w-full flex justify-around bg-white border-t border-gray-300 py-2">
      <Link href="/visit-shelter">
        <div className={`flex-1 flex flex-col items-center text-center py-2 cursor-pointer transform transition-transform duration-200 active:scale-75 ${isActive('/visit-shelter') ? 'primary-color text-lg font-bold' : 'primary-color'}`}>
          <img src="/visit-shelter-icon.png" alt="Visit Shelter" className={`mb-1 ${isActive('/visit-shelter') ? 'w-12 h-12' : 'w-10 h-10'}`} />
          <span className={`text-sm ${isActive('/visit-shelter') ? 'font-bold' : ''}`}>Visit Shelter</span>
        </div>
      </Link>
      <Link href="/check-pets">
        <div className={`flex-1 flex flex-col items-center text-center py-2 cursor-pointer transform transition-transform duration-200 active:scale-75 ${isActive('/check-pets') ? 'primary-color text-lg font-bold' : 'primary-color'}`}>
          <img src="/check-pets-icon.png" alt="Check Pets" className={`mb-1 ${isActive('/check-pets') || isActive('/pet-details') ? 'w-12 h-12' : 'w-10 h-10'}`} />
          <span className={`text-sm ${isActive('/check-pets') || isActive('/pet-details') ? 'font-bold' : ''}`}>Check Pets</span>
        </div>
      </Link>
      <Link href="/care-logs">
        <div className={`flex-1 flex flex-col items-center text-center py-2 cursor-pointer transform transition-transform duration-200 active:scale-75 ${isActive('/care-logs') ? 'primary-color text-lg font-bold' : 'primary-color'}`}>
          <img src="/care-logs-icon.png" alt="Care Logs" className={`mb-1 ${isActive('/care-logs') ? 'w-12 h-12' : 'w-10 h-10'}`} />
          <span className={`text-sm ${isActive('/care-logs') ? 'font-bold' : ''}`}>Care Logs</span>
        </div>
      </Link>
      <Link href="/my-profile">
        <div className={`flex-1 flex flex-col items-center text-center py-2 cursor-pointer transform transition-transform duration-200 active:scale-75 ${isActive('/my-profile') ? 'primary-color text-lg font-bold' : 'primary-color'}`}>
          <img src="/my-profile-icon.png" alt="My Profile" className={`mb-1 ${isActive('/my-profile') ? 'w-12 h-12' : 'w-10 h-10'}`} />
          <span className={`text-sm ${isActive('/my-profile') ? 'font-bold' : ''}`}>My Profile</span>
        </div>
      </Link>
    </div>
  );
};

export default BottomNavbar;
