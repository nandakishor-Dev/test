import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: number; // optional because it's added dynamically
  image: string;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductCardProps {
  product: Product;
}


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative  bg-[#F4F5F7] flex items-center flex-col gap-4 group">
      <img src={product?.image} alt="" className="h-80 w-full" />
      <div className="flex flex-col p-4 w-full gap-2 z-10">
        <span className="text-xl">{product?.title}</span>
        <span>{product?.category}</span>
        <div className="flex justify-between">
          <span className="font-semibold">Rp {product?.price}</span>
          <span className="opacity-50 line-through">Rp {product?.oldPrice}</span>
        </div>
      </div>

      <div className="absolute gap-6 inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <button className="bg-white cursor-pointer px-8 py-4 text-[#B88E2F] font-semibold">
          Add to Cart
        </button>

        <div className="flex text-white gap-8">
          <div className="flex items-center cursor-pointer gap-1">
            <img src="/images/share.png" />
            Share
          </div>
          <div className="flex  items-center cursor-pointer gap-1">
            <img src="/images/compare.png" />
            Compare
          </div>
          <div className="flex  items-center cursor-pointer gap-1">
            <img src="/images/love.png" />
            Like
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[#727374] backdrop-blur-sm opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-0"></div>
    </div>
  );
}

export default ProductCard;
