"use client";

import React, { useState, ChangeEvent } from "react";

import { emailRegex } from "../(helpers)";
import { Button, Container, FormControl, FormLabel, Input, Heading, FormErrorMessage } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

interface Values {
  name: string;
  email: string;
  message: string;
}

const initialValues: Values = {
  name: "",
  email: "",
  message: "",
};

interface State {
  values: Values;
  isLoading?: boolean;
}

const initialState: State = { values: initialValues };

const Contact: React.FC = () => {
  const [state, setState] = useState<State>(initialState);
  const [touched, setTouched] = useState<Values>(initialValues);
  const { values, isLoading } = state;

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
  };

  const session = useSession();
  console.log(session)

  return (
    <Container
      maxW="xl"
      centerContent style={
        {
          width: "100%",
          padding: "2rem",
          marginTop: "2rem",
          backgroundColor: "#fff",
        }

      }>
      <Heading as="h1" size="xl" my={10}>
        İletişim
      </Heading>
      <FormControl isInvalid={touched.name && !values.name || false} isRequired>
        <FormLabel htmlFor="name">İsim</FormLabel>
        <Input
          border={
            touched.name && !values.name
              ? "2px solid #e53e3e"
              : "2px solid #cbd5e0"
          }
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage  >İsim alanı boş bırakılamaz</FormErrorMessage>
      </FormControl >
      <FormControl isInvalid={touched.email && !values.email || false} isRequired>
        <FormLabel htmlFor="email" marginTop={5}>Email</FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
          border={
            touched.name && !values.name
              ? "2px solid #e53e3e"
              : "2px solid #cbd5e0"
          }
        />
        <FormErrorMessage  >Email alanı boş bırakılamaz</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={touched.message && !values.message || false} isRequired>
        <FormLabel htmlFor="message" marginTop={5}>Mesajınızı giriniz</FormLabel>
        <Input
          id="message"
          name="message"
          type="text"
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Mesaj alanı boş bırakılamaz</FormErrorMessage>
      </FormControl>
      <Button
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          width: "100%",
          height: "3rem",
          backgroundColor: "#3b82f6",
          color: "#fff",
          borderRadius: "0.375rem",
          fontSize: "1rem",
          fontWeight: 600,
          transition: "all 0.15s ease",

        }}
        type="submit"
        isDisabled={!(values.name && values.email && values.message)}
        onClick={onSubmit}
        isLoading={isLoading}
      >
        Gönder
      </Button>
    </Container >
  );
};

export default Contact;
