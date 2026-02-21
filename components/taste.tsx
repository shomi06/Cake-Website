"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import data from "@/data.json";

export default function Taste() {
  const [active, setActive] = useState(1);
  const tastes = 5;
  function layout(index: number) {
    if (index === active) {
      return "scale-200 relative z-3 opacity-100";
    } else if (
      (active === tastes - 1 && index === 0) ||
      (active === 0 && index === tastes - 1)
    ) {
      return "opacity-50 scale-100 relative z-2";
    } else if (Math.abs(active - index) === 1) {
      return "opacity-50 scale-100 relative z-2";
    } else {
      return "scale-0 opacity-0 hidden";
    }
  }

  return (
    <div className="w-[280px] mx-auto flex flex-col">
      <h1 className="text-sm font-light text-center mb-[80px]">
        <span className="font-medium text-primary">
          Posebni ukusi za posebne prilike
        </span>
        , consectetur adipiscing elit. Nunc pharetra consequat lorem eget
        volutpat.
      </h1>
      <div className="flex items-center mx-auto">
        <ChevronLeft
          onClick={() => {
            if (active === 0) {
              setActive(tastes - 1);
            } else {
              setActive(active - 1);
            }
          }}
        />
        <div className="flex items-center p-5">
          {data.map((taste, index) => {
            return (
              <motion.div
                key={index}
                className={`${layout(index)} ${active === 4 && index === 0 ? "order-last" : ""} ${active === 0 && index === tastes - 1 ? "order-first" : ""}
                transition-opacity`}
              >
                <Image
                  src={`${taste.src}`}
                  width="50"
                  height="50"
                  alt={`${taste.src}`}
                />
              </motion.div>
            );
          })}
        </div>
        <ChevronRight
          onClick={() => {
            if (active === tastes - 1) {
              setActive(0);
            } else {
              setActive(active + 1);
            }
          }}
        />
      </div>
      <div className="flex flex-col items-center text-center mt-[10px]">
        <h1 className="font-medium size-lg">{data[active].title}</h1>
        <p className="w-[200px] text-xs font-light leading-auto">
          {data[active].description}
        </p>
      </div>
    </div>
  );
}
