import Image from "next/image";
import { Button } from "./ui/button";
import { LucideShoppingCart } from "lucide-react";

export function Hero() {
  return (
    <section className="container flex flex-col-reverse justify-center sm:flex-row sm:gap-32">
      <div className="flex flex-col justify-center gap-3 sm:w-[500px]">
        <h1 className="text-center text-lg font-bold text-stone-600 sm:text-left md:text-xl lg:text-3xl xl:text-[2.5rem]">
          Nikmati Cinta Coffee,
          <br />
          Kopi Premium dari Lereng Garut
        </h1>
        <p className="text-xs md:text-sm">
          Ditanam di ketinggian 1.000 mdpl dengan udara sejuk dan tanah subur,
          Cinta Coffee menghadirkan kopi Arabika, Linias, dan Ateng berkualitas.
        </p>
        <div className="flex justify-center sm:justify-start">
          <Button>
            Beli Sekarang <LucideShoppingCart />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image src="/hero.png" alt="hero" width={300} height={300} />
      </div>
    </section>
  );
}
