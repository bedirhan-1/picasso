"use client";

import React from 'react'
import { useSession } from "next-auth/react";
import { Heading } from '@chakra-ui/react';

const page = () => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    } else if (status === "unauthenticated") {
        return <div>Unauthenticated</div>;
    } else if (status === "authenticated") return (
        <div className='flex flex-col w-full align-middle text-3xl'>
            {session?.user?.name}
        </div>
    )
}

export default page;

