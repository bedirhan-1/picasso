"use client";

import React, { useState, ChangeEvent } from "react";
import { Button, Container, FormControl, Input, Heading, FormErrorMessage, InputRightElement, InputGroup } from "@chakra-ui/react";
import { BsEyeSlash, BsEye, BsGoogle, BsFacebook } from "react-icons/bs";
import Link from "next/link";
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
  const [show, setShow] = React.useState(false)
  const [touched, setTouched] = useState<Values>(initialValues);
  const [error, setError] = useState<string | null>(null);
  const { values, isLoading } = state;
  const router = useRouter();

  const handleClick = () => setShow(!show)

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

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    const signInResponse = await signIn(
      "credentials",
      {
        redirect: false,
        email: values.email,
        password: values.password,
      });
    console.log("signInResponse: ", signInResponse);

    if (signInResponse && !signInResponse.error) {
      router.push("/");
    } else {
      console.log("ERROR: ", signInResponse);
      setError("Parola veya email yanlış! Lütfen tekrar deneyiniz.");
    }

  };


  return (
    <Container
      maxW="md"
      marginTop={"10"}
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
        background: "linear-gradient(145deg, #334155, #0f172a)",
        borderRadius: "1rem",
        padding: "2rem",
      }}
    >
      <div className=" space-y-4">
        <Button
          disabled={isLoading}
          style={{
            width: "100%",
            height: "3rem",
            color: "#fff",
            backgroundColor: "#DB4437",
          }}
          onClick={() => signIn("google")}
        >
          <div className="flex justify-start items-center space-x-5">
            <BsGoogle size={24} className="mr-5" />
            Google ile giriş yap
          </div>
        </Button>
        <Button
          disabled={isLoading}
          style={{
            width: "100%",
            height: "3rem",
            color: "#fff",
            backgroundColor: "#3b82f6",
          }}
        >
          <div className="flex justify-start items-center space-x-5 text-center">
            <BsFacebook size={24} className="mr-5" />
            Facebook ile giriş yap
          </div>
        </Button>
      </div>
      <Heading
        size="lg"
        color={"#e2e8f0"}
        alignContent={"center"}
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          textAlign: "center",
        }}>
        Veya
      </Heading>
      <div className="space-y-2">
        <FormControl isInvalid={touched.email && !values.email || false} isRequired>
          {error && (
            <div className="w-full text-center mt-5 p-2 my-2 rounded-md bg-red-600 text-white font-medium">
              <label>{error}</label>
            </div>
          )}
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
            border={
              touched.email && !values.email
                ? "2px solid #e53e3e"
                : "none"
            }
            style={{
              fontWeight: "bold",
              letterSpacing: "0.08rem",
              marginTop: "1rem",
              height: "3.3rem",
              borderRadius: "0.375rem",
            }}
            backgroundColor={"white"}
            placeholder="Email @"
          />
          <FormErrorMessage>Lütfen email adresini kontrol ediniz!</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={touched.password && !values.password || false} isRequired>
          <InputGroup className=" flex justify-between"
            style={{
              marginTop: "1.5rem",
              borderRadius: "0.375rem",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Şifre'
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={onBlur}
              border={
                touched.password && !values.password
                  ? "2px solid #e53e3e"
                  : "none"
              }
              style={{
                height: "3.3rem",
                fontWeight: "bold",
                letterSpacing: "0.08rem",
                alignItems: "center",
                justifyContent: "center",
              }}
              backgroundColor={"white"}
            />
            <InputRightElement width='4.25rem'>
              <Button h='2.5rem' size='md' marginTop={"0.75rem"} onClick={handleClick}>
                {show ? <BsEyeSlash size={24} /> : <BsEye size={24} />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>Şifre alanı boş bırakılamaz!</FormErrorMessage>
        </FormControl>
      </div>
      <div className="w-full justify-between mt-10 space-y-2">
        <Button
          style={{
            width: "100%",
            height: "3rem",
            backgroundColor: "#3b82f6",
            color: "#fff",
            borderRadius: "0.375rem",
            fontSize: "1rem",
            fontWeight: 600,
            transition: "all 0.5s ease",
          }}
          type="submit"
          isDisabled={!(values.email && values.password)}
          onClick={onSubmit}
        >
          Giriş Yap
        </Button>
        <div className="text-center mt-5 w-full font-normal text-gray-500">
          <label>Hesabınız yok mu?</label><br />
          Kayıt olmak için <Link href={"/register"} className="text-blue-500">tıklayınız</Link>
        </div>
      </div>
    </Container >
  );
};

export default Login;
