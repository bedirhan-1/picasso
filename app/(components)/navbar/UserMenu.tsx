import { SafeUser } from "@/app/types";
import { User } from "@/app/constants";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Button } from "@chakra-ui/react";
import { makeNameStringCorrect } from "@/app/(helpers)";


interface UserMenuProps {
    currentUser: SafeUser | null;
    closeUserMenu: () => void;
}

const UserMenu = ({ currentUser, closeUserMenu }: UserMenuProps) => {
    return (
        <div className='flex flex-col  bg-white shadow-lg right-0 rounded-lg px-4 py-2 gap-6'>
            <div className='flex items-center gap-4'>
                <Link href={{
                    pathname: '/user',
                    query: { id: JSON.stringify(currentUser?.id) }
                }}>
                    {currentUser?.image ? <img
                        src={currentUser?.image}
                        alt="user"
                        className='w-[50px] h-[50px] rounded-full cursor-pointer'
                    /> : (<div
                        className='w-[50px] h-[50px] rounded-full bg-blue-500 flex items-center justify-center text-white font-medium cursor-pointer'
                    >
                        <span>{currentUser?.name?.at(0)?.toUpperCase()}</span>
                        <span>{currentUser?.surname?.at(0)?.toUpperCase() || currentUser?.name?.at(1)?.toUpperCase()}</span>
                    </div>)}
                </Link>
                <div className='flex flex-col'>
                    <span>
                        {makeNameStringCorrect(currentUser?.name?.toLowerCase() || "")}
                    </span>
                    <span className='text-gray-400'>{currentUser?.email}</span>
                </div>
            </div>

            <div className='flex flex-col gap-3 w-full font-light'>
                {User.map((item) => (
                    <div key={item.name} onClick={closeUserMenu} className="w-full">
                        <Link href={item.link} className="p-2 bg-white transition-all duration-300 hover:bg-blue-500 hover:font-bold">
                            {item.name}
                        </Link>
                    </div>
                ))}
            </div>

            <Button
                variant={"outline"}
                onClick={() => {
                    signOut();
                }}
                className='w-full'
            >
                Çıkış Yap
            </Button>

        </div >
    );
}

export default UserMenu;