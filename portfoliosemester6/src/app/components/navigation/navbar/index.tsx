import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
// import Button from "./button";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollPosition > 250) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`w-full h-20 transition duration-300 ease-in-out ${isSticky? "sticky top-0 shadow-xl bg-white" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6">
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/showcase">
                  <p>Showcase</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
            <div className="hidden md:block">
              {/* <Button /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;