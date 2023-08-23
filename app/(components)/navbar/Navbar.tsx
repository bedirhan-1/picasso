"use client";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import Link from "next/link";
import { SafeUser } from "@/app/types";
import UserMenu from "./UserMenu";

interface UserMenuProps {
  myUser: SafeUser | null;
}

const Navbar: React.FC<UserMenuProps> = ({ myUser }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const closeUserMenu = () => {
    setUserMenuOpen(false);
  };

  return (
    <div className='sticky top-0 z-50  bg-opacity-40 backdrop-blur-xl px-5 py-1 shadow-lg'>
      <div className='flex items-center justify-between gap-2'>
        <div className='flex items-center gap-6 flex-1 relative'>
          <Link href='/' className='flex items-center gap-7 justify-center'>
            <img
              src='/mksigorta-aracilik.png'
              alt='Logo'
              className='object-cover rounded-xl'
              width={400}
            />
            <h1>
              Mustafa Kurtulmuş Araclılık ve
              <br />
              Sigortacılık Hizmetleri
            </h1>
          </Link>
        </div>
        <div className='flex items-center pl-10 rounded-full gap-10'>
          <Link href='/' className='px-2'>
            Anasayfa
          </Link>
          <Link href='/create-policy' className='px-2'>
            Poliçe Oluştur
          </Link>
          <Link href='/about' className='px-2'>
            Hakkımızda
          </Link>
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
      </div>
    </div>
  );
};
export default Navbar;
