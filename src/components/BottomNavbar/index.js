import React from 'react';
import Link from 'next/link';

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 w-full flex justify-around bg-white border-t border-gray-300 py-2">
      <Link href="/visit-shelter">
        <div className="flex-1 flex flex-col items-center text-center py-2 cursor-pointer primary-color  nav-item">
          <img src="/visit-shelter-icon.png" alt="Visit Shelter" className="w-10 h-10 mb-1" />
          <span className="text-sm">Visit Shelter</span>
        </div>
      </Link>
      <Link href="/check-pets">
        <div className="flex-1 flex flex-col items-center text-center py-2 cursor-pointer primary-color  nav-item">
          <img src="/check-pets-icon.png" alt="Check Pets" className="w-10 h-10 mb-1" />
          <span className="text-sm">Check Pets</span>
        </div>
      </Link>
      <Link href="/care-logs">
        <div className="flex-1 flex flex-col items-center text-center py-2 cursor-pointer primary-color  nav-item">
          <img src="/care-logs-icon.png" alt="Care Logs" className="w-10 h-10 mb-1" />
          <span className="text-sm">Care Logs</span>
        </div>
      </Link>
      <Link href="/my-profile">
        <div className="flex-1 flex flex-col items-center text-center py-2 cursor-pointer primary-color  nav-item">
          <img src="/my-profile-icon.png" alt="My Profile" className="w-10 h-10 mb-1" />
          <span className="text-sm">My Profile</span>
        </div>
      </Link>
    </div>
  );
};

export default BottomNavbar;
