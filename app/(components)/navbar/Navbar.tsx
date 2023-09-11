"use client";
import { User } from "@/app/constants";
import { signOut } from "next-auth/react"
import Link from "next/link";
import { useState } from "react";
import { Button, Link as ChakraLink, Menu, MenuButton, MenuItem, MenuList, transition } from "@chakra-ui/react";
import { BsArrow90DegDown, BsArrowDown } from "react-icons/bs";
import { makeNameStringCorrect } from "@/app/(helpers)";

interface UserMenuProps {
  myUser: any;
}

const Navbar: React.FC<UserMenuProps> = ({ myUser }) => {
  return (
    <div className='sticky top-0 z-50 bg-white py-4 shadow-md border-b-2 border-blue-500 px-32'>
      <div className="w-full flex items-center justify-between">
        <div>
          <Link href={"/"} className='font-semibold text-center text-blue-500 px-10 py-2 text-sm  bg-white border border-gray-200 rounded-l-lg hover:bg-blue-100 cursor-pointer'>MKSigorta</Link>
          <Link href={"/about"} className=' font-medium text-sm text-center text-gray-900 px-10 py-2 bg-white border border-gray-200 hover:bg-blue-100 cursor-pointer'>Hakkımızda</Link>
          <Link href={"/contact"} className=' font-medium text-sm text-center text-gray-900 px-10 py-2 bg-white border border-gray-200 rounded-r-lg hover:bg-blue-100 cursor-pointer'>İletişim</Link>
        </div>
        {!myUser && (
          <ChakraLink
            href='/auth'
            className='font-semibold text-center text-blue-500 px-10 py-2 text-sm  bg-white border border-gray-200 rounded-lg hover:bg-blue-100 cursor-pointer'
            style={{
              textDecoration: 'none',
            }}
          >
            Giriş yap
          </ChakraLink>
        )}

        {myUser && (
          <Menu>
            <MenuButton>
              {myUser?.image ?
                <img
                  src={myUser?.image}
                  alt="user"
                  className='w-[50px] h-[50px] rounded-full cursor-pointer'
                /> : (
                  <div
                    className='w-[50px] h-[50px] rounded-full bg-blue-500 flex items-center justify-center text-white font-medium cursor-pointer'
                  >
                    <span>{myUser?.name?.at(0)?.toUpperCase()}</span>
                    <span>{myUser?.surname?.at(0)?.toUpperCase() || myUser?.name?.at(1)?.toUpperCase()}</span>
                  </div>
                )}
            </MenuButton>
            <MenuList style={{
              paddingRight: 6,
              paddingLeft: 6,
            }}>
              <MenuItem
                style={{
                  borderRadius: 8,
                }}
              >
                <div>
                  <Link href={{
                    pathname: `/users/${myUser?.id}`,
                  }}>
                    <div className='flex flex-col'>
                      <span className="font-semibold">
                        {myUser?.name + " " + (myUser?.surname || " ")}
                      </span>
                      <span className='text-gray-400'>{myUser?.email}</span>
                    </div>
                  </Link>
                </div>
              </MenuItem>
              {User.map((item, index) => (
                <MenuItem key={index}
                  style={{
                    paddingTop: 8,
                    borderRadius: 8,
                  }}
                >
                  <Link href={item.link}>
                    {item.name}
                  </Link>
                </MenuItem>
              ))}
              <div className="">
                <Button
                  onClick={() => signOut()}
                  className="w-full"
                  style={{
                    marginTop: 10,
                    borderWidth: 1,
                    fontWeight: "normal",
                  }}
                  opacity={0.8}
                  borderColor={"rgba(220, 38, 38, 0.2)"}
                  color={"#44403c"}
                  _hover={{ backgroundColor: "#dc2626", color: "#fff", opacity: 1 }}
                  variant={"outline"}
                >
                  Çıkış yap
                </Button>
              </div>
            </MenuList>
          </Menu>
        )}

      </div>
    </div >
  );
};

export default Navbar;
