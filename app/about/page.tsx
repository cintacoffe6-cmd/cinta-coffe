import Image from "next/image";

export default function About() {
  return (
    <main>
      <section className="flex h-[150px] items-center justify-center bg-[url(/coffee-bg.jpg)] bg-repeat sm:h-[250px] xl:h-[300px]">
        <h1 className="text-2xl font-bold text-white sm:text-3xl lg:text-3xl xl:text-[2.5rem]">
          Tentang Kami
        </h1>
      </section>

      <section className="container flex min-h-[400px] flex-col gap-20 py-20">
        <div className="flex flex-col justify-center gap-10 sm:flex-row">
          <div className="flex w-full items-center justify-center sm:w-[40%]">
            <Image
              src="/logo.jpg"
              alt="about"
              width={300}
              height={300}
              className="h-[200px] w-[230px]"
            />
          </div>
          <p className="w-full text-justify sm:w-[50%] lg:w-[35%]">
            Cinta Coffe merupakan produsen olahan kopi yang berasal dari Desa
            Cinta yang terletak di Kecamatan Karangtengah, Kabupaten Garut, Jawa
            Barat, dengan luas wilayah yang rata-rata adalah pertanian di
            ketinggian 1.000 mdpl.
            <br />
            Suhu sejuk dan tanah subur menjadikan desa ini ideal untuk
            pertanian, terutama kopi Jenis: Arabika, Linias, dan Ateng. Sebagian
            besar masyarakat adalah petani kopi, namun selama ini hasil panen
            dijual mentah dengan harga rendah kepada tengkulak.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-10 sm:flex-row-reverse">
          <div className="flex w-full items-center justify-center sm:w-[40%]">
            <Image
              src="/coffee.jpg"
              alt="about"
              width={300}
              height={300}
              className="h-[200px] w-[230px] object-cover"
            />
          </div>
          <p className="w-full text-justify sm:w-[50%] lg:w-[35%]">
            Melalui program pemberdayaan masyarakat, Desa Cinta mulai
            mengembangkan Kopi Kemasan Premium dan Teh Cascara sebagai produk
            unggulan desa. Desa ini kini dikenal sebagai pusat Smart Agrowisata
            Berbasis Digital, yang tidak hanya menghasilkan produk berkualitas
            tetapi juga meningkatkan ekonomi masyarakat, khususnya ibu rumah
            tangga yang diberdayakan dalam proses produksi dan pemasaran.
          </p>
        </div>
      </section>
    </main>
  );
}
