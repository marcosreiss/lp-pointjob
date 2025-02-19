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
        <section className="w-full flex flex-col items-center px-6 py-10">
            {/* Título */}
            <div className="relative flex items-center w-full max-w-[800px] justify-center mb-8">
                <div className="absolute left-0 w-16 border-t-2 border-green-800"></div>
                <h2 className="text-2xl font-bold text-green-900 mx-4 md:text-3xl">
                    Produto
                </h2>
                <div className="absolute right-0 w-16 border-t-2 border-green-800"></div>
            </div>

            {/* Grid Responsivo */}
            <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8">
                {features.map((feature, index) => (
                    <Card key={index} className="bg-white h-56 shadow-lg rounded-3xl p-6 flex flex-row items-center gap-4">

                        <CardContent className="p-0 flex gap-4">
                            <div className="w-[80%]">
                                <h3 className="text-lg font-bold text-green-900">{feature.title}</h3>
                                <p className="text-gray-700 text-sm">{feature.description}</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <Image src={feature.icon} alt={feature.title} width={150} height={150} className="w-12 h-12 md:w-16 md:h-16" />
                            </div>
                        </CardContent>

                    </Card>
                ))}
            </div>

            {/* Botão abaixo dos cards */}
            <Button className="mt-10 bg-green-800 text-white text-[20px] md:text-[28px] font-semibold px-8 py-6 rounded-lg hover:bg-green-900 transition">
                Faça seu orçamento
            </Button>
        </section>
    );
};

export default ProductSection;
