"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { LucideInfo, LucideShoppingCart, MoveUpRight } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import Link from "next/link";

export interface CardProductProps {
  imageSrc: string[];
  title: string;
  description: string;
  price: string;
  productLink: string;
  drawerContent: React.ReactNode;
}

export function CardProduct(props: CardProductProps) {
  const [image, setImage] = useState(props.imageSrc[0]);

  return (
    <Drawer>
      <Card className="h-full">
        <CardContent className="flex h-full flex-col justify-between gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex justify-center">
              <Image
                src={props.imageSrc[0]}
                alt="produk"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
            <h1 className="line-clamp-2 text-base font-semibold md:text-lg">
              {props.title}
            </h1>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="line-clamp-2 text-justify">{props.description}</p>
            <p className="text-xl font-semibold">{props.price}</p>
            <Button asChild className="w-full">
              <Link href={props.productLink} target="_blank">
                Beli Sekarang <LucideShoppingCart /> <MoveUpRight />
              </Link>
            </Button>
            <DrawerTrigger asChild>
              <Button variant={"secondary"} className="w-full">
                Lihat Produk <LucideInfo />
              </Button>
            </DrawerTrigger>
          </div>
        </CardContent>
      </Card>
      <DrawerContent className="container h-[700px]">
        <DrawerHeader>
          <DrawerTitle className="line-clamp-1 min-[390px]:line-clamp-none">
            {props.title}
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex h-full flex-col gap-5 xl:flex-row">
          <div className="flex h-[45%] flex-col gap-5 overflow-auto min-[390px]:h-[60%] sm:flex-row xl:h-full">
            <div className="flex flex-col gap-5 sm:sticky sm:top-0">
              <div className="flex flex-col items-center">
                <Image
                  src={image}
                  alt="produk"
                  width={300}
                  height={300}
                  className="h-[250px] object-cover"
                />
              </div>

              <div className="flex gap-5 overflow-auto">
                {props.imageSrc.map((item, index) => {
                  return (
                    <Image
                      key={index}
                      src={item}
                      alt="produk"
                      width={300}
                      height={300}
                      className="h-[50px] w-[50px] cursor-pointer object-cover"
                      onClick={() => setImage(item)}
                    />
                  );
                })}
              </div>
            </div>

            <div className="w-full">{props.drawerContent}</div>
          </div>

          <div className="flex flex-col justify-center gap-3 py-3 xl:justify-start">
            <div className="flex justify-center">
              <p className="text-sm font-semibold">{props.price}</p>
            </div>
            <Button asChild>
              <Link href={props.productLink} target="_blank">
                Beli Sekarang <LucideShoppingCart /> <MoveUpRight />
              </Link>
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Kembali</Button>
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
