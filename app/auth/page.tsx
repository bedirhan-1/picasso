"use client"
import { Switch } from "@chakra-ui/react";
import Login from "../(components)/auth/Login"
import Register from "../(components)/auth/Register";

const Auth = () => {
    return (
        <div className="flex w-full justify-evenly">

            <Login />
            <Switch
                size='lg'
                colorScheme="blue"
            />
            <Register />
        </div>
    )
}

export default Auth;
