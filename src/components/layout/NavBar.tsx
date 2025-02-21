import React from "react";
import Image from "next/image"; // Se não for Next.js, substitua por <img>
import { Button } from "src/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col md:flex-row items-center md:justify-between gap-0 px-6 pt-6 md:pt-16 pb-4 bg-transparent">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.webp"
          alt="Logo PointJob"
          width={140} // Desktop
          height={41}
          className="md:w-[190px] md:h-[55px] lg:w-[207] lg:h-[50px]"
        />
      </div>

      {/* Navegação */}
      <div className="flex flex-row items-center gap-10 md:gap-6 mt-4 md:mt-0">
        <span className="text-white text-xl md:text-2xl lg:text-[28px] font-medium cursor-pointer hover:opacity-80 transition">
          Produto
        </span>
        <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium cursor-pointer hover:opacity-80 transition">
          Casos
        </span>
        <Button
          variant="outline"
          className="text-base sm:text-lg md:text-xl lg:text-[24px] bg-white text-green-800 font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-[6px_6px_10px_rgba(0,0,0,0.5)] hover:bg-white hover:text-green-700"
        >
          Fale Conosco
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
