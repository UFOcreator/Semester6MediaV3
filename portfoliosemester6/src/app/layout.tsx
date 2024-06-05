import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";

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
      <body className={montserat.className}>
        <Navigation />
        {children}
        </body>
    </html>
  );
}
