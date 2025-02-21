import Image from "next/image";
import './css/form_section.css'

export default function ContactSection() {
    return (
        <section className="w-full flex flex-col lg:flex-row items-center justify-between px-6 py-10 lg:py-28 bg-white  max-w-[1140px] mx-auto">
            {/* Texto */}
            <div className="lg:w-2/3 text-left ">
                <h2 className="text-2xl md:text-3xl lg:text-[44px] font-bold text-primary lg:leading-relaxed ">
                    <span className="bg-[linear-gradient(130deg,#236742,#46CD84)] text-white px-2 py-1 rounded-md">
                        Transforme
                    </span>{" "}
                    seu negócio hoje mesmo!
                </h2>
                <p className="text-gray-600 mt-4 lg:text-xl">
                    Aprimore o controle de ponto com mais segurança e eficiência. Fale com um especialista agora!
                </p>
                <button className="custom-button">
                    Entrar em contato
                    <Image
                        src="/wpp_icon.svg"
                        alt="WhatsApp"
                        className="w-5 h-5"
                        width={50}
                        height={50}
                    />
                </button>

            </div>

            {/* Formulário */}
            <div className="flex flex-col justify-center lg:w-1/2 bg-[linear-gradient(138deg,#46CD84_1%,#236742_99%)] lg:px-10 lg:h-[450px] rounded-2xl shadow-[11px_11px_15px_rgba(0,0,0,0.5)] text-white mt-6 lg:mt-0">
                <h3 className="text-lg lg:text-3xl font-bold text-center mb-4">Fale Conosco</h3>
                <form className="flex flex-col gap-4">
                    <label className="text-sm font-semibold">
                        Email:
                        <input
                            type="email"
                            className="w-full mt-1 p-2 rounded-md bg-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Digite seu email"
                        />
                    </label>

                    <label className="text-sm font-semibold">
                        Mensagem:
                        <textarea
                            className="w-full mt-1 p-2 rounded-md bg-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                            rows={4}
                            placeholder="Digite sua mensagem"
                        />
                    </label>

                    <button className="bg-white text-green-700 font-bold py-2 rounded-md shadow-md hover:bg-gray-200 transition">
                        ENVIAR
                    </button>
                </form>
            </div>
        </section>
    );
}
