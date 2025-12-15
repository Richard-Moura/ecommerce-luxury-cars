
import React from 'react';
import { Link } from 'react-router-dom';



const Navbar: React.FC = () => {
    return (
       
        <header className='w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10'>
            
            <div className='max-w6x1 mx-auto flex items-center justify-betwwen py-4 px-6'>
            
                <Link to="/" className='text-white text-2x1 font-bold tracking-wide hover:text-yellow-400 transition-colors'>
                    Lux<span className='text-yellow-400'>Cars</span>
                </Link>

               
                <nav>
                    
                    <ul className='flex gap-8 text-white text-lg'>
                        <li>
                            <Link to="/" className='hover:text-yellow-400 transition-colors'>
                                Início
                            </Link>
                        </li>

                        <li>
                            <Link to="/carros" className='hover:text-yellow-400 transition-colors'>
                                Carros
                            </Link>
                        </li>

                        <li>
                            <Link to="/sobre" className='hover:text-yellow-400 transition-colors'>
                                Sobre nós
                            </Link>
                        </li>

                        <li>
                            <Link to="/contato" className='hover:text-yellow-400 transition-colors'>
                                Contato
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};


export default Navbar;