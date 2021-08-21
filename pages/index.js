import Head from "next/head";
import { useEffect, useState } from "react";
import {
  ArrowCircleDownIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ArrowCircleUpIcon,
} from "@heroicons/react/solid";

export default function Home() {
  const [isSwitched, setIsSwitched] = useState(false);
  const [isActive, setIsActive] = useState(1);
  const [activeColor, setActiveColor] = useState(false);

  const listenScrollEvent = () => {
    const menu =
      document.querySelector("#menu").getBoundingClientRect().bottom -30;

    if (window.scrollY >= menu) {
      setActiveColor(true)
    } else {
      setActiveColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div
      className={
        isSwitched
          ? " transition duration-500 ease-out "
          : "bg-black transition duration-500 ease-out "
      }>
      <Head>
        <title>Toggle Animation</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section className=' relative flex flex-col space-y-10 h-screen items-center justify-center'>
          <h1
            className={
              isSwitched
                ? "text-4xl font-semibold"
                : "text-white text-4xl font-semibold"
            }>
            Toogle Animation
          </h1>
          <a
            href='#menu'
            className={
              isSwitched
                ? "text-md  absolute top-0 right-4 animate-bounce"
                : "text-white text-md  absolute top-0 right-4 animate-bounce"
            }>
            Scroll down
          </a>
          <button
            className={isSwitched ? "bg-green-500 button" : "bg-red-500 button"}
            onClick={() => {
              setIsSwitched(!isSwitched);
            }}>
            {isSwitched ? "on" : "off"}
          </button>
        </section>
        <section
          id='menu'
          className=' relative bg-yellow-200 w-full h-screen flex items-center justify-center space-x-24'>
          <a
            href='#scrollAnimation'
            className='text-md   absolute top-4 right-4 animate-bounce'>
            Scroll down
          </a>
          <div className='grid grid-cols-3 gap-1  h-7 '>
            <ArrowCircleUpIcon
              onClick={() => {
                setIsActive(1);
              }}
              className='h-12 text-blue-500 col-span-3 col-start-2'
            />
            <ArrowCircleLeftIcon
              onClick={() => {
                setIsActive(2);
              }}
              className='h-12 text-blue-500 col-span-2 '
            />
            <ArrowCircleRightIcon
              onClick={() => {
                setIsActive(3);
              }}
              className='h-12 text-blue-500'
            />
            <ArrowCircleDownIcon
              onClick={() => {
                setIsActive(4);
              }}
              className='h-12 text-blue-500 col-span-3 col-start-2 '
            />
          </div>

          <div className='w-auto   flex items-center justify-center mt-24 '>
            <p className={isActive === 1 ? "active" : "inactive"}>Up</p>
            <p className={isActive === 2 ? "active" : "inactive"}>Left</p>
            <p className={isActive === 3 ? "active" : "inactive"}>Right</p>
            <p className={isActive === 4 ? "active" : "inactive"}>Down</p>
          </div>
        </section>

        <section
          id='scrollAnimation'
          className={
            activeColor
              ? "h-screen bg-blue-500 transition-all duration-1000"
              : "h-screen bg-black transition-all duration-1000"
          }></section>
      
      </main>
    </div>
  );
}
