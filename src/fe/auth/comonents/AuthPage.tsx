"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import SubmitForm from "../../utils/components/SubmitForm";
import { authenticateAction } from "@/src/be/serverActions/actions";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const AuthPage = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [messageAPi, context] = message.useMessage();

  const submit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!emailRef || !emailRef.current || !passwordRef || !passwordRef.current)
      return;
    setPending(true);
    messageAPi.loading("Processingg...",100000)

    const [success, error] = await authenticateAction(
      emailRef.current.value,
      passwordRef.current.value
    );
    setPending(false);
    messageAPi.destroy()

    if (error) {
      messageAPi.error(error, 6);
      return;
    }
    messageAPi.success(success, 6);
    router.push("/");
  };

  return (
    <main className="bg-grad h-[100vh] flex items-center justify-center">
      {context}
      <section className="bg-black w-full max-w-[430px] items-center flex flex-col px-4 py-24 rounded-2xl shadow-hd">
        <h2 className="text-white mb-8 text-xl font-semibold">
          Sign In / Create Account
        </h2>
        <form action="" className="items-center flex flex-col  space-y-8">
          <input
            required
            ref={emailRef}
            type="text"
            id="email"
            className="placeholder:text-[#eee] h-16 outline-none block text-center rounded-full px-6 border-2 bg-transparent border-[#f2d204] text-white text-xl"
            placeholder="email"
          />
          return (
          <section className="border-[#f2d204] bg-transparent rounded-full flex justify-between items-center  border-2  px-6">
            <input
              required
              ref={passwordRef}
              id="password"
              type={showPassword ? "text" : "password"}
              className="placeholder:text-[#eee] h-16 outline-none block text-center bg-transparent outline-0  text-white text-xl"
              placeholder="password"
            />
            {!showPassword ? (
              <BsEye
                size={25}
                className="text-white hover:text-[var(--de-color)] cursor-pointer"
                onClick={() => {
                  setShowPassword(true);
                }}
              />
            ) : (
              <BsEyeSlash
                size={25}
                className="text-white hover:text-[var(--de-color)] cursor-pointer"
                onClick={() => {
                  setShowPassword(false);
                }}
              />
            )}
          </section>{" "}
          <SubmitForm
            click={submit}
            disabled={pending}
            value="Submit"
            className="disabled:opacity-[0.4] text-black bg-grad rounded-lg h-14 w-full cursor-pointer text-xl px-6 mx-auto block"
          />
        </form>
        <Link href="" className="underline text-xl my-4 text-grad block ">
          Forgot Password?
        </Link>
      </section>
    </main>
  );
};

export default AuthPage;
