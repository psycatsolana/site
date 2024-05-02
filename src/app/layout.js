import { Inter } from "next/font/google";
import "./globals.css";
import { AosInit } from "@/components/AosInit";
 
export const metadata = {
  title: "Psycat - Just a raver cat",
  description: "Trade now on Pump.fun",
}; 


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <AosInit>{children}</AosInit>
        </body>
    </html>
  );
}
