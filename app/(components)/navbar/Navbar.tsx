"use client";
import { User } from "@/app/constants";
import { signOut } from "next-auth/react"
import Link from "next/link";
import {
  Button, Link as ChakraLink, Menu, MenuButton, MenuItem, MenuList
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";

interface UserMenuProps {
  myUser: any;
}

const Navbar: React.FC<UserMenuProps> = ({ myUser }) => {

  const { status } = useSession();

  return (
    <div className='sticky top-0 z-50 bg-white py-4 shadow-md border-b-2 border-blue-500 px-32'>
      <div className="w-full flex items-center justify-between">
        <div>
          <Link href={"/"} className='font-semibold text-center text-blue-500 px-10 py-2 text-sm  bg-white border border-gray-200 rounded-l-lg hover:bg-blue-100 cursor-pointer'>MKSigorta</Link>
          <Link href={"/create-policy"} className=' font-medium text-sm text-center text-gray-900 px-10 py-2 bg-white border border-gray-200 hover:bg-blue-100 cursor-pointer'>Poliçe Oluştur</Link>
          <Link href={"/about"} className=' font-medium text-sm text-center text-gray-900 px-10 py-2 bg-white border border-gray-200 hover:bg-blue-100 cursor-pointer'>Hakkımızda</Link>
          <Link href={"/contact"} className=' font-medium text-sm text-center text-gray-900 px-10 py-2 bg-white border border-gray-200 rounded-r-lg hover:bg-blue-100 cursor-pointer'>İletişim</Link>
        </div>
        {status === "unauthenticated" && (
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

        {status === "loading" && (
          <div className='font-semibold text-center text-blue-500 px-10 py-2 text-sm  bg-white border border-gray-200 rounded-lg hover:bg-blue-100 cursor-pointer'>
            Yükleniyor...
          </div>
        )}

        {status === "authenticated" && (
          <Menu>
            <MenuButton
              style={{
                borderWidth: 1,
                borderColor: "#475569",
                borderRadius: "50%",
              }}
            >
              {myUser?.image ? (
                <img
                  src={myUser?.image}
                  alt=""
                  className='w-[35px] h-[35px] rounded-full cursor-pointer bg-blue-500 shadow-md'
                />
              ) : (
                <div
                  className='w-[35px] h-[35px] rounded-full bg-blue-500 flex items-center justify-center text-white font-medium cursor-pointer'
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
                {myUser?.name == undefined ?
                  <Link href={{
                    pathname: "/user",
                  }}>
                    Profile
                  </Link> :
                  <div>
                    <Link href={{
                      pathname: "/user",
                    }}>
                      <div className='flex flex-col'>
                        <span className="font-semibold">
                          {myUser?.name + " " + (myUser?.surname || " ")}
                        </span>
                        <span className='text-gray-400'>{myUser?.email}</span>
                      </div>
                    </Link>
                  </div>}
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
