import { CakeSlice } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="max-w-[280px] mx-auto flex mt-[24px] flex-col items-center">
      <h1 className="text-3xl font-normal text-center">
        <span className="font-bold text-primary">PORUČI TORTU</span> OD KOJE ĆE
        GOSTI TRAŽITI JOŠ
      </h1>
      <Button className="bg-primary w-fit flex items-center mt-[20px]">
        PORUČI ONLAJN
        <CakeSlice style={{ width: 22, height: 22 }} />
      </Button>
    </div>
  );
}
