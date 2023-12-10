"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CreateAccount = () => {
  return (
    <main className="flex flex-col gap-6">
      <section className="flex flex-col gap-2">
        <h1 className="heading_m">Create account</h1>
        <span className="body_m">
          Let&apos;s get you started sharing your links!
        </span>
      </section>
      <form className="flex flex-col gap-6 pt-4">
        <label className="flex flex-col gap-1 relative">
          <span className="body_s">Email address</span>

          <input
            className="focus:outline-main-purple focus:shadow-active-input py-3 px-4 rounded-lg bg-[#fff] border border-[#d9d9d9] pl-[30px]"
            type="text"
            placeholder="e.g alex@email.com"
          />
          <Image
            src={"/images/icon-envelope.svg"}
            width={12}
            height={12}
            alt="Email input icon"
            className="absolute bottom-0 top-[42px] left-[10px]"
          />
        </label>
        <label className="flex flex-col gap-1 relative">
          <span className="body_s">Create password</span>
          <input
            className=" focus:outline-main-purple focus:shadow-active-input py-3 px-4 rounded-lg bg-[#fff] border border-[#d9d9d9] pl-[30px]"
            type="password"
            placeholder="At least 8 characters"
          />
          <Image
            src={"/images/icon-lock-key.svg"}
            width={12}
            height={12}
            alt="Email input icon"
            className="absolute bottom-0 top-[42px] left-[10px]"
          />
        </label>
        <label className="flex flex-col gap-1 relative">
          <span className="body_s">Confirm Password</span>
          <input
            className=" focus:outline-main-purple focus:shadow-active-input py-3 px-4 rounded-lg bg-[#fff] border border-[#d9d9d9] pl-[30px]"
            type="password"
            placeholder="At least 8 characters"
          />
          <Image
            src={"/images/icon-lock-key.svg"}
            width={12}
            height={12}
            alt="Email input icon"
            className="absolute bottom-0 top-[42px] left-[10px]"
          />
        </label>
      </form>
      <span className="body_s text-center">
        Password must contain at least 8 characters
      </span>
      <div>
        <button className="w-full bg-main-purple px-[27px] py-[11px] font-bold heading_s text-white rounded-lg ${">
          Create an account
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="body_m">Already have an account?</span>
        <Link href="/log-in" className="text-main-purple">
          Login
        </Link>
      </div>
    </main>
  );
};

export default CreateAccount;
