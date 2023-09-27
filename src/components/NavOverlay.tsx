'use client';

import React, { useState } from 'react';
import NavLink from './NavLink';
import { FaTimes } from 'react-icons/fa';

export default function NavOverlay(props: { open: () => void }) {
  return (
    <nav className="block md:hidden bg-white fixed w-full top-0 z-10 transition-all duration-200 px-5 py-8 rounded-b-lg">
      <ul className="flex flex-col items-center gap-y-8">
        <li
          className="self-end text-3xl text-slate-600 cursor-pointer"
          onClick={props.open}
        >
          <FaTimes />
        </li>
        <NavLink href={'/'} title="Home" />
        <NavLink href={'/about'} title="About" />
        <NavLink href={'/projects'} title="Projects" />
        <NavLink href={'/blog'} title="Blog" />
      </ul>
    </nav>
  );
}
