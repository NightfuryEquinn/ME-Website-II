"use client";

import { Animator, Dots } from "@arwes/react";
import { DM_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";

const dmMono = DM_Mono({ weight: '300', subsets: ['latin'] })

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [ active, setActive ] = useState( true )

  useEffect(() => {
    const iid = setInterval(() => setActive(( active ) => !active ), 5000 )
    return () => clearInterval(iid)
  }, [])
  
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <link rel="icon" href="../assets/images/fury_dark.png" type="image/x-icon" />
        <title>ME-Website-II</title>
      </head>
      <body className={`antialiased bg-black text-white ${ dmMono.className }`}>
        <Animator active={ active } duration={{ enter: 5.0, exit: 5.0 }}>
          <Dots color="rgba(222, 226, 230, 0.075)" />
        </Animator>
        { children }
      </body>
    </html>
  );
}
