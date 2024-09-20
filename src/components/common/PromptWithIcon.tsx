import React from "react";
import Typography from "../Typography/Typography";

interface PromptWithIconProps {
  variant: "light" | "dark";
  text: string;
  type?: "button" | "submit";
  onClick?: () => void;
  textClass?: string;
}

const PromptWithIcon: React.FC<PromptWithIconProps> = ({
  variant,
  text,
  type = "button",
  onClick,
  textClass = "",
}) => {
  const colorClass = variant === "dark" ? "text-white" : "text-black";
  return (
    <button onClick={onClick} type={type} className="flex   items-center gap-8">
      <Typography variant="content-xl" className={`${colorClass} ${textClass}`}>
        {text}
      </Typography>
      <i className={`fi fi-ts-arrow-right text-4xl mt-2 ${colorClass}`} />
    </button>
  );
};

export default PromptWithIcon;
