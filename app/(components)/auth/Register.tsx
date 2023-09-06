"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Input,
  Heading,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { BsEyeSlash, BsEye, BsFacebook, BsGoogle } from "react-icons/bs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

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

const Register = () => {
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
  }

  function onBlur(name: string) {
    setTouched({ ...touched, [name]: true });
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
    <Container
      maxW="md"
      marginTop={10}
      centerContent
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
      <div className="space-y-2 w-full">
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
              <BsGoogle size={24} className="mr-5" />
              Google ile kayıt ol
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
              <BsFacebook size={24} className="mr-5" />
              Facebook ile Kayıt ol
            </div>
          </Button>
        </div>
        <Heading
          as="h1"
          size="lg"
          color="#fff"
          style={{
            fontWeight: "bold",
            marginTop: "2rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Veya
        </Heading>
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
              <Button size="md" marginTop={"1rem"} onClick={() => setShow(!show)}>
                {show ? <BsEyeSlash size={24} /> : <BsEye size={24} />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>Şifre alanı boş bırakılamaz!</FormErrorMessage>
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
          isDisabled={!(state.name && state.surname && state.email && state.password)}
          onClick={onSubmit}
        >
          Kayıt ol
        </Button>
        <div className="text-center mt-5 w-full font-normal text-gray-500">
          <Text>Zaten hesabınız var mı?</Text>
          <ChakraLink href="/login" color="blue.500">
            <Text>tıklayınız</Text>
          </ChakraLink>
        </div>
      </div>
    </Container>
  );
}

export default Register;