import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { addToCart } from "../Redux/cartSlice";
import { CartItem, Product } from "../Redux/types";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  useEffect(() => {
    console.log("Current Cart State:", cartItems);
  }, [cartItems]);
  const handleAddToCart = () => {
    const productWithQuantity: CartItem = { ...product, quantity: 1 }; // Create CartItem with quantity
    dispatch(addToCart(productWithQuantity)); // Dispatch addToCart action
    toast.success("Added to cart");
  };

  return (
    <div className="relative  bg-[#F4F5F7] flex items-center flex-col gap-4 group">
      <img src={product?.image} alt="" className="h-64 w-full" />
      <div className="flex flex-col p-4 w-full gap-2 z-10 ">
        <span className="text-xl">{product?.title}</span>
        <span>{product?.category}</span>
        <div className="flex justify-between">
          <span className="font-semibold">Rp {product?.price}</span>
          <span className="opacity-50 line-through">
            Rp {product?.oldPrice}
          </span>
        </div>
      </div>

      <div className="absolute gap-6 inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <button
          onClick={handleAddToCart}
          className="bg-white cursor-pointer px-8 py-4 text-[#B88E2F] font-semibold hover:bg-[#e9e6e3]  transition-colors duration-300"
        >
          Add to Cart
        </button>

        <div className="flex text-white gap-6">
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

      <div className="absolute inset-0 bg-[#3A3A3A] backdrop-blur-sm opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out z-0"></div>
    </div>
  );
};

export default ProductCard;
