import { CardProduct, CardProductProps } from "./card-product";

export function Collection() {
  const product: CardProductProps[] = [
    {
      imageSrc: "/cinta-coffee-2.jpg",
      title: "Kopi Arabika Cinta Coffee Original",
      description:
        "Kopi arabika khas Desa Cinta, ditanam di 1.000 mdpl dengan fermentasi semi-washed khusus. Hasilnya aroma fruity dengan hints floral, body lembut, clean cup, dan aftertaste manis alami.",
      price: "Rp35.000",
    },
    {
      imageSrc: "/teh-cascara.jpg",
      title: "Teh Cascara Cinta Coffee",
      description:
        "Teh herbal unik dari kulit buah kopi arabika pilihan, kaya antioksidan dengan rasa fruity manis alami, aroma segar dan Menyehatkan tubuh sekaligus mendukung green product Desa Cinta.",
      price: "Rp40.000",
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
