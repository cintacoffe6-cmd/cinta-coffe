import { LucideMail, LucidePhone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-stone-500 text-white">
      <div className="container flex min-h-[250px] text-sm sm:text-base">
        <div className="flex w-1/2 flex-col justify-between py-16">
          <h3>
            Cinta Coffee, Kecamatan Karangtengah, <br />
            Kabupaten Garut, Jawa Barat
          </h3>
          <h3>© {new Date().getFullYear()} - Cinta Coffee</h3>
        </div>
        <div className="flex w-1/2 flex-col items-end justify-between py-16">
          <div className="flex gap-5">
            <Link href={"/"}>Beranda</Link>
            <Link href={"/#products"}>Produk </Link>
          </div>
          <div className="flex gap-5 text-xl">
            <LucidePhone />
            <LucideMail />
          </div>
        </div>
      </div>
    </footer>
  );
}
