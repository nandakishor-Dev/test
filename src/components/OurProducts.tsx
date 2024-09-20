import React from "react";
import ProductCard from "./ProductCard";
import { useQuery } from "react-query";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

function OurProducts() {
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products/");
    const products = response.data;

    const modifiedProducts = products.slice(0, 8).map((product: Product) => {
      const titleWords = product.title.split(" ").slice(0, 2).join(" ");
  
      return {
        ...product,
        title: titleWords, 
        oldPrice: product.price * 2,
      };
    });

    return modifiedProducts;
  };

  const { isLoading, data: productData } = useQuery({
    queryFn: () => fetchProducts(),
    queryKey: ["fetchProducts"],
  });
  console.log(productData);
  return (
    <section className="bg-white px-20 py-12  flex flex-col gap-10">
      {/* heading */}
      <div className="flex flex-col  items-center justify-center gap-2 ">
        <span className="text-black font-bold text-3xl ">Our Products</span>
      </div>

      {/* images */}

      <div className="grid grid-cols-4 gap-8 ">
        {productData &&
          productData.length > 0 &&
          productData.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
}

export default OurProducts;
