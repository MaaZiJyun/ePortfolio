import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import "./globals.css";
import './styles/katex-custom.css';  

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DOMUKI WEB",
  description: "Domuki no websaito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="">
        <div>
          <Navbar/>
        </div>
        {children}
        <div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
// no-select
