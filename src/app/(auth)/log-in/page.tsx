'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LogIn = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    if (credentials?.email == 'admin' && credentials?.password == 'admin') {
      router.push('/');
    }
  };

  return (
    <main className='flex flex-col gap-6'>
      <section className='flex flex-col gap-2'>
        <h1 className='heading_m'>Login</h1>
        <span className='body_m'>
          Add your details below to get back into the app
        </span>
      </section>
      <form className='flex flex-col gap-6 pt-4'>
        <label className='relative flex flex-col gap-1'>
          <span className='body_s'>Email address</span>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCredentials((prev): { email: string; password: string } => ({
                ...prev,
                email: e.target.value,
              }))
            }
            className='rounded-lg border border-[#d9d9d9] bg-[#fff] px-4 py-3 pl-[30px] focus:shadow-active-input focus:outline-main-purple'
            type='text'
            placeholder='e.g alex@email.com'
          />
          <Image
            src={'/images/icon-envelope.svg'}
            width={12}
            height={12}
            alt='Email input icon'
            className='absolute bottom-0 left-[10px] top-[42px]'
          />
        </label>
        <label className='relative flex flex-col gap-1'>
          <span className='body_s'>Password</span>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCredentials((prev): { email: string; password: string } => ({
                ...prev,
                password: e.target.value,
              }))
            }
            className=' rounded-lg border border-[#d9d9d9] bg-[#fff] px-4 py-3 pl-[30px] focus:shadow-active-input focus:outline-main-purple'
            type='password'
            placeholder='e.g Enter your password'
          />
          <Image
            src={'/images/icon-lock-key.svg'}
            width={12}
            height={12}
            alt='Email input icon'
            className='absolute bottom-0 left-[10px] top-[42px]'
          />
        </label>
      </form>
      <div>
        <button
          onClick={() => handleSubmit()}
          className={`heading_s w-full rounded-lg bg-main-purple px-[27px] py-[11px] font-bold text-white duration-300 ${
            credentials?.email.length < 5 &&
            credentials?.password.length < 5 &&
            'opacity-25 duration-300'
          }`}
        >
          Login
        </button>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <span className='body_m'>Don&apos;t have an account?</span>
        <Link href='/create-account' className='text-main-purple'>
          Create account
        </Link>
      </div>
    </main>
  );
};

export default LogIn;
