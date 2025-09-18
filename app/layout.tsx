import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cinta Coffee",
  description:
    "Cinta Coffee merupakan produsen olahan kopi yang berasal dari Desa Cinta yang terletak di Kecamatan Karangtengah, Kabupaten Garut, Jawa Barat, dengan luas wilayah yang rata-rata adalah pertanian di ketinggian 1.000 mdpl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
