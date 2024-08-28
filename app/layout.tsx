import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";


export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo1.png" type="image/x-icon" sizes="any" />
      </head>

      <body className='relative bg-gradient-to-r from-gray-100 to-gray-300'>
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
