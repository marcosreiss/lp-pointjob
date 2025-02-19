import React from "react";
import Image from "next/image";
import { Button } from "src/components/ui/button";

const HeroSection = () => {
    return (
        <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 py-10 bg-transparent md:relative md:mt-12">
            {/* Texto à esquerda */}
            <div className="max-w-[570px] text-left md:h-[600px] md:mt-5 ">
                <h1 className="text-white text-[24px] md:text-4xl font-bold leading-tight md:leading-normal">
                    Obtenha mais
                    <span className="bg-white text-green-800 text-[36px] px-3 py-1 inline-block md:inline md:mx-2 w-9/10 lg:w-90 mx-auto m-2 rounded">
                        produtividade
                    </span>
                    <br /> no registro de ponto da sua empresa.
                </h1>
                <p className="text-white text-[20px] md:text-base mt-4 md:text-[28px] md:leading-normal">
                    Mais precisão e segurança através de tecnologias de reconhecimento facial e geolocalização.
                </p>
                <Button
                    variant="outline"
                    className="mt-4 bg-white text-green-800 text-xl md:text-2xl font-semibold px-6 py-6 rounded-lg hover:bg-gray-200 transition"
                >
                    Entre em contato
                </Button>
            </div>

            {/* Imagem à direita */}
            <div className="w-auto md:w-[450px]">
                <Image
                    src="/hero_img.svg"
                    alt="Ilustração Relógio"
                    width={200}
                    height={200}
                    className="md:absolute top-0 right-0 md:w-[580px] md:h-auto"
                />
            </div>
        </section>
    );
};

export default HeroSection;
