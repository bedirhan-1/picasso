"use client";

import React, { useState, ChangeEvent } from "react";

import { emailRegex } from "../(helpers)";
import { Button, Container, FormControl, FormLabel, Input, Heading, FormErrorMessage } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { Resend } from 'resend';
import { toast } from "react-toastify";

interface Values {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

const initialValues: Values = {
  name: "",
  email: "",
  subject: "",
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
  const resend = new Resend('re_3KNijhvS_FrhWezidEtr3AVmerc3n9XNf');

  // resend.emails.send({
  //   from: values.email,
  //   to: 'bedirhan9828@gmail.com',
  //   subject: values.subject ?? 'MKSigorta İletişim Formu',
  //   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
  // });

  const sendEmail = () => {
    resend.emails.send({
      from: values.email,
      to: 'bedirhangiden@gmail.com',
      subject: values.subject ?? 'MKSigorta İletişim Formu',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    }).then(() => {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      toast.success("Mesajınız başarıyla gönderildi")
    }).catch((err) => {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      toast.error(err.message)
    });
  }

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
    sendEmail();
  };

  return (
    <div className="w-full flex justify-evenly">
      <div className="w-[40%]">
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
              touched.email && !values.email
                ? "2px solid #e53e3e"
                : "2px solid #cbd5e0"
            }
          />
          <FormErrorMessage  >Email alanı boş bırakılamaz</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="subject" marginTop={5}>Konu</FormLabel>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={handleChange}
            onBlur={onBlur}
            placeholder="Opsiyonel"
          />
          <FormErrorMessage>Konu alanı boş bırakılamaz</FormErrorMessage>
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
      </div>
      <div className=" flex flex-col align-middle items-center">
        <img
          src={"/contact.jpg"}
          alt="auth"
          width={455}
          className={`object-contain aspect-[1/1] rounded-2xl mt-[115px] shadow-2xl ${!state ? "shadow-purple-200" : "shadow-blue-200"}`}
        />
      </div>
    </div >
  );
};

export default Contact;
