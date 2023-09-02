"use client";
// import { useState } from "react";
// import { BsPersonCircle } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { SafeUser } from "@/app/types";
// import UserMenu from "./UserMenu";
import Logo from "../../../public/logo.svg";
interface UserMenuProps {
  myUser: SafeUser | null;
}

const Navbar: React.FC<UserMenuProps> = ({ myUser }) => {
  // const [userMenuOpen, setUserMenuOpen] = useState(false);

  // const closeUserMenu = () => {
  //   setUserMenuOpen(false);
  // };

  return (
    <div className='sticky top-0 z-50 bg-opacity-40 backdrop-blur-xl px-5 py-4 shadow-lg align-middle'>
      <div className='w-full grid place-items-center'>
        <div className="inline-flex rounded-md">
          <Image
            src="/MKLogo-WDescription.png"
            alt="MKSigorta Logo"
            width={356 / 2}
            height={73 / 2}
            className="object-contain cursor-pointer mr-10"
          />
          <Link href={"/"} className='font-semibold text-center text-blue-500 px-10 py-2 text-sm  bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 cursor-pointer'>MKSigorta</Link>
          <Link href="/create-policy" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Poliçe Oluştur
          </Link>
          <Link href="/about" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Hakkımızda
          </Link>
        </div>
        {/* User Section */}
        {/* {!myUser && (
            <Link
              href='/login'
              className='py-2 pr-6 rounded-full text-blue-700'
            >
              Giriş Yap
            </Link>
          )}
          {myUser && (
            <div
              className='w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer'
              onClick={() => setUserMenuOpen((prev) => !prev)}
            >
              <BsPersonCircle size={36} />
            </div>
          )}
          {userMenuOpen && (
            <div className='absolute bottom-0 top-20 right-20 text-black'>
              <UserMenu currentUser={myUser} closeUserMenu={closeUserMenu} />
            </div>
          )} */}
      </div>
    </div >
  );
};

export default Navbar;
