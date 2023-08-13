"use client";
import { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // İletişim formunun gönderim işlemleri burada gerçekleştirilebilir
    console.log("Form submitted:", { name, email, message });
    // ... İşlemlerin devamı
  };

  return (
    <div className='container flex-1 mx-auto py-8'>
      <h1 className='text-2xl font-bold mb-4'>İletişim</h1>
      <form onSubmit={handleSubmit} className='max-w-lg'>
        <div className='mb-4'>
          <label htmlFor='name' className='block font-medium mb-1'>
            Adınız
          </label>
          <input
            id='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block font-medium mb-1'>
            E-posta Adresiniz
          </label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block font-medium mb-1'>
            Mesajınız
          </label>
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded'
            required
          ></textarea>
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded'
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Contact;
