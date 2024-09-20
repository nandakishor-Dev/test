import React from "react";

function BrowseSection() {
  return (
    <section className="bg-white px-20 py-12 h-screen flex flex-col gap-10">
      {/* heading */}
      <div className="flex flex-col  items-center justify-center gap-2 ">
        <span className="text-black font-bold text-3xl ">Browse The Range</span>
        <span className="text-black font-medium text-md ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>

      {/* images */} 

      <div className=" flex gap-8 justify-center ">
        <div className=" flex items-center flex-col gap-4 ">
          <img src="/images/dining.png" alt="" className="rounded-lg  cursor-pointer" />
          <span className="text-2xl font-semibold">Dining</span>
        </div>
        <div className=" flex items-center flex-col gap-4 ">
          <img src="/images/living.png" alt="" className="rounded-lg cursor-pointer" />
          <span className="text-2xl font-semibold">Living</span>
        </div>
        <div className=" flex items-center flex-col gap-4 ">
          <img src="/images/bedroom.png" alt="" className="rounded-lg cursor-pointer" />
          <span className="text-2xl font-semibold">Bedroom</span>
        </div>
      </div>
    </section>
  );
}

export default BrowseSection;
