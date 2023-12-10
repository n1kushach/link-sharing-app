import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogIn = () => {
  return (
    <main className="flex flex-col gap-6">
      <section className="flex flex-col gap-2">
        <h1 className="heading_m">Login</h1>
        <span className="body_m">
          Add your details below to get back into the app
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
          <span className="body_s">Password</span>
          <input
            className=" focus:outline-main-purple focus:shadow-active-input py-3 px-4 rounded-lg bg-[#fff] border border-[#d9d9d9] pl-[30px]"
            type="password"
            placeholder="e.g Enter your password"
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
      <div>
        <button className="w-full bg-main-purple px-[27px] py-[11px] font-bold heading_s text-white rounded-lg">
          Login
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="body_m">Don&apos;t have an account?</span>
        <Link href="/create-account" className="text-main-purple">
          Create account
        </Link>
      </div>
    </main>
  );
};

export default LogIn;
