'use client';

import Link from 'next/link';
import NavLink from './NavLink';
import { IoIosMenu } from 'react-icons/io';
import NavOverlay from './NavOverlay';
import { useState } from 'react';

const Navbar = () => {
  const [openOverlay, setOpenOverlay] = useState(false);

  return (
    <header className="relative">
      <nav className="flex items-center justify-between py-6 mb-10 px-5">
        <Link href={'/'} className="text-3xl font-semibold text-slate-800">
          Surya<span className="text-blue-500">Dev</span>
        </Link>

        <ul className="hidden md:flex items-center justify-between text-slate-700 gap-10">
          <NavLink href="/" title="Home" />
          <NavLink href="/about" title="About" />
          <NavLink href="/projects" title="Projects" />
          <NavLink href="/blog" title="Blog" />
        </ul>

        <Link
          href={'/contact'}
          className="hidden md:block bg-gray-800 px-5 py-2 rounded-xl text-slate-200 hover:bg-blue-500 transition-all duration-300 ease-in-out"
        >
          Contact me
        </Link>
        <button
          onClick={() => setOpenOverlay(true)}
          className="block md:hidden text-[40px] active:bg-blue-500 active:text-slate-100 p-3 rounded-full transition-all duration-100"
        >
          <IoIosMenu />
        </button>
      </nav>
      {openOverlay && <NavOverlay open={() => setOpenOverlay(false)} />}
    </header>
  );
};

export default Navbar;
