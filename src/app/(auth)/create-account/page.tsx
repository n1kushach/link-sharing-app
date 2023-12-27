'use client';
import React from 'react';
import Link from 'next/link';

const CreateAccount = () => {
  return (
    <main className='flex flex-col gap-6'>
      <section className='flex flex-col gap-2'>
        <h1 className='heading_m'>Create account</h1>
        <span className='body_m'>Let&apos;s get you started sharing your links!</span>
      </section>
      <form className='flex flex-col gap-6 pt-4'>
        <label className='relative flex flex-col gap-1'>
          <span className='body_s'>Email address</span>

          <input
            className='rounded-lg border border-[#d9d9d9] bg-[#fff] px-4 py-3 pl-[30px] focus:shadow-active-input focus:outline-main-purple'
            type='text'
            placeholder='e.g alex@email.com'
          />
        </label>
        <label className='relative flex flex-col gap-1'>
          <span className='body_s'>Create password</span>
          <input
            className=' rounded-lg border border-[#d9d9d9] bg-[#fff] px-4 py-3 pl-[30px] focus:shadow-active-input focus:outline-main-purple'
            type='password'
            placeholder='At least 8 characters'
          />
        </label>
        <label className='relative flex flex-col gap-1'>
          <span className='body_s'>Confirm Password</span>
          <input
            className=' rounded-lg border border-[#d9d9d9] bg-[#fff] px-4 py-3 pl-[30px] focus:shadow-active-input focus:outline-main-purple'
            type='password'
            placeholder='At least 8 characters'
          />
        </label>
      </form>
      <span className='body_s text-center'>Password must contain at least 8 characters</span>
      <div>
        <button className='heading_s ${ w-full rounded-lg bg-main-purple px-[27px] py-[11px] font-bold text-white'>
          Create an account
        </button>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <span className='body_m'>Already have an account?</span>
        <Link href='/log-in' className='text-main-purple'>
          Login
        </Link>
      </div>
    </main>
  );
};

export default CreateAccount;
