import React from "react";
import Image from "next/image";
import { Card, CardContent } from "src/components/ui/card";
import { Button } from "src/components/ui/button";

const features = [
    {
        title: "Reconhecimento Facial",
        description: "Esta tecnologia assegura um registro de ponto rápido e seguro, garantindo a autenticidade e a precisão das marcações.",
        icon: "/facial_icon.webp", // Substitua pelo caminho correto
    },
    {
        title: "Geolocalização",
        description: "Nosso sistema conta com tecnologia de geolocalização para um controle de ponto eficiente e transparente, assegurando a verificação precisa da localização dos colaboradores.",
        icon: "/location_icon.webp", // Substitua pelo caminho correto
    },
    {
        title: "Painel de Administração",
        description: "Painel administrativo para gestores disponibilizado através de um aplicativo web para que possam monitorar todos os dados importantes com facilidade e eficiência.",
        icon: "/adm_icon.webp", // Substitua pelo caminho correto
    },
    {
        title: "Aplicativo Móvel",
        description: "Aplicativo móvel para que os colaboradores possam fazer o registro de ponto com praticidade e mobilidade, facilitando o controle de horas de qualquer lugar, a qualquer momento.",
        icon: "/mobile_icon.webp", // Substitua pelo caminho correto
    },
];

const ProductSection = () => {
    return (
        <section className="w-full md:w-[90%] md:mx-auto lg:w-full  flex flex-col items-center px-6 py-10">
            {/* Título */}
            <div className="relative flex items-center w-full  mb-8">
                <div className=" w-20 lg:w-36 h-1 lg:h-2 bg-[#4C8365] rounded"></div>
                <h2 className="text-3xl font-bold text-green-900 mx-4 lg:text-5xl lg:pb-2">
                    Produto
                </h2>
                <div className=" w-full h-1 lg:h-2 bg-[#4C8365] rounded "></div>
            </div>

            {/* Grid Responsivo */}
            <div className="flex flex-col gap-6 md:w-[80%] lg:grid lg:grid-cols-2 lg:gap-8">
                {features.map((feature, index) => (
                    <Card key={index} className="bg-white shadow-[6px_6px_30px_#4C8365] rounded-3xl p-6">
                        <CardContent className="p-0 ">
                            <h3 className=" text-xl lg:text-2xl font-bold text-green-900 mb-3">{feature.title}</h3>
                            <div className="flex gap-4 items-center">
                                <p className="w-[69%] lg:w-[80%] text-gray-700 text-sm lg:text-lg">{feature.description}</p>
                                <div className="flex justify-center items-start mb-5">
                                    <Image src={feature.icon} alt={feature.title} width={150} height={150} className="w-[70px] h-[70px] lg:w-24 lg:h-auto" />
                                </div>
                            </div>

                        </CardContent>

                    </Card>
                ))}
            </div>

            {/* Botão abaixo dos cards */}
            <Button className="mt-10 bg-green-800 text-white text-[20px] lg:text-[28px] font-semibold px-8 py-6 rounded-lg transition shadow-[11px_11px_15px_#4C8365] border-none">
                Faça seu orçamento
            </Button>
        </section>
    );
};

export default ProductSection;
