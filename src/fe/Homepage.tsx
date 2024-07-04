"use client";
import React, { useLayoutEffect, useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import EventsLists from "./EventsLists";
import { useAccount } from "wagmi";
import AuthPage from "./auth/comonents/AuthPage";
import Image from "next/image";
import Delogo from '@/public/delogo.jpg'
import { trauncateStringMiddle } from "./utils/healpers";
import Link from "next/link";


function Homepage() {
    const {isConnected,address}=useAccount()
   

    if(!isConnected){
        return(
            <AuthPage />
        )
    }
  return (
    <>
    <header className="bg-black w-full block">
        <section className=" justify-between flex w-full max-w-[700px] mx-auto">
    <Image src={Delogo} alt="delogo" className="w-10 block" />
    <p className="text-white text-xl max-w-[50px] ">{trauncateStringMiddle(address)}</p>
    </section>
    </header>
      <Link href="/add-event" className="m-4 flex items-center cursor-pointer w-fit">
        <BiPlusCircle className="text-[#f2d204] font-extrabold text-2xl mx-1" />
        <h1 className=" text-xl text-grad  ">Add an event</h1>
      </Link>
      <EventsLists />
    </>
  );
}

export default Homepage;
