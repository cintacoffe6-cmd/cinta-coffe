import { CardProduct, CardProductProps } from "./card-product";

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
      productLink:
        "https://shopee.co.id/Kopi-Arabika-Cinta-Coffee-Original-i.1634745839.41069655330",
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
    },
    {
      imageSrc: ["/teh-cascara.jpg", "/teh-cascara-2.jpg"],
      title: "Teh Cascara Cinta Coffee",
      description:
        "Teh herbal unik dari kulit buah kopi arabika pilihan, kaya antioksidan dengan rasa fruity manis alami, aroma segar dan Menyehatkan tubuh sekaligus mendukung green product Desa Cinta.",
      price: "Rp40.000",
      productLink:
        "https://shopee.co.id/Teh-Cascara-Cinta-Coffee-i.1634745839.40669644294",
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
    },
    {
      imageSrc: [
        "/green-bean-arabika-robusta-1.webp",
        "/green-bean-arabika-robusta-2.webp",
        "/green-bean-arabika-robusta-3.webp",
        "/green-bean-arabika-robusta-4.webp",
      ],
      title: "Green Bean Kopi Arabika dan Robusta Khas Desa Cinta",
      description:
        "Green Bean Kopi Arabika dan Robusta Khas Desa Cinta Memiliki Karakter yang Unik Ditanam diatas ketinggian 1000 Mdpl Lebih dengan teknik fermentasi khusus",
      price: "Rp80.000",
      productLink:
        "https://shopee.co.id/Green-Bean-Kopi-Arabika-dan-Robusta-Khas-Desa-Cinta-i.1634745839.40569750301",
      drawerContent:
        "Green Bean Kopi Arabika dan Robusta Khas Desa Cinta Memiliki Karakter yang Unik Ditanam diatas ketinggian 1000 Mdpl Lebih dengan teknik fermentasi khusus",
    },
    {
      imageSrc: ["/cherry.webp"],
      title: "Buah Cherry Kopi Merah Khas Desa Cinta",
      description:
        "Biji Kopi Cherrry Merah KHas Desa Cinta Dengan Karakter Body Tebal dan Keasaman Khas",
      price: "Rp50.000",
      productLink:
        "https://shopee.co.id/Jual-Buah-Cherry-Kopi-Merah-Khas-Desa-Cinta-i.1634745839.40619695376",
      drawerContent:
        "Biji Kopi Cherrry Merah KHas Desa Cinta Dengan Karakter Body Tebal dan Keasaman Khas",
    },
  ];

  return (
    <section className="mt-5 min-h-[400px] bg-stone-200 pb-20">
      <div className="container">
        <h1
          id="products"
          className="pt-16 text-center text-lg font-semibold text-stone-600 md:text-xl lg:text-3xl xl:text-[2.5rem]"
        >
          Koleksi Premium Kami
        </h1>
        <p className="pt-5 text-center">
          Dua varietas kopi yang luar biasa, masing-masing dengan karakter dan
          profil rasa yang unik
        </p>
        <div className="flex justify-center">
          <div className="grid w-full grid-cols-1 place-items-center gap-5 pt-10 sm:grid-cols-2 lg:w-[80%] xl:w-[60%] 2xl:w-[50%]">
            {product.map((item, index) => (
              <CardProduct key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
