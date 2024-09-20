import React from "react";

interface HeadingProps {
  variant?: "title" | "subtitle" | "content" | "content-xl" | "content-md";
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<HeadingProps> = ({
  variant,
  children,
  className,
}) => {
  let style;

  switch (variant) {
    case "title":
      style = "lg:text-4xl text-2xl font-semibold font-abril   ";
      break;
    case "subtitle":
      style = "text-xl font-semibold font-abril";
      break;
    case "content":
      style = "text-lg font-normal font-optima";
      break;
    case "content-md":
      style = "text-[18px] font-normal font-optima";
      break;
    case "content-xl":
      style = "text-xl  font-optima";
      break;
    default:
      style = "";
  }
  return <span className={`${style} ${className}`}>{children}</span>;
};

export default Typography;
