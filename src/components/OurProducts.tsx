import React from "react";
import ProductCard from "./ProductCard";

function OurProducts() {
  return (
    <section className="bg-white px-20 py-12 h-screen flex flex-col gap-10">
      {/* heading */}
      <div className="flex flex-col  items-center justify-center gap-2 ">
        <span className="text-black font-bold text-3xl ">Our Products</span>
      </div>

      {/* images */}

      <div className="grid grid-cols-4 gap-8 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default OurProducts;
