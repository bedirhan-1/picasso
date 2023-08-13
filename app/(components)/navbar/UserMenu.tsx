import { SafeUser } from "@/app/types";
import { User } from "@/app/constants";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Button, { ButtonTypes } from "../buttons/Button";

interface UserMenuProps {
  currentUser: SafeUser | null;
  closeUserMenu: () => void;
}

export default function UserMenu({
  currentUser,
  closeUserMenu,
}: UserMenuProps) {
  const router = useRouter();
  const exit = () => {
    signOut();
  };

  return (
    <div
      className='
    flex flex-col  bg-white shadow-lg right-0 rounded-lg px-4 py-2 gap-6
    '
    >
      <div className='flex items-center gap-4'>
        <div
          className='w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center text-white cursor-pointer'
          onClick={() => router.push("/user")}
        >
          <span>{currentUser?.name?.at(0)?.toUpperCase()}</span>
          <span>{currentUser?.surname?.at(0)?.toUpperCase()}</span>
        </div>

        <div className='flex flex-col'>
          <span>
            {currentUser?.name?.toLowerCase() +
              " " +
              currentUser?.surname?.toLocaleLowerCase()}
          </span>
          <span className='text-gray-400'>{currentUser?.email}</span>
        </div>
      </div>
      <div className='flex flex-col gap-3 font-light'>
        {User.map((item) => (
          <div key={item.name} onClick={closeUserMenu}>
            <Link href={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>

      <Button
        text='Sign out'
        buttonType={ButtonTypes.Dark}
        onClick={exit}
        isDisabled={false}
      />
    </div>
  );
}
