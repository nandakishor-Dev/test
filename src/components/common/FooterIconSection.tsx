import React from "react";

function FooterIconSection() {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-16 p-4">
      <div className="text-2xl font-bold">
        <img
          src="/images/furnirologowhite.png"
          alt="Logo"
          className="w-32 md:w-48"
        />
      </div>

      <div className="flex flex-row gap-4 md:gap-6 text-white">
        <img
          src="/images/linkedinicon.png"
          className="w-6 h-6 cursor-pointer"
          alt="LinkedIn"
        />
        <img
          src="/images/instaicon.png"
          className="w-6 h-6 cursor-pointer"
          alt="Instagram"
        />
        <img
          src="/images/fbicon.png"
          className="w-6 h-6 cursor-pointer"
          alt="Facebook"
        />
        <img
          src="/images/xicon.png"
          className="w-6 h-6 cursor-pointer"
          alt="X"
        />
      </div>
    </div>
  );
}

export default FooterIconSection;
