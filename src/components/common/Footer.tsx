import React from "react";
import Typography from "../Typography/Typography";
import { footerData } from "../../data";
import FooterSection from "./FooterSection";
import FooterIconSection from "./FooterIconSection";

function Footer() {
  return (
    <footer className="bg-dark text-white m-0 lg:px-[4.5rem] px-10 pt-20 pb-10 w-full flex flex-col gap-8 sm:gap-12 md:gap-16">
      <div className="flex flex-col sm:flex-row lg:gap-16">
        <div className="flex justify-center sm:justify-start mb-8 sm:mb-0">
          <FooterIconSection />
        </div>
        <div className="flex flex-col gap-12 sm:flex-row flex-1 justify-center sm:justify-around">
          {footerData.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:gap-6">
        <hr className="border-t-[1px] border-gray-300 opacity-50" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Typography
            variant="content"
            className="text-sm opacity-40 text-center sm:text-left"
          >
            Furniro © 2024. All rights reserved.
          </Typography>
          <Typography
            variant="content"
            className="text-sm opacity-40 cursor-pointer text-center sm:text-right"
          >
            Terms & Conditions | Privacy Policy
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
