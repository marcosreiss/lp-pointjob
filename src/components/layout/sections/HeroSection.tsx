import React from "react";
import Image from "next/image";
import { Button } from "src/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 py-10 bg-transparent">
      {/* Texto à esquerda */}
      <div className="max-w-[550px] text-left">
        <h1 className="text-white text-[28px] md:text-4xl font-bold leading-tight">
          Obtenha mais <span className="bg-white text-green-800 text-[36px] px-3 py-1 inline-block w-9/10 mx-auto m-2 rounded">produtividade</span>
          <br /> no registro de ponto da sua empresa.
        </h1>
        <p className="text-white text-[20px] md:text-base mt-6">
          Mais precisão e segurança através de tecnologias de reconhecimento facial e geolocalização.
        </p>
        <Button
          variant="outline"
          className="mt-6 bg-white text-green-800 text-2xl font-semibold px-6 py-6 rounded-lg hover:bg-gray-200 transition"
        >
          Entre em contato
        </Button>
      </div>

      {/* Imagem à direita */}
      <div className="w-[300px] md:w-[450px]">
        <Image
          src="/hero_img.webp"
          alt="Ilustração Relógio"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
