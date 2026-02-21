import Image from "next/image";
import { Button } from "./ui/button";

export default function CakeCards() {
  return (
    <div className="flex w-[280px] mx-auto flex-col items-center mb-[60px]">
      <h1 className="text-sm text-center font-light my-[50px]">
        <span className="font-medium text-primary">
          Posebne torte za posebne prilike
        </span>
        , consectetur adipiscing elit. Nunc pharetra consequat lorem eget
        volutpat.{" "}
      </h1>
      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[10px] items-center bg-secondary p-4 rounded-xl">
          <Image src="/cake1.svg" alt="cake1" width="80" height="80" />
          <div className="text-[#FAF0F5]">
            <h1 className="font-medium text-lg">DEČIJE</h1>
            <p className="font-extralight text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="flex gap-[10px] items-center bg-secondary p-4 rounded-xl">
          <Image src="/cake2.svg" alt="cake1" width="80" height="80" />
          <div className="text-[#FAF0F5]">
            <h1 className="font-medium text-lg">SVADBENE</h1>
            <p className="font-extralight text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="flex gap-[10px] items-center bg-secondary p-4 rounded-xl">
          <Image src="/cake3.svg" alt="cake1" width="80" height="80" />
          <div className="text-[#FAF0F5]">
            <h1 className="font-medium text-lg">KLASIČNE</h1>
            <p className="font-extralight text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <Button className="font-extralight text-sm rounded-md w-fit bg-transparent px-2 py-1 text-primary border-primary border-[0.5px] h-fit mt-[45px]">
        CELA KOLEKCIJA...
      </Button>
    </div>
  );
}
