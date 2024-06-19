import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Showcase from "./showcase/page";

const montserat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Wesley van Tartwijk",
  description: "Portfolio Semester 6 Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body className={montserat.className}>
        <Navigation />
        <div className="h-10"></div>
        {children}
      </body>
    </html>
  );
}
