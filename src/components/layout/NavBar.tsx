import React from "react";
import Image from "next/image"; // Use isso se estiver no Next.js, ou troque por <img>
import { Button } from "src/components/ui/button";

const Navbar = () => {
  return (
    <nav className="lg:w-full sm:w-[90vw]  flex items-center justify-between pt-10 pb-5 px-6 bg-transparent sm:flex-col">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.webp"
          alt="Logo PointJob"
          width={207}
          height={60}
          className="h-auto"
        />
      </div>

      {/* Navegação */}
      <div className="flex items-center lg:gap-6">
        <span className="text-white lg:text-[28px] font-medium cursor-pointer hover:opacity-80 transition">
          Produto
        </span>
        <span className="text-white lg:text-[28px] font-medium cursor-pointer hover:opacity-80 transition">
          Casos
        </span>
        <Button
          variant="outline"
          className="lg:text-[24px] bg-white text-green-800 font-semibold lg:px-6 lg:py-5 rounded-lg hover:bg-gray-200 transition"
        >
          Fale Conosco
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
