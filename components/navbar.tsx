import Image from "next/image";
import { Button } from "./ui/button";
import { LucideMenu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const navItems = [
    {
      name: "Beranda",
      href: "/",
    },
    {
      name: "Kopi",
      href: "/cofee",
    },
    {
      name: "Tentang Kami",
      href: "/about",
    },
    {
      name: "Kontak",
      href: "/contact",
    },
  ];
  return (
    <nav className="container flex h-20 justify-between">
      <div className="flex items-center">
        <Image
          src={"/logo.jpg"}
          alt="logo"
          width={75}
          height={75}
          className="w-[50px]"
        />
      </div>
      <div className="hidden items-center gap-7 md:flex">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="rounded-xl hover:bg-stone-200"
          >
            {item.name}
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
              <DropdownMenuItem key={index}>{item.name}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
