"use client"
import { Heading, Switch } from "@chakra-ui/react";
import Login from "../(components)/auth/Login"
import Register from "../(components)/auth/Register";
import { useState } from "react";

const Auth = () => {
    const [state, setState] = useState(true);
    return (
        <div className="w-full flex justify-evenly">
            <div>
                <div className="flex mt-10 justify-center align-middle items-center space-x-6">
                    <Heading size="lg" color={state ? "lightgray" : "0f172a"}>Kaydol</Heading>
                    <Switch
                        aria-label="Switch between login and register"
                        size='lg'
                        colorScheme="blue"
                        isChecked={state}
                        onChange={() => setState(!state)}
                    />
                    <Heading size="lg" color={state ? "0f172a" : "lightgray"}>Giriş Yap</Heading>
                </div>
                {state ? <Login /> : <Register setSwitchState={setState} />}
            </div>
            <div className=" flex flex-col align-middle items-center">
                <img
                    src={!state ? "/sign-in-page.jpg" : "/secure-information.jpg"}
                    alt="auth"
                    width={455}
                    className={`object-contain aspect-[1/1] rounded-2xl mt-[115px] shadow-2xl ${!state ? "shadow-purple-200" : "shadow-blue-200"}`}
                />
            </div>
        </div>
    )
}

export default Auth;
