import React from "react";
import Typography from "../Typography/Typography";

interface FooterSectionProps {
  title: string;
  items: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="subtitle" className="text-[18px]">
        {title}
      </Typography>
      <div className="flex flex-col gap-2 ">
        {items.map((item, index) => (
          <Typography key={index} variant="content-md" className="cursor-pointer">
            {item}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;
