'use client';

import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import NavLink from './NavLink';
import Link from 'next/link';

export default function NavOverlay(props: { close: () => void }) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="block md:hidden bg-white fixed w-full top-0 z-10 transition-all duration-200 px-5 py-8 rounded-b-lg shadow"
    >
      <ul className="flex flex-col items-center gap-y-8">
        <li
          className="flex justify-between items-center w-full"
          onClick={props.close}
        >
          <Link href={'/'} className="text-2xl font-semibold text-slate-800">
            Surya<span className="text-blue-500">Dev</span>
          </Link>
          <button className="text-3xl text-slate-600 rounded-full p-3 active:bg-gray-100">
            <FaTimes />
          </button>
        </li>
        <NavLink href={'/'} title="Home" onClick={props.close} />
        <NavLink href={'/about'} title="About" onClick={props.close} />
        <NavLink href={'/projects'} title="Projects" onClick={props.close} />
        <NavLink href={'/blog'} title="Blog" onClick={props.close} />
      </ul>
    </motion.nav>
  );
}
