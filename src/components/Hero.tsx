import React from "react";

function Hero() {
  return (
    <section className="">
      <div className="bg-[url('/images/homehero.png')]  relative   bg-cover bg-center w-screen h-[calc(75vw*9/16)] ">
        <div className="bg-[#FFF3E3] flex flex-col gap-10 rounded-[10px] p-10 pt-16 w-fit pl-12 pr-16 absolute right-36 top-[60%] transform -translate-y-1/2 ">
          {/* text section */}
          <div className="flex flex-col gap-2">
            <div className="font-medium text-[16px]">New Arrival</div>
            <div className="text-4xl font-bold text-[#B88E2F]">
              Discover Our <br />
              New Collection
            </div>
            <div className="font-medium text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />{" "}
              elit tellus, luctus nec ullamcorper mattis.
            </div>
          </div>
          {/* button */}
          <div>
            <button className="bg-[#B88E2F] text-md px-14 text-white py-4">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
