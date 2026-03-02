import { Button } from "./ui/button";

export default function Discount() {
  return (
    <div className="w-full  bg-[#FFE0D2]">
      <div className="flex flex-col items-center gap-4 w-[210px] mx-auto py-[30px]">
        <h1 className="text-lg font-normal text-center">
          PORUČI ONLINE I OSTVARI{" "}
          <span className="font-semibold text-primary">10% POPUSTA</span>
        </h1>
        <p className="text-center text-xs font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          pellentesque, dui ac posuere lacinia, est dolor varius sem, in gravida
          sem ligula at erat.{" "}
        </p>
        <Button>PORUČI SADA</Button>
      </div>
    </div>
  );
}
