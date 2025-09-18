"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { LucideInfo, LucideShoppingCart, MoveUpRight } from "lucide-react";
import {
  Drawer,
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
  drawerFooter: React.ReactNode;
}

export function CardProduct(props: CardProductProps) {
  const [image, setImage] = useState(props.imageSrc[0]);

  return (
    <Drawer>
      <Card className="xl:w-[450px]">
        <CardContent className="flex h-full flex-col justify-between gap-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center">
              <Image
                src={props.imageSrc[0]}
                alt="produk"
                width={300}
                height={300}
              />
            </div>
            <h1 className="text-base font-semibold md:text-lg">
              {props.title}
            </h1>
            <p className="text-justify">{props.description}</p>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 lg:flex-row">
            <p className="text-xl font-semibold">{props.price}</p>
            <div className="flex w-full flex-col gap-3 lg:w-auto lg:flex-row">
              <Button asChild>
                <Link href={props.productLink} target="_blank">
                  Beli Sekarang <LucideShoppingCart /> <MoveUpRight />
                </Link>
              </Button>
              <DrawerTrigger asChild>
                <Button variant={"secondary"}>
                  Lihat Produk <LucideInfo />
                </Button>
              </DrawerTrigger>
            </div>
          </div>
        </CardContent>
      </Card>
      <DrawerContent className="h-[700px]">
        <DrawerHeader>
          <DrawerTitle>{props.title}</DrawerTitle>
        </DrawerHeader>
        <div className="container flex h-full flex-col lg:flex-row lg:justify-between">
          <div className="flex h-[50%] w-full flex-col gap-3 overflow-auto min-[390px]:h-[60%] sm:flex-row lg:h-[80%] lg:w-[68%]">
            <div className="flex w-full flex-col gap-3 sm:sticky sm:top-0 sm:w-[40%]">
              <Image
                src={image}
                alt="produk"
                width={250}
                height={250}
                className="h-[250px] w-full object-cover"
              />
              <div className="flex gap-3">
                {props.imageSrc.map((image, index) => (
                  <div
                    key={index}
                    className="h-[50px] w-[50px] cursor-pointer hover:scale-90"
                    onClick={() => setImage(image)}
                  >
                    <Image
                      key={index}
                      src={image}
                      alt="produk"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-[50%]">{props.drawerContent}</div>
          </div>
          <div className="mt-5 h-[28%] w-full lg:w-[30%]">
            {props.drawerFooter}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
