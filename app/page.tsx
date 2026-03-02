import Header from "@/components/header";
import Hero from "@/components/hero";
import CakeCards from "@/components/cakeCards";
import Taste from "@/components/taste";
import Footer from "@/components/footer";
import Discount from "@/components/discount";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-[100px]">
        <Hero />
        <CakeCards />
        <Discount />
        <Taste />
        <FAQ />
      </div>
    </>
  );
}
