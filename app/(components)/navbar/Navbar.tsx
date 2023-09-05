"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@chakra-ui/react";


const Navbar = () => {
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
        <Link href={"/login"}>
          <Button
            colorScheme="blue"
            variant="ghost"
            size="sm"
            className="ml-10"
          >
            Giriş Yap
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
