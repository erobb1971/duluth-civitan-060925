import React from "react";

interface CivitanLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const CivitanLogo: React.FC<CivitanLogoProps> = ({ 
  className = "",
  size = "md"
}) => {
  const sizeClasses = {
    sm: "w-10 h-10 md:w-14 md:h-14", 
    md: "w-14 h-14 md:w-20 md:h-20", 
    lg: "w-20 h-20 md:w-28 md:h-28", 
    xl: "w-28 h-28 md:w-36 md:h-36"  
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <img 
        src="/images/logo/civitan-logo.png" 
        alt="Duluth Civitan June 9 2025 Logo" 
        className="w-full h-full object-contain p-1"
      />
    </div>
  );
};

export default CivitanLogo;
