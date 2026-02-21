import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col w-full bg-[#ffe0d2] mt-[80px] rounded-xl p-4 gap-4">
      <div className="flex flex-col items-center w-[260px] mx-auto gap-3">
        <h1 className="font-weight text-lg">PRATITE OBAVESTENJA</h1>
        <p className="font-light text-xs text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          pellentesque, dui ac posuere lacinia, est dolor varius sem, in gravida
          sem ligula at erat.
        </p>
        <div className="flex gap-2">
          <Input placeholder="example@gmail.com" className="bg-white text-xs" />
          <Button>PRIJAVI SE</Button>
        </div>
      </div>
      <div className="flex w-[260px] mx-auto flex-col gap-2">
        <h1 className="flex gap-1 text-xs font-medium items-center">
          <Instagram /> @kolaci_by_silvia
        </h1>
        <h1 className="flex gap-1 text-xs font-medium items-center">
          <Phone /> 060/069 2006
        </h1>
        <h1 className="flex gap-1 text-xs font-medium items-center">
          <MapPin /> Subotica
        </h1>
      </div>
    </div>
  );
}
