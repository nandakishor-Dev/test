import React from "react";

function ProductCard() {
  return (
    <div className=" cursor-pointer bg-[#F4F5F7] flex items-center flex-col gap-4 ">
      <img src="/images/dining.png" alt="" className="h-80 w-full " />
      <div className="flex flex-col p-4 w-full gap-2 ">
        <span className="text-xl ">Slytherine</span>
        <span>Stylish cafe chair</span>
        <div className="flex justify-between"><span>Rp 2.500.000</span> <span className="opacity-50 line-through">Rp 3.500.000</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
