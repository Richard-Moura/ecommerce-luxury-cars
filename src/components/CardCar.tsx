
import React from 'react';
import { Link } from 'react-router-dom';


interface CardCarProps {
    id: string; //ID do carro
    name: string; //Nome do carro
    price: number; //Preço do carro
    image: string; //URL da imagem do carro
    year: number;  //Ano do carro
    km: number;   //Quilometragem do carro
} 

const CardCar: React.FC<CardCarProps> = ({id, name, price, image, year, km}) => {
    return (
        
        <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer w-full max-w-sm'>
           
            <img src={image} alt={name} className='w-full h-48 object-cover' />

           
            <div className='p-5'>
                <h2 className='text-xl font-semibold text-gray-900'>{name}</h2>

                <p className='text-gray-600 mt-1'>Ano: {year} . {km} km</p>

                <p className='text-yellow-500 text-2xl font-bold mt-3'>R$ {price.toLocaleString("pt-BR")}</p>

                <Link to={`/car/${id}`} className='mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors block text-center'>
                    Ver detalhes
                </Link>
            </div>
        </div>
    );
};


export default CardCar;