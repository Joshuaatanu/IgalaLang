"use client"; // Add this at the top if using Next.js 13+ with app directory
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathname = usePathname();

  return (
    <div>
      <nav className="px-8 py-4 w-full flex flex-row text-zinc-400 font-medium bg-white sticky">
        <a href="/">Igala</a>

        <div className="ml-[50px] flex flex-row space-x-10 space-grotesk-bold text-[16px]">
          <a
            href="/"
            className={`relative after:absolute after:left-1/4 after:bottom-0 after:h-[2px] after:w-1/2 after:origin-bottom-right after:bg-purple-200 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-150
              ${
                pathname === "/"
                  ? "text-purple-200 after:scale-x-150"
                  : "hover:text-purple-200 after:scale-x-0"
              }`}
          >
            <h1>Home</h1>
          </a>

          <a
            href="/about"
            className={`relative after:absolute after:left-1/4 after:bottom-0 after:h-[2px] after:w-1/2 after:origin-bottom-right after:bg-purple-200 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-150
              ${
                pathname === "/about"
                  ? "text-purple-200 after:scale-x-150"
                  : "hover:text-purple-200 after:scale-x-0"
              }`}
          >
            <h1>About us</h1>
          </a>

          <a
            href="/translate"
            className={`relative after:absolute after:left-1/4 after:bottom-0 after:h-[2px] after:w-1/2 after:origin-bottom-right after:bg-purple-200 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-150
              ${
                pathname === "/translate"
                  ? "text-purple-200 after:scale-x-150"
                  : "hover:text-purple-200 after:scale-x-0"
              }`}
          >
            <h1>Translate</h1>
          </a>

          <a
            href="/pos_tag"
            className={`relative after:absolute after:left-1/4 after:bottom-0 after:h-[2px] after:w-1/2 after:origin-bottom-right after:bg-purple-200 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-150
              ${
                pathname === "/pos_tag"
                  ? "text-purple-200 after:scale-x-150"
                  : "hover:text-purple-200 after:scale-x-0"
              }`}
          >
            <h1>Project</h1>
          </a>

          <a
            href="/synthetic_dataset"
            className={`relative after:absolute after:left-1/4 after:bottom-0 after:h-[2px] after:w-1/2 after:origin-bottom-right after:bg-purple-200 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-150
              ${
                pathname === "/synthetic_dataset"
                  ? "text-purple-200 after:scale-x-150"
                  : "hover:text-purple-200 after:scale-x-0"
              }`}
          >
            <h1>Synthetic dataset</h1>
          </a>
          <a
            href="/gen_ai"
            className={`relative after:absolute after:left-1/4 after:bottom-0 after:h-[2px] after:w-1/2 after:origin-bottom-right after:bg-purple-200 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-150
              ${
                pathname === "/gen_ai"
                  ? "text-purple-200 after:scale-x-150"
                  : "hover:text-purple-200 after:scale-x-0"
              }`}
          >
            <h1>AI</h1>
          </a>
        </div>

        <div className="ml-auto">
          <a
            href="/login"
            className={`relative after:absolute after:left-1/4 after:bottom-0 after:h-[2px] after:w-1/2 after:origin-bottom-right after:bg-purple-200 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-150
              ${
                pathname === "/login"
                  ? "text-purple-200 after:scale-x-150"
                  : "hover:text-purple-200 after:scale-x-0"
              }`}
          >
            <h1>Login</h1>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
