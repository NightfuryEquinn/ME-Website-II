import { DM_Mono } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({ weight: '300', subsets: ['latin'] })

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <link rel="icon" href="../assets/images/fury_dark.png" type="image/x-icon" />
        <title>ME-Website-II</title>
      </head>
      <body className={`antialiased bg-black text-white ${ dmMono.className }`}>
        { children }
      </body>
    </html>
  );
}
