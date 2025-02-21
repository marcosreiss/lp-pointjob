import React from "react";

interface BaseLayoutProps {
  children: React.ReactNode;
  bgColor?: string; // Cor de fundo como prop opcional
  minHeight?: string;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, bgColor = "white", minHeight = "0" }) => {
  return (
    <div
      className={`w-full min-h-screen`}
      style={{ minHeight, background: bgColor, }} // Define a altura dinamicamente
    >
      <div className="max-w-[1140px] w-full mx-auto">{children}</div>
    </div>
  );
};

export default BaseLayout;
