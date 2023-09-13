'use client'
import Link from "next/link";
import {usePathname} from 'next/navigation';
type Props = {};

const navigation = [
  { name: "Home", href: "/" },
  { name: "History", href: "/history" },
];

const NavBar = ({}: Props) => {
  let pathName = usePathname();
  console.log('usePathname',pathName)

  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1"></div>
      <div className="flex gap-x-12">
        {
          pathName=='/' ? ( <Link 
            href={navigation[1].href}
            className="text-sm font-semibold leading-6 text-gray-900">{navigation[1].name}</Link>):( <Link 
              href={navigation[0].href}
              className="text-sm font-semibold leading-6 text-gray-900">{navigation[0].name}</Link>)
        }
      </div>
    </nav>
  );
};

export default NavBar;
