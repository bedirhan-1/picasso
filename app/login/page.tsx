"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "../(components)/inputs/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface InitialStateProps {
  email: string;
  password: string;
}

const initialState: InitialStateProps = {
  email: "",
  password: "",
};

export default function page() {
  const [state, setState] = useState(initialState);
  const router = useRouter();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();

    signIn("credentials", {
      ...state,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        router.refresh();
      }
      if (callback?.error) {
        throw new Error("Wrong Credentials");
      }
    });

    router.push("/");
  }
  return (
    <form onSubmit={onSubmit} className='text-center'>
      <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
        <Input
          placeholder='Email'
          id='email'
          type='email'
          name='email'
          onChange={handleChange}
          value={state.email}
        />
        <Input
          placeholder='Password'
          id='password'
          type='password'
          name='password'
          onChange={handleChange}
          value={state.password}
        />

        <button
          className='bg-green-700 align-middle justify-center items-center p-4 rounded-md text-white'
          type='submit'
        >
          Giriş yap
        </button>
      </div>

      <div>
        <div>
          Hesabınız yok mu?{" "}
          <Link href='/register' className='text-blue-700 underline'>
            Kayıt ol
          </Link>
        </div>
      </div>
    </form>
  );
}
