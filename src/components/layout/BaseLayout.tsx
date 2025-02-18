import React from "react";

interface BaseLayoutProps {
  children: React.ReactNode;
  bgColor?: string; // Cor de fundo como prop opcional
  height?: string;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, bgColor = "white", height = "100vh" }) => {
  return (
    <div
      className={`w-full md:w-[100vw] sm:w-[90vw] min-h-screen`}
      style={{ height, background: bgColor, }} // Define a altura dinamicamente
    >
      <div className="max-w-[1140px] w-full mx-auto">{children}</div>
    </div>
  );
};

export default BaseLayout;
