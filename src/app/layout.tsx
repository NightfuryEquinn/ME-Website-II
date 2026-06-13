"use client";

import { Tomorrow } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import { Animator, Dots, MovingLines } from "@arwes/react";

const dmMono = Tomorrow({ weight: '300', subsets: ['latin'] })

const LivingBG = () => {
  const [ active, setActive ] = useState(true)

  useEffect(() => {
    const iid = setInterval(() => setActive((active) => !active), 5000)
    return () => clearInterval(iid)
  }, [])

  return (
    <div className="fixed w-screen h-screen">
      <Animator active={ active } duration={{ enter: 2, exit: 2 }}>
        <Dots color="#DEE2E620" type="cross" size={ 2 } crossSize={ 2 } easing="inOutQuart" origin="bottom" />
      </Animator>
      <Animator>
        <MovingLines lineColor="#DEE2E620" lineWidth={ 0.5 } sets={ 5 } />
      </Animator>
    </div>
  )
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {  
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <link rel="icon" href="../assets/images/fury_dark.png" type="image/x-icon" />
        <title>ME-Website-II</title>
      </head>
      <body className={ `bg-black text-white ${ dmMono.className }` }>
        <LivingBG />
        { children }
      </body>
    </html>
  );
}
