"use client";
import { NextResponse } from "next/server";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type IInitialState = {
  policyNumber: string;
  type: string;
  startDate: string;
  endDate: string;
  premium: number;
  userId: string;
  startDateAsDate: Date;
  endDateAsDate: Date;
};

const initialState: IInitialState = {
  policyNumber: "",
  startDate: "",
  endDate: "",
  type: "",
  userId: "",
  premium: 0,
  startDateAsDate: new Date(),
  endDateAsDate: new Date(),
};

const PolicyForm = () => {
  const [state, setState] = useState(initialState);
  const router = useRouter();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const formattedState = {
      ...state,
      startDate: state.startDateAsDate.toISOString(),
      endDate: state.endDateAsDate.toISOString(),
    };

    axios
      .post("/api/createPolicy", state)
      .then(() => {
        router.refresh();
      })
      .then(() => {
        setTimeout(() => {
          router.push("/my-policies");
        }, 2500);
      })
      .catch((error: any) => {
        console.log("POLICY error =>", error);
      });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    if (type === "date") {
      const dateValue = new Date(value);
      setState((prevState) => ({
        ...prevState,
        [name + "AsDate"]: dateValue,
        [name]: value,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <div className='p-16'>
      <h2 className='text-center text-4xl text-black'>Oluşturulacak Poliçe</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='policyNumber' className='block mb-2 font-medium'>
            Poliçe Numarası
          </label>
          <input
            type='text'
            id='policyNumber'
            name='policyNumber'
            className='border border-gray-300 px-4 py-2 rounded-md w-full'
            value={state.policyNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='startDate' className='block mb-2 font-medium'>
            Başlangıç Tarihi
          </label>
          <input
            type='date'
            id='startDate'
            name='startDate'
            className='border border-gray-300 px-4 py-2 rounded-md w-full'
            value={state.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='endDate' className='block mb-2 font-medium'>
            Bitiş Tarihi
          </label>
          <input
            type='date'
            id='endDate'
            name='endDate'
            className='border border-gray-300 px-4 py-2 rounded-md w-full'
            value={state.endDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='premium' className='block mb-2 font-medium'>
            Prim
          </label>
          <input
            type='number'
            id='premium'
            name='premium'
            className='border border-gray-300 px-4 py-2 rounded-md w-full'
            value={state.premium}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-md'
        >
          Poliçe Oluştur
        </button>
      </form>
    </div>
  );
};

export default PolicyForm;
