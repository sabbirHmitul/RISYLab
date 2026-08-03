import React from "react";
import logoImage from "../../../assets/img/5.png";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  imageClassName = "",
  titleClassName = "text-gray-900",
  subtitleClassName = "text-gray-500",
  showText = true,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <img
        src={logoImage}
        alt="RISY Team logo"
        className={` h-10 rounded-lg object-cover shadow-md border border-pink-100 ${imageClassName}`.trim()}
      />
    </div>
  );
};

export default Logo;
