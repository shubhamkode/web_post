import {FiMenu} from 'react-icons/fi';
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import React from "react";

export default function Header() {

  const routes = [
    {href: "/", title: "Home"},
    {href: "/about", title: "About"},
    {href: "/contact", title: "Contact"},
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between p-3 text-white rounded bg-slate-800 relative">
      <h1 className="text-3xl cursor-pointer  sm:text-4xl">Shubham Agarwal</h1>
      <div className="hidden space-x-10 text-2xl sm:flex">
        {routes.map((route,index) => (
          <Link key={index} href={route.href}>
            <a className="p-2 px-3 transition duration-100 ease-in-out rounded hover:scale-105 hover:bg-gray-200">{route.title}</a>
          </Link>
        ))}
      </div>
      <button className="p-2 duration-100 rounded sm:hidden active:bg-gray-200 "
        onClick={() => { setIsOpen(prev => true) }}>
          <FiMenu className="text-2xl" />
        </button>
      {
        isOpen && (
          <div className="flex ">
            <div
              onClick={()=>{setIsOpen(prev=>false)}}
              className="bg-transparent backdrop-blur-100 absolute top-0 left-0 w-[30vw] h-screen sm:hidden"></div>
          <div className="flex flex-col absolute bg-slate-300 top-0 right-0 h-[100vh] w-[70vw] p-5 sm:hidden">
            <button
            onClick={()=>{setIsOpen(prev=>false)}}
              className="text-black self-end p-2 hover:z-10 hover:scale-110 transition duration-100 ease-in-out hover:bg-gray-100 border-black rounded-xl">
              <GrClose className="text-2xl fond-bold"/>
            </button>
            <div className='text-black h-full p-2 flex flex-col w-full items-center justify-start space-y-5 text-2xl'>
            <Link className='' href="/">
              <a className='uppercase p-3 active:border-y-2 ease-in-out active:bg-gray-100 transition-100 rounded w-full flex justify-center'>Home</a>
            </Link>
            <Link className='' href="/about">
              <a className='uppercase p-3 active:border-y-2 ease-in-out active:bg-gray-100 transition-100 rounded w-full flex justify-center'>About</a>
            </Link>
            <Link className='' href="/contact">
              <a className='uppercase p-3 active:border-y-2 ease-in-out active:bg-gray-100 transition-100 rounded w-full flex justify-center'>Contact</a>
            </Link>
            </div>
          </div>
          </div>
        )
        }
    </div>
  );
}
