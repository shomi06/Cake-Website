"use client";

import { ChevronRight, Facebook, Instagram, Mail, Phone } from "lucide-react";
import { useState } from "react";

interface PropTypes {
  question: string;
  answer: string;
}

export default function Question({ question, answer }: PropTypes) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="w-[280px] mx-auto ">
        <div className="flex justify-between">
          <h1>{question}</h1>
          <ChevronRight
            onClick={() => setClicked(!clicked)}
            className={`${clicked ? "rotate-90" : ""} transition-all`}
          />
        </div>
        <div
          className={`flex flex-col gap-[20px] mt-[10px] overflow-hidden transition-all ${clicked ? "" : "h-0"}`}
        >
          <p className="font-light text-xs">{answer}</p>
          <div className="flex gap-[15px]">
            <Instagram /> <Facebook /> <Mail /> <Phone />
          </div>
        </div>
      </div>
    </div>
  );
}
