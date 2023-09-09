"use client";

import React, { useState, ChangeEvent } from "react";
import {
    Button,
    Container,
    FormControl,
    Input,
    FormErrorMessage,
    InputRightElement,
    InputGroup,
    Text,
    Link as ChakraLink,
} from "@chakra-ui/react";
import { BsEyeSlash, BsEye, BsGoogle, BsFacebook } from "react-icons/bs";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Values {
    email: string;
    password: string;
}

const initialValues: Values = {
    email: "",
    password: "",
};

interface State {
    values: Values;
    isLoading?: boolean;
}

const initialState: State = { values: initialValues };

const Login: React.FC = () => {
    const [state, setState] = useState<State>(initialState);
    const [show, setShow] = React.useState(false);
    const [touched, setTouched] = useState<Values>(initialValues);
    const [error, setError] = useState<string | null>(null);
    const { values, isLoading } = state;
    const router = useRouter();

    const onBlur = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name } = event.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        setState((prev) => ({
            values: {
                ...prev.values,
                [name]: value,
            },
        }));
    };

    const onSubmit = () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        signIn("credentials", {
            redirect: false,
            email: values.email,
            password: values.password,
        }).then((signInResponse) => {
            if (signInResponse && !signInResponse.error) {
                router.push("/");
            } else {
                setError("Parola veya email yanlış! Lütfen tekrar deneyiniz.");
            }
        }).catch((error) => {
            setError("Bir hata oluştu. Lütfen tekrar deneyiniz.");
        });
    };

    return (
        <Container maxW="md" marginTop={10}
            style={{
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
                background: "linear-gradient(#64748b, #0f172a)",
                borderRadius: "1rem",
                padding: "2rem",
            }}
            className="shadow-2xl"
        >
            <div className="space-y-4">
                <Button
                    width="100%"
                    height="3rem"
                    color="#000"
                    backgroundColor={"#EFEFEF"}
                    variant={"outline"}
                    onClick={() => signIn("google")}
                    _hover={{ backgroundColor: "black", color: "white" }}
                >
                    <div className="flex justify-start items-center space-x-5">
                        <img
                            src="/google.png"
                            alt="google"
                            width={30}
                            height={30}
                            className="mr-5"
                        />
                        Google ile giriş yap
                    </div>
                </Button>
                <Button
                    width="100%"
                    height="3rem"
                    color="#000"
                    backgroundColor={"#EFEFEF"}
                    variant={"outline"}
                    onClick={() => signIn("google")}
                    _hover={{ backgroundColor: "black", color: "white" }}
                >
                    <div className="flex justify-start items-center space-x-5 text-center">
                        <img
                            src="/facebook.png"
                            alt="facebook"
                            width={30}
                            height={30}
                            className="mr-5"
                        />
                        Facebook ile giriş yap
                    </div>
                </Button>
            </div>
            <hr style={{
                border: 0,
                clear: "both",
                display: "block",
                width: "96%",
                backgroundColor: "#fff",
                height: "1px",
                marginTop: "2rem",
                marginBottom: "1rem",
            }} />
            <div className="space-y-2 w-full">
                <FormControl isInvalid={touched.email && !values.email || false} isRequired>
                    {error && (
                        <div className="w-full text-center mt-5 p-2 my-2 rounded-md bg-red-600 text-white font-medium">
                            <Text>{error}</Text>
                        </div>
                    )}
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={onBlur}
                        borderColor={touched.email && !values.email ? "#e53e3e" : "none"}
                        style={{
                            fontWeight: "bold",
                            letterSpacing: "0.08rem",
                            marginTop: "1rem",
                            height: "3.3rem",
                            borderRadius: "0.375rem",
                        }}
                        backgroundColor="white"
                        placeholder="Email @"
                    />
                    <FormErrorMessage fontWeight={"bold"} color={"#f87171"}>Lütfen email adresini kontrol ediniz!</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={touched.password && !values.password || false} isRequired>
                    <InputGroup className="flex justify-between" marginTop="1.5rem" borderRadius="0.375rem">
                        <Input
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Şifre"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={onBlur}
                            borderColor={touched.password && !values.password ? "#e53e3e" : "none"}
                            backgroundColor="white"
                            height="3.3rem"
                            style={{
                                fontWeight: "bold",
                                letterSpacing: "0.08rem",
                                borderRadius: "0.375rem",
                            }}
                        />
                        <InputRightElement width="4.25rem">
                            <Button h="2.5rem" size="md" marginTop="0.75rem" onClick={() => setShow(!show)}>
                                {show ? <BsEyeSlash size={24} /> : <BsEye size={24} />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage fontWeight={"bold"} color={"#f87171"}>Şifre alanı boş bırakılamaz!</FormErrorMessage>
                </FormControl>
            </div>
            <div className="w-full justify-between mt-10 space-y-2">
                <Button
                    width="100%"
                    height="3rem"
                    backgroundColor="#3b82f6"
                    color="#fff"
                    borderRadius="0.375rem"
                    fontSize="1rem"
                    fontWeight={600}
                    transition="all 0.5s ease"
                    type="submit"
                    isDisabled={!(values.email && values.password)}
                    onClick={onSubmit}
                >
                    Giriş Yap
                </Button>
            </div>
        </Container>
    );
};

export default Login;
