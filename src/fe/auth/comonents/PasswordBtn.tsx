"use client";
import React, { useState } from "react";

interface F {
  ref: any;
}

function PasswordBtn({ ref }: F) {
  return (
    <section className="border-[#f2d204] bg-transparent rounded-full flex justify-between items-center  border-2  px-6">
      <input
        required
        ref={ref}
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
    </section>
  );
}

export default PasswordBtn;
