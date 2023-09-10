"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Input,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { BsEyeSlash, BsEye, BsGithub, BsFacebook } from "react-icons/bs";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface RegisterProps {
  // function
  setSwitchState: (state: boolean) => void;
}

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

const Register: React.FC<RegisterProps> = ({ setSwitchState }) => {
  const [state, setState] = useState(initialState);
  const [show, setShow] = useState(false);
  const [touched, setTouched] = useState<InitialStateProps>({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const router = useRouter();


  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, [event.target.name]: event.target.value });
    console.log(state);
  }

  function onBlur(name: string) {
    setTouched({ ...touched, [name]: true });
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    axios
      .post("/api/register", state)
      .then(() => {
        setTimeout(() => {
          setSwitchState(true);
        }, 2500);
      }).then(() => {
        router.push("/");
      })
      .catch((error: any) => {
        throw new Error(error);
      });
  }
  console.log(process.env.GOOGLE_CLIENT_ID);

  return (
    <Container
      maxW="md"
      marginTop={10}
      style={{
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
        background: "linear-gradient(#64748b, #0f172a)",
        borderRadius: "1rem",
        padding: "2rem",
      }}
      className="shadow-lg"
    >
      <div className="space-y-4 flex flex-col items-center">
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
              Google ile kayıt ol
            </div>
          </Button>
          <Button
            width="100%"
            height="3rem"
            color="#000"
            backgroundColor={"#EFEFEF"}
            variant={"outline"}
            onClick={() => signIn("github")}
            _hover={{ backgroundColor: "black", color: "white" }}
          >
            <div className="flex justify-start items-center space-x-5 text-center">
              <BsGithub size={30} className="mr-5" />
              Github ile Kayıt ol
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
        }} />
        <div className="space-y-6 w-full">
          <FormControl isInvalid={touched.name && !state.name || false} isRequired>
            <Input
              id="name"
              name="name"
              type="text"
              value={state.name}
              onChange={handleChange}
              onBlur={() => onBlur("name")}
              borderColor={touched.name && !state.name ? "#e53e3e" : "none"}
              style={{
                fontWeight: "bold",
                letterSpacing: "0.08rem",
                marginTop: "1rem",
                height: "3.3rem",
                borderRadius: "0.375rem",
              }}
              backgroundColor="white"
              placeholder="Ad"
            />
            <FormErrorMessage>Ad alanı boş bırakılamaz!</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={touched.surname && !state.surname || false} isRequired>
            <Input
              id="surname"
              name="surname"
              type="text"
              value={state.surname}
              onChange={handleChange}
              onBlur={() => onBlur("surname")}
              borderColor={touched.surname && !state.surname ? "#e53e3e" : "none"}
              style={{
                fontWeight: "bold",
                letterSpacing: "0.08rem",
                height: "3.3rem",
                borderRadius: "0.375rem",
              }}
              backgroundColor="white"
              placeholder="Soyad"
            />
            <FormErrorMessage>Soyad alanı boş bırakılamaz!</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={touched.email && !state.email || false} isRequired>
            <Input
              id="email"
              name="email"
              type="email"
              value={state.email}
              onChange={handleChange}
              onBlur={() => onBlur("email")}
              borderColor={touched.email && !state.email ? "#e53e3e" : "none"}
              style={{
                fontWeight: "bold",
                letterSpacing: "0.08rem",
                height: "3.3rem",
                borderRadius: "0.375rem",
              }}
              backgroundColor="white"
              placeholder="Email @"
            />
            <FormErrorMessage>Lütfen email adresini kontrol ediniz!</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={touched.password && !state.password || false} isRequired>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder="Şifre"
                id="password"
                name="password"
                value={state.password}
                onChange={handleChange}
                onBlur={() => onBlur("password")}
                borderColor={touched.password && !state.password ? "#e53e3e" : "none"}
                backgroundColor="white"
                height="3.3rem"
                style={{
                  fontWeight: "bold",
                  letterSpacing: "0.08rem",
                  borderRadius: "0.375rem",
                }}
              />
              <InputRightElement width="4.25rem">
                <Button size="md" marginTop={"0.75rem"} onClick={() => setShow(!show)}>
                  {show ? <BsEyeSlash size={24} /> : <BsEye size={24} />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>Şifre alanı boş bırakılamaz!</FormErrorMessage>
          </FormControl>
        </div>
      </div>
      <div className="w-full justify-between mt-10">
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
          isDisabled={!(state.name && state.surname && state.email && state.password)}
          onClick={onSubmit}
        >
          Kayıt ol
        </Button>
      </div>
    </Container>
  );
}

export default Register;