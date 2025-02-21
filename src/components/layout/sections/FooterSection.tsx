



export default function FooterSection() {
    return (
        <div className="w-full flex items-center justify-center h-20 md:h-10 bg-[linear-gradient(90deg,#236742,#46CD84)]">
            <span className="text-white text-sm font-extralight text-center px-10">
                Copyright © 2025 - Todos os direitos reservados - powered by{' '}
                <a 
                    href="https://marcosreis.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-normal transition-colors duration-300 hover:text-black"
                >
                    Marcos Reis Dev
                </a>
            </span>
        </div>
    );
}
