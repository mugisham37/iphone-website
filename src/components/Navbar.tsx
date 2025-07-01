'use client';

import Image from 'next/image';
import { appleImg, bagImg, searchImg } from '@/lib/utils';
import { navLists } from '@/constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Image 
          src={appleImg} 
          alt="Apple" 
          width={14} 
          height={18} 
          className="cursor-pointer"
        />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div 
              key={nav} 
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  // Handle navigation action
                  console.log(`Navigate to ${nav}`);
                }
              }}
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <button
            className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
            aria-label="Search"
          >
            <Image 
              src={searchImg} 
              alt="search" 
              width={18} 
              height={18} 
            />
          </button>
          <button
            className="cursor-pointer hover:opacity-70 transition-opacity duration-300"
            aria-label="Shopping bag"
          >
            <Image 
              src={bagImg} 
              alt="bag" 
              width={18} 
              height={18} 
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
