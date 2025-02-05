"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import Days from "./Days";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import Banner from "./Banner";

const AddEventForm = () => {
  const [startAutoSve,setAutoSaveStart]=useState(false)
  const eventNameRef = useRef<HTMLInputElement>(null)
  const oneDaySpanRef = useRef<HTMLInputElement>(null)
  const multiDaySpanRef = useRef<HTMLInputElement>(null)
  const [multipleDays,setMultipleDays]=useState(false)
  const numberOfDaysRef = useRef<HTMLInputElement>(null)
  const startDateRef = useRef<HTMLInputElement>(null)
  const effectiveChange = ()=>{
  }
  return (
    <form action="" className="max-w-[560px] w-full mx-auto space-y-8 px-6">
      <div>
        <label htmlFor="eventName" className="block event-details-labels">
          Event name
        </label>
        <input
        ref={eventNameRef}
          type="text"
          onChange={effectiveChange}
          className="block rounded-full w-full border border-[var(--subtext)] outline-none h-10 px-4"
          id="eventName"
        />
      </div>
      <section className="flex items-center  justify-between flex-wrap">
        <div className="my-3">
          <h2 className="event-details-labels">Event span</h2>
          <section className="flex space-x-4">
            <div className="flex flex-row-reverse ">
              <label htmlFor="oneDay" className="block cursor-pointer mx-1">
                One day
              </label>
              <input
              ref={oneDaySpanRef}
                type="radio"
                onChange={(e)=>{
                  setMultipleDays(false);
                }}
                name="eventSpan"
                id="oneDay"
                defaultChecked={true}
                className="cursor-pointer"
              />
            </div>
            <div className="flex flex-row-reverse ">
              <label htmlFor="multiDays" className="block cursor-pointer mx-1">
                Multiple days
              </label>
              <input
              onChange={(e)=>{
                setMultipleDays(e.currentTarget.checked);
              }}
              ref={multiDaySpanRef}
                type="radio"
                name="eventSpan"
                id="multiDays"
                className="cursor-pointer"
              />
            </div>
          </section>
        </div>
       {multipleDays?<div className="my-3">
          <label htmlFor="eventName" className="block event-details-labels">
            Number of days
          </label>
          <input
          ref={numberOfDaysRef}
            type="number"
            id="numberOfDays"
            className="rounded-full border border-[var(--subtext)] outline-none h-10 px-4 max-w-[200px] text-center"
          />
        </div>:null}
      </section>
      <section className="flex items-center justify-between flex-wrap">
        <div className="my-3">
          <label htmlFor="eventName" className="block event-details-labels">
            Event start date
          </label>
          <input ref={startDateRef}  type="date" name="" id="numberOfDays" />
        </div>
        <div className="my-3">
          <label htmlFor="eventName" className="block event-details-labels">
            Event start time
          </label>
          <input
            type="text"
            name=""
            id="numberOfDays"
            className="rounded-full border border-[var(--subtext)] outline-none h-10 px-4 w-full"
          />
          <small className="block">
            examples, &quot;1:24PM (WAT)&quot;, &quot;22:00 (PST)&quot;
          </small>
        </div>
      </section>
      <section className="">
        <Banner />
      </section>
      <section>
        <Days />
      </section>
      <div>
        <label htmlFor="" className="event-details-labels">
          (optional) add a welcome message which attendees would see
        </label>
        <textarea
          name=""
          id="welcome"
          className="w-full h-[100px] border border-[var(--subtext)] outline-none "
        >
          {" "}
        </textarea>
      </div>
      <div className="flex justify-end pb-4">
        <button className="h-12 rounded-lg px-6 bg-grad block">Submit</button>
      </div>
    </form>
  );
};

export default AddEventForm;
