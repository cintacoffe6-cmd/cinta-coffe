import { LucideShoppingCart } from "lucide-react";
import { CardProduct, CardProductProps } from "./card-product";
import { Button } from "./ui/button";
import { DrawerClose } from "./ui/drawer";

export function Collection() {
  const product: CardProductProps[] = [
    {
      imageSrc: [
        "/cinta-coffee-2.jpg",
        "/cinta-coffee-3.jpg",
        "/cinta-coffee-4.jpg",
      ],
      title: "Kopi Arabika Cinta Coffee Original",
      description:
        "Kopi arabika khas Desa Cinta, ditanam di 1.000 mdpl dengan fermentasi semi-washed khusus. Hasilnya aroma fruity dengan hints floral, body lembut, clean cup, dan aftertaste manis alami.",
      price: "Rp35.000",
      drawerContent: (
        <div className="prose max-w-none">
          <h2 className="mb-4 text-lg font-semibold">Keunggulan Kopi Cinta</h2>
          <p>Kopi dari Desa Cinta berbeda dengan kopi daerah lain karena:</p>
          <ol className="mt-3 list-inside list-decimal space-y-3">
            <li>
              <strong>Ketinggian Tanam Ideal</strong>
              <p>
                Kopi ditanam di ketinggian ±1.000 mdpl, menghasilkan biji dengan
                aroma kompleks, rasa seimbang, dan tingkat keasaman halus khas
                kopi pegunungan Garut.
              </p>
            </li>
            <li>
              <strong>Fermentasi dengan Teknik Khusus</strong>
              <p>
                Biji kopi Cinta difermentasi menggunakan proses semi-washed
                dengan kontrol suhu & kelembaban tertentu. Proses ini
                menghasilkan cita rasa unik:
              </p>
              <ol className="ml-5 list-inside list-decimal space-y-1">
                <li>
                  <strong>Aroma fruity</strong> dengan hints floral
                </li>
                <li>
                  <strong>Body</strong> lebih lembut & clean cup
                </li>
                <li>
                  <strong>Aftertaste</strong> manis alami
                </li>
              </ol>
              <p>
                Teknik ini membedakan Kopi Cinta dari kopi daerah lain yang
                umumnya hanya menggunakan metode natural atau full washed
                standar.
              </p>
            </li>
            <li>
              <strong>Pengolahan Modern &amp; Higienis</strong>
              <p>
                Didukung alat pengolahan modern (pulper, huller, roaster,
                grinder), kualitas biji kopi terjaga dari panen hingga kemasan.
              </p>
            </li>
            <li>
              <strong>Pemberdayaan Lokal</strong>
              <p>
                Produksi melibatkan ibu rumah tangga dan pemuda desa, menjadikan
                setiap kemasan Kopi Cinta bukan hanya produk, tapi juga cerita
                pemberdayaan & cinta untuk desa.
              </p>
            </li>
          </ol>
        </div>
      ),
      drawerFooter: (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Kopi Arabika Cinta Coffee</p>
            <p className="text-sm font-semibold">Rp35.000</p>
          </div>
          <Button>
            Beli Sekarang <LucideShoppingCart />
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Kembali</Button>
          </DrawerClose>
        </div>
      ),
    },
    {
      imageSrc: ["/teh-cascara.jpg", "/teh-cascara-2.jpg"],
      title: "Teh Cascara Cinta Coffee",
      description:
        "Teh herbal unik dari kulit buah kopi arabika pilihan, kaya antioksidan dengan rasa fruity manis alami, aroma segar dan Menyehatkan tubuh sekaligus mendukung green product Desa Cinta.",
      price: "Rp40.000",
      drawerContent: (
        <div className="prose max-w-none">
          <h2 className="mb-4 text-lg font-semibold">
            Keunggulan Teh Cascara Desa Cinta
          </h2>
          <ol className="list-inside list-decimal space-y-3">
            <li>
              <strong>Bahan Premium</strong>
              <p>
                Terbuat dari kulit buah kopi Arabika pilihan hasil panen Desa
                Cinta di dataran tinggi 1.000 mdpl, diproses higienis dengan
                teknik pengeringan alami.
              </p>
            </li>
            <li>
              <strong>Kaya Antioksidan &amp; Nutrisi</strong>
              <p>
                Cascara terbukti mengandung senyawa polifenol &amp; kafein alami
                yang bermanfaat meningkatkan energi, daya tahan tubuh, dan
                kesehatan pencernaan.
              </p>
            </li>
            <li>
              <strong>Rasa &amp; Aroma Unik</strong>
              <p>
                Teh Cascara menghadirkan rasa fruity manis alami dengan aroma
                segar, berbeda dari teh biasa maupun kopi hitam. Memberikan
                pengalaman baru dalam menikmati minuman sehat.
              </p>
            </li>
            <li>
              <strong>Ramah Lingkungan (Zero Waste)</strong>
              <p>
                Cascara adalah pemanfaatan kulit kopi yang biasanya terbuang,
                sehingga setiap tegukan tidak hanya menyehatkan tetapi juga
                mendukung prinsip ekonomi sirkular &amp; green product.
              </p>
            </li>
            <li>
              <strong>Produk Pemberdayaan Desa</strong>
              <p>
                Diproduksi oleh kelompok ibu rumah tangga &amp; pemuda Desa
                Cinta, sehingga setiap kemasan Teh Cascara adalah hasil gotong
                royong dan pemberdayaan ekonomi lokal.
              </p>
            </li>
          </ol>

          <h3 className="mt-6 mb-2 text-lg font-semibold">Deskripsi Produk</h3>
          <ol className="list-inside list-decimal space-y-2">
            <li>
              <strong>Nama Produk:</strong> Teh Cascara Desa Cinta
            </li>
            <li>
              <strong>Kemasan:</strong> Standing pouch modern 250 gr (dilengkapi
              ziplock untuk menjaga kesegaran)
            </li>
            <li>
              <strong>Isi:</strong> 100% kulit kopi kering pilihan
            </li>
            <li>
              <strong>Warna Seduhan:</strong> Keemasan hingga merah muda
            </li>
            <li>
              <strong>Rasa:</strong> Fruity segar, manis alami, sedikit asam
            </li>
            <li>
              <strong>Manfaat:</strong>
              <ol className="ml-5 list-inside list-decimal space-y-1">
                <li>Kaya antioksidan, membantu meningkatkan imun tubuh</li>
                <li>
                  Alternatif minuman sehat tanpa efek samping kopi berlebihan
                </li>
                <li>
                  Cocok diminum panas atau dingin sebagai{" "}
                  <em>iced cascara tea</em>
                </li>
              </ol>
            </li>
          </ol>

          <h3 className="mt-6 mb-2 text-lg font-semibold">Cara Seduh</h3>
          <ol className="list-inside list-decimal space-y-2">
            <li>Ambil 5 gr cascara (1 sendok makan)</li>
            <li>Seduh dengan 200 ml air panas (95°C)</li>
            <li>Tunggu 4–5 menit</li>
            <li>Sajikan hangat atau tambahkan es batu untuk versi segar</li>
          </ol>
        </div>
      ),
      drawerFooter: (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Teh Cascara Cinta Coffee</p>
            <p className="text-sm font-semibold">Rp40.000</p>
          </div>
          <Button>
            Beli Sekarang <LucideShoppingCart />
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Kembali</Button>
          </DrawerClose>
        </div>
      ),
    },
  ];

  return (
    <section className="mt-5 min-h-[400px] bg-stone-200">
      <div className="container">
        <h1 className="pt-16 text-center text-lg font-semibold text-stone-600 md:text-xl lg:text-3xl xl:text-[2.5rem]">
          Koleksi Premium Kami
        </h1>
        <p className="pt-5 text-center">
          Dua varietas kopi yang luar biasa, masing-masing dengan karakter dan
          profil rasa yang unik
        </p>
        <div className="flex flex-col justify-center gap-10 pt-7 sm:flex-row">
          {product.map((item, index) => (
            <CardProduct key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
