'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
import { Search } from 'lucide-react';

const menuItems = [
  { label: 'Home', hasDropdown: false },
  { label: 'About', hasDropdown: true },
  { label: 'Programs', hasDropdown: true },
  { label: 'Membership', hasDropdown: false },
  { label: 'Publications', hasDropdown: false },
  { label: 'Events', hasDropdown: true },
  { label: 'Media', hasDropdown: true }
];

export default function Navbar() {

  return (
    <div className="flex w-[98%] text-white">
      {/* Logo - Left side, full height */}
      <div className="flex items-center justify-center px-6 pt-12 h-full cursor-pointer">
        <Image 
          src="/logos/International-Relations-Society-of-Kenya-IRSK-Logo (1).webp" 
          alt="BRICS 2025" 
          width={250} 
          height={300}
          className="h-full object-contain"
        />
      </div>

      {/* Main nav content */}
      <div className="flex-1 flex flex-col justify-end">
        {/* Bottom section with navigation and right actions */}
        <div className="flex items-center justify-between pb-2 border-b-3 border-white w-full">
          {/* Navigation links */}
          <ul className="flex gap-6 items-center text-[15px] py-2">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link href="#">
                  <span className="hover:underline cursor-pointer">
                    {item.label}
                  </span>
                </Link>
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-lg rounded p-2 min-w-[150px]">
                    <p className="text-sm">Dropdown content</p>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right actions - aligned with navigation */}
          <div className="flex items-center gap-10">
            {/* Social media links */}
            <div className="flex gap-4 text-xl">
              <Link className='hover:text-blue-400' href="#"><FaTwitter/> </Link>
              <Link className='hover:text-blue-500' href="#"><FaLinkedin/> </Link>
              <Link className='hover:text-red-500' href="#"><FaYoutube/> </Link>
              <Link className='hover:text-blue-300' href="#"><FaFacebook/> </Link>
            </div>
            
            {/* Search icon */}
            <button className="p-2 rounded-full bg-white text-black">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}