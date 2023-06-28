"use client";

import React from "react";

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  textArea?: boolean;
  id: string;
  placeholder: string;
  big?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,

  value,
  onChange,
  name,
  textArea,
  id,
  placeholder,
  big,
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      id={id}
      onChange={onChange}
      value={value}
      name={name}
      className={`rounded-md w-full p-4 pt-6 font-light bg-white border-2 outline-none transition disabled:opacity-70 text-black ${
        textArea ? "w-700px" : "w-full"
      } ${big ? "w-[700px] pb-[1rem]" : ""}`}
    />
  );
};

export default Input;
