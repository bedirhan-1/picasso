"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface InitialStateProps {
  name: string;
  surname: string;
  email: string;
  password: string;
}

const initialState: InitialStateProps = {
  name: "",
  surname: "",
  email: "",
  password: "",
};

export default function page() {
  const [state, setState] = useState(initialState);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();

    axios
      .post("/api/register", state)
      .then(() => {
        router.refresh();
      })
      .then(() => {
        setTimeout(() => {
          router.push("/login");
        }, 2500);
      })
      .catch((error: any) => {
        throw new Error(error);
      });
  }

  return (
    <form onSubmit={onSubmit} className='text-center'>
      <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
        <>
          <Input
            placeholder='Name'
            id='name'
            type='text'
            name='name'
            onChange={handleChange}
            value={state.name}
          />
          <Input
            placeholder='Surname'
            id='surname'
            type='text'
            name='surname'
            onChange={handleChange}
            value={state.surname}
          />
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
        </>
        <Button
          variant={"solid"}
          type='submit'
          className='bg-green-700 align-middle justify-center items-center p-4 rounded-md text-white'
        >
          Kayıt ol
        </Button>
      </div>

      <div>
        <div>
          Zaten hesabınız var mı?{" "}
          <Link href='/login' className='text-blue-700 underline'>
            Giriş Yap
          </Link>
        </div>
      </div>
    </form>
  );
}