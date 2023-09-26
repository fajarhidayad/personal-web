'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  title: string;
  href: string;
}

const NavLink = (props: NavLink) => {
  const pathname = usePathname();
  const activeClassLink = pathname === props.href ? 'text-blue-500' : '';

  return (
    <li>
      <Link
        href={props.href}
        className={`hover:text-blue-500 transition-all duration-200 ${activeClassLink}`}
      >
        {props.title}
      </Link>
    </li>
  );
};

export default NavLink;
