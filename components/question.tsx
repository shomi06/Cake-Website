"use client";

import { ChevronRight, Facebook, Instagram, Mail, Phone } from "lucide-react";
import { useState } from "react";

interface PropTypes {
  question: string;
  answer: string | React.ReactNode;
  id: number;
}

export default function Question({ question, answer, id }: PropTypes) {
  const [clicked, setClicked] = useState(id === 1 ? true : false);

  return (
    <div className="w-[280px] mx-auto shadow-sm p-2 rounded-lg">
      <div className="flex justify-between items-center">
        <h1>{question}</h1>
        <ChevronRight
          onClick={() => setClicked(!clicked)}
          className={`${clicked ? "rotate-90" : ""} transition-all`}
        />
      </div>
      <div
        className={`flex flex-col gap-[20px] mt-[10px] overflow-hidden transition-all ${clicked ? "" : "h-0"}`}
      >
        <p className="font-light text-xs ">{answer}</p>
        {id === 1 ? (
          <div className="flex gap-[15px]">
            <Instagram /> <Facebook /> <Mail /> <Phone />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
