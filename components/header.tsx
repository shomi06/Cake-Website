"use client";

import { Menu, X } from "lucide-react";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="w-[280px] flex mx-auto justify-between mt-4 items-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width="50"
          height="41"
          className="relative z-10"
        />
        {menu ? (
          <X onClick={() => setMenu(!menu)} className="relative z-10" />
        ) : (
          <Menu onClick={() => setMenu(!menu)} className="relative z-10" />
        )}
      </div>
      <div
        className={`absolute z-9 w-screen bg-[#ffe0d2] top-0 overflow-hidden transition-[height] duration-1500 ease-in-out ${menu ? `h-screen` : "h-0"}`}
      >
        <div className="flex w-fit mx-auto flex-col h-full text-center pt-15 font-semibold gap-1">
          <h1 className="font-bold text-primary text-xl mt-4">
            SPECIJALNE PRILIKE
          </h1>
          <Link href="/pregled-torti">DEČIJE TORTE</Link>
          <Link href="/pregled-torti">SVADBENE TORTE</Link>
          <Link href="/pregled-torti">KLASIK TORTE</Link>
          <Link href="/pregled-torti">18ti TORTE</Link>
          <Button name="bg-primary" className="mt-4">
            PORUČI ONLAJN
          </Button>
        </div>
      </div>
    </>
  );
}
