import React from "react";
import Image from "next/image";
import { Button } from "src/components/ui/button";

const HeroSection = () => {
    return (
        <section className="w-full smd:w-[940px] smd:mx-auto lg:w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 py-10 md:px-12 bg-transparent relative lg:mt-12">
            {/* Texto à esquerda */}
            <div className="smd:max-w-[530px] md:max-w-[380px] lg:max-w-[570px] text-left  lg:mt-5 lg:mb-52 ">
                <h1 className="w-[90%] lg:w-full text-white text-[24px] md:text-2xl lg:text-4xl font-bold leading-tight lg:leading-normal">
                    Obtenha mais
                    <span className="bg-[linear-gradient(130deg,#ffffff_1%,#e0e0e0)] text-green-800 text-[36px] px-3 py-1 inline-block lg:inline lg:mx-2 w-9/10 lg:w-90 mx-auto m-2 rounded">
                        produtividade
                    </span>
                    <br /> no registro de ponto da sua empresa.
                </h1>
                <p className="text-white text-[20px]  mt-4 lg:text-[24px] lg:leading-normal">
                    Mais precisão e segurança através de tecnologias de reconhecimento facial e geolocalização.
                </p>
                <Button
                    variant="outline"
                    className="mt-4 md:mt-10 lg:mt-4 bg-white text-green-800 text-xl lg:text-2xl font-semibold px-6 py-6 rounded-lg border-none transition duration-1000 ease-in-out shadow-[11px_11px_15px_rgba(0,0,0,0.5)] hover:scale-105 hover:bg-white hover:text-green-800"
                >
                    Entre em contato
                </Button>

            </div>

            {/* Imagem à direita */}
            <div className="w-auto lg:w-[450px]">
                <Image
                    src="/hero_img_2.svg"
                    alt="Ilustração Relógio"
                    width={200}
                    height={200}
                    className="md:absolute md:top-8 md:right-14 lg:top-0 smd:right-0 smd:top-0 smd:w-[400px] lg:w-[550px] md:w-[340px] md:h-auto"
                />
            </div>
        </section>
    );
};

export default HeroSection;
