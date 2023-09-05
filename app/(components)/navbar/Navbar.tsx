"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@chakra-ui/react";


const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 bg-opacity-40 backdrop-blur-xl px-5 py-4 shadow-lg align-middle'>
      <div className='w-full grid place-items-center'>
        <div className=" rounded-md flex items-center">
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
          <Link href="/contact" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            İletişim
          </Link>
          <Link href="/about" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 border-r rounded-r-md hover:bg-gray-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Hakkımızda
          </Link>
          <Link href={"/login"}
            className="justify-end flex-1"
          >
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
    </div >
  );
};

export default Navbar;
