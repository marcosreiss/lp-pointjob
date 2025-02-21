"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Card } from "src/components/ui/card";
import './css/swiper-css.css'
const testimonials = [
  {
    name: "Emanoel Rocha",
    feedback:
      "O software de ponto com reconhecimento facial revolucionou nosso controle de ponto. É preciso e seguro, eliminando erros e fraudes. Altamente recomendado!",
    image: "/emanuel_img.webp",
  },
  {
    name: "Renata Lima",
    feedback:
      "Com a geolocalização, o controle de ponto da equipe que está alocada em outra cidade ficou impecável. Registros precisos e suporte ao cliente excelente!",
    image: "/renata_img.webp",
  },
  {
    name: "Rodrigo Guimarães",
    feedback:
      "A produtividade aumentou com PointJob. O reconhecimento facial é eficiente e elimina as filas. Perfeito para as necessidades da minha empresa!",
    image: "/rodrigo_img.webp",
  },
  {
    name: "Rodrigo Guimarães",
    feedback:
      "A produtividade aumentou com PointJob. O reconhecimento facial é eficiente e elimina as filas. Perfeito para as necessidades da minha empresa!",
    image: "/rodrigo_img.webp",
  },
];

export function TestimonialsCarousel() {
  return (
    <section className="w-full flex flex-col items-center px-6 py-10 bg-primary text-white lg:py-20 relative">

      {/* Sombra no topo */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black/30 to-transparent"></div>

      <h2 className="text-2xl font-bold text-center mb-6 md:text-3xl">
        O que nossos clientes dizem sobre nós:
      </h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={testimonials.length > 3}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 10 },
        }}
        className="w-full max-w-[1040px] custom-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="px-4">
            <Card className="bg-white text-black shadow-lg rounded-lg p-6 flex flex-col items-center gap-4 min-h-[310px]">
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
          </SwiperSlide>
        ))}
        {testimonials.length > 3 && (
          <>
            <div className="swiper-button-prev !absolute !left-[-50px] !top-1/2 !transform !-translate-y-1/2 !z-10"></div>
            <div className="swiper-button-next !absolute !right-[-50px] !top-1/2 !transform !-translate-y-1/2 !z-10"></div>
          </>
        )}
      </Swiper>

      {/* Sombra na base  */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/30 to-transparent"></div>


    </section >
  );
}

export default TestimonialsCarousel;
