import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0B0B0B] text-white py-12 mt-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
              
                <div>
                    <Link to="/" className="text-3xl font-bold tracking-wide hover:text-yellow-400 transition-colors inline-block">
                        Lux<span className="text-yellow-400">Cars</span>
                    </Link>
                    <p className="text-gray-400 mt-3 leading-relaxed">
                        Carros de luxo selecionados com excelência. A experiência perfeita para quem busca exclusividade e performance.
                    </p>
                </div>

           
                <div>
                    <h3 className="text-xl font-semibold mb-4">Navegação</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
                        <li><Link to="/carros" className="hover:text-white transition-colors">Carros</Link></li>
                        <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre nós</Link></li>
                        <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
                    </ul>
                </div>

                {/* coluna 3 - Contato */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contato</h3>
                    <p className="flex items-center gap-3 text-gray-300">
                        <Phone size={18} /> +55 (11) 1234-5678
                    </p>

                    <p className="flex items-center gap-3 text-gray-300">
                        <Mail size={18} /> atendimento@luxcars.com
                    </p>

                    <p className="flex items-center gap-3 text-gray-300">
                        <MapPin size={18} /> Belo Horizonte - MG
                    </p>
                </div>

            
                <div>
                    <h3 className="text-xl font-semibold mb-4">Siga a LuxCars</h3>
                    <div className="flex gap-4">
                        <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
                            <Facebook size={22} />
                        </a>

                        <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
                            <Instagram size={22} />
                        </a>

                        <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
                            <Youtube size={22} />
                        </a>
                    </div>
                </div>
            </div>
          
            <div className="text-center text-gray-500 text-sm border-t border-white/10 mt-10 pt-5">
                © {new Date().getFullYear()} LuxCars - Todos os direitos reservados.
            </div>
        </footer>
    );
};

export default Footer;