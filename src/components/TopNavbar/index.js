import React from 'react';
import Link from 'next/link';
const TopNavbar = () => {
  return (
    <Link href="/">
        <div className="flex items-center justify-between p-4 bg-primary">
            <div className="flex-grow flex items-center justify-center nav-item">
                <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
                <span className="text-xl font-bold text-white">FurEver Home</span>
            </div>
        </div>
    </Link> 
  );
};

export default TopNavbar;
