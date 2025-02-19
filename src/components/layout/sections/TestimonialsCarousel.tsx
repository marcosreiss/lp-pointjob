import * as React from "react";
import Image from "next/image";
import { Card } from "src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "src/components/ui/carousel";

const testimonials = [
  {
    name: "Emanoel Rocha",
    feedback:
      "O software de ponto com reconhecimento facial revolucionou nosso controle de ponto. É preciso e seguro, eliminando erros e fraudes. Altamente recomendado!",
    image: "/emanuel_img.webp", // Substitua pelo caminho correto
  },
  {
    name: "Renata Lima",
    feedback:
      "Com a geolocalização, o controle de ponto da equipe que está alocada em outra cidade ficou impecável. Registros precisos e suporte ao cliente excelente!",
    image: "/renata_img.webp", // Substitua pelo caminho correto
  },
  {
    name: "Rodrigo Guimarães",
    feedback:
      "A produtividade aumentou com PointJob. O reconhecimento facial é eficiente e elimina as filas. Perfeito para as necessidades da minha empresa!",
    image: "/rodrigo_img.webp", // Substitua pelo caminho correto
  }
];

export function TestimonialsCarousel() {
  return (
    <section className="w-full flex flex-col items-center px-6 py-10 bg-green-800 text-white">
      {/* Título */}
      <h2 className="text-2xl font-bold text-center mb-6 md:text-3xl">
        O que nossos clientes dizem sobre nós:
      </h2>

      {/* Carousel */}
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-full max-w-5xl"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 px-4"
            >
              <Card className="bg-white text-black shadow-lg rounded-lg p-6 flex flex-col items-center gap-4 min-h-[300px]">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm text-center">{testimonial.feedback}</p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Botões só aparecem se houver mais de 3 testemunhos */}
        {testimonials.length > 3 && (
          <div className="hidden md:flex">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        )}
      </Carousel>
    </section>
  );
}

export default TestimonialsCarousel;
