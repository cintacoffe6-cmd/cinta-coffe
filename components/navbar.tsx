"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  LucideCoffee,
  LucideHome,
  LucideInfo,
  LucideMenu,
  LucidePhone,
  LucideStore,
  MoveUpRight,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Navbar() {
  const navItems = [
    {
      name: "Beranda",
      href: "/",
      icon: <LucideHome />,
      target: "_self",
    },
    {
      name: "Produk",
      href: "#products",
      icon: <LucideCoffee />,
      target: "_self",
    },
    {
      name: "Tentang Kami",
      href: "/about",
      icon: <LucideInfo />,
      target: "_self",
    },
    {
      name: "Kontak",
      href: "https://wa.me/6281281675969",
      icon: <LucidePhone />,
      target: "_blank",
    },
    {
      name: "Toko",
      href: "https://id.shp.ee/WFgWS1L",
      icon: <LucideStore />,
      target: "_blank",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 container flex h-20 justify-between bg-white transition-colors ${
        isScrolled ? "border-b border-gray-400" : ""
      }`}
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={"/logo.jpg"}
            alt="logo"
            width={75}
            height={75}
            className="w-[50px]"
          />
        </Link>
      </div>
      <div className="hidden items-center gap-3 md:flex">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`"hover:bg-stone-200"} rounded-xl`}
            asChild
          >
            <Link href={item.href} target={item.target}>
              {item.icon} {item.name}{" "}
              {item.target === "_blank" && <MoveUpRight />}
            </Link>
          </Button>
        ))}
      </div>
      <div className="flex items-center md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <LucideMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {navItems.map((item, index) => (
              <DropdownMenuItem key={index} asChild>
                <Link href={item.href} target={item.target}>
                  {item.icon} {item.name}
                  {item.target === "_blank" && <MoveUpRight />}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
