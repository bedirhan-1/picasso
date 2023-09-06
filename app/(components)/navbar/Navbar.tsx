"use client";

import Link from "next/link";
import Image from "next/image";
import UserMenu from "./UserMenu";
import { useState } from "react";

interface UserMenuProps {
  myUser: any;
}

const Navbar: React.FC<UserMenuProps> = ({ myUser }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const closeUserMenu = () => {
    setUserMenuOpen(false);
  };

  return (
    <div className='sticky top-0 z-50 bg-opacity-40 backdrop-blur-xl px-5 py-4 shadow-xl'>
      <div className="w-full flex items-center justify-evenly">
        <Image
          src="/MKLogo-WDescription.png"
          alt="MKSigorta Logo"
          width={356 / 2}
          height={73 / 2}
          className="object-contain cursor-pointer mr-10"
        />
        <div>
          <Link href={"/"} className='font-semibold text-center text-blue-500 px-10 py-2 text-sm  bg-white border border-gray-200 rounded-l-lg hover:bg-blue-100 cursor-pointer'>MKSigorta</Link>
          <Link href={"/create-policy"} className=' font-medium text-sm text-center text-gray-900 px-10 py-2 bg-white border border-gray-200 hover:bg-blue-100 cursor-pointer'>Poliçe Oluştur</Link>
          <Link href={"/about"} className=' font-medium text-sm text-center text-gray-900 px-10 py-2 bg-white border border-gray-200 hover:bg-blue-100 cursor-pointer'>Hakkımızda</Link>
          <Link href={"/contact"} className=' font-medium text-sm text-center text-gray-900 px-10 py-2 bg-white border border-gray-200 rounded-r-lg hover:bg-blue-100 cursor-pointer'>İletişim</Link>
        </div>
        {!myUser && (
          <>
            <div>
              <Link
                href='/login'
                className='py-2 px-6 border-black border-[1px] rounded-full'
              >
                Login
              </Link>
            </div>
          </>
        )}

        {myUser && (
          <div
            className='w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center text-white cursor-pointer'
            onClick={() => setUserMenuOpen((prev) => !prev)}
          >
            <span>{myUser.name?.at(0)?.toUpperCase()}</span>
            <span>{myUser.surname?.at(0)?.toUpperCase()}</span>
          </div>
        )}

        {userMenuOpen && (
          <div className='absolute bottom-0 top-20 right-20'>
            <UserMenu currentUser={myUser} closeUserMenu={closeUserMenu} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
