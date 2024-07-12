"use client";
import React, { useLayoutEffect, useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import EventsLists from "./EventsLists";
import Image from "next/image";
import Delogo from '@/public/delogo.jpg'
import { trauncateStringMiddle } from "./utils/helpers";
import Link from "next/link";


function Homepage() {
   


  return (
    <>
    <header className="bg-black w-full block">
        <section className=" justify-between flex w-full max-w-[700px] mx-auto">
    <Image src={Delogo} alt="delogo" className="w-10 block" />
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
