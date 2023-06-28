"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
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
    <div className='shadow-xl bg-white z-[99999] sticky'>
      <div className='p-3 px-4'>
        <div className='flex items-center justify-between gap-2'>
          <div className='flex items-center gap-6 flex-1 relative'>
            <Link href='/' className='flex items-center gap-7'>
              <img src='/logo.png' alt='Logo' width={98} height={34} />
              <h1>
                Mustafa Kurtulmuş Araclılık ve
                <br />
                Sigortacılık Hizmetleri
              </h1>
            </Link>
          </div>

          <div className='flex items-center gap-3'>
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
      </div>
    </div>
  );
};
export default Navbar;
