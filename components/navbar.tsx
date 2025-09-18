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
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

export function Navbar() {
  const navItems = [
    {
      name: "Beranda",
      href: "/",
      icon: <LucideHome />,
    },
    {
      name: "Produk",
      href: "/products",
      icon: <LucideCoffee />,
    },
    {
      name: "Tentang Kami",
      href: "/about",
      icon: <LucideInfo />,
    },
    {
      name: "Kontak",
      href: "/contact",
      icon: <LucidePhone />,
    },
    {
      name: "Toko",
      href: "#",
      icon: <LucideStore />,
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
        <Image
          src={"/logo.jpg"}
          alt="logo"
          width={75}
          height={75}
          className="w-[50px]"
        />
      </div>
      <div className="hidden items-center gap-3 md:flex">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`"hover:bg-stone-200"} rounded-xl`}
          >
            {item.icon} {item.name}
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
              <DropdownMenuItem key={index}>
                {item.icon} {item.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
