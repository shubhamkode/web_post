import Head from 'next/head';
import React from "react";

import Header from '../components/Header'
import Body from "../components/Body";

export default function HomePage() {
  // TODO:- Add adding post dialog 
  return (
    <div>
      <Head>
        <title>My Blog | Your Space</title>
      </Head>
        {/* main body starts */}
        <div className="h-screen w-full relative">
        <Header />
        <Body />
          <button className="fixed bottom-5 right-7 z-20 p-5 bg-blue-400 rounded-full text-white font-bold">
              + Add Post
          </button>
      </div>
    </div>
  )
}

