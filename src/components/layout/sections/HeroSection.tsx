import React from "react";
import Image from "next/image";
import { Button } from "src/components/ui/button";

const HeroSection = () => {
    return (
        <section className="w-full flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-10 bg-transparent lg:relative lg:mt-12">
            {/* Texto à esquerda */}
            <div className="max-w-[570px] text-left  lg:mt-5 lg:mb-52 ">
                <h1 className="w-[90%] lg:w-full text-white text-[24px] lg:text-4xl font-bold leading-tight lg:leading-normal">
                    Obtenha mais
                    <span className="bg-[linear-gradient(130deg,#ffffff_1%,#e0e0e0)] text-green-800 text-[36px] px-3 py-1 inline-block lg:inline lg:mx-2 w-9/10 lg:w-90 mx-auto m-2 rounded">
                        produtividade
                    </span>
                    <br /> no registro de ponto da sua empresa.
                </h1>
                <p className="text-white text-[20px] lg:text-base mt-4 lg:text-[28px] lg:leading-normal">
                    Mais precisão e segurança através de tecnologias de reconhecimento facial e geolocalização.
                </p>
                <Button
                    variant="outline"
                    className="mt-4 bg-white text-green-800 text-xl lg:text-2xl font-semibold px-6 py-6 rounded-lg border-none transition duration-1000 ease-in-out shadow-[11px_11px_15px_rgba(0,0,0,0.5)] hover:scale-105 hover:bg-white hover:text-green-800"
                >
                    Entre em contato
                </Button>

            </div>

            {/* Imagem à direita */}
            <div className="w-auto lg:w-[450px]">
                <Image
                    src="/hero_img.svg"
                    alt="Ilustração Relógio"
                    width={200}
                    height={200}
                    className="lg:absolute top-0 right-0 lg:w-[580px] lg:h-auto"
                />
            </div>
        </section>
    );
};

export default HeroSection;
