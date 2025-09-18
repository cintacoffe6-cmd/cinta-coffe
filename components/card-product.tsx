import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { LucideInfo, LucideShoppingCart } from "lucide-react";

export interface CardProductProps {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
}

export function CardProduct(props: CardProductProps) {
  return (
    <Card className="xl:w-[450px]">
      <CardContent className="flex h-full flex-col justify-between gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center">
            <Image src={props.imageSrc} alt="produk" width={300} height={300} />
          </div>
          <h1 className="text-base font-semibold md:text-lg">{props.title}</h1>
          <p className="text-justify">{props.description}</p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 lg:flex-row">
          <p className="text-xl font-semibold text-yellow-500">{props.price}</p>
          <div className="flex w-full flex-col gap-3 lg:w-auto lg:flex-row">
            <Button className="bg-yellow-500 hover:bg-yellow-600">
              Beli Sekarang <LucideShoppingCart />
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600">
              Lihat Produk <LucideInfo />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
