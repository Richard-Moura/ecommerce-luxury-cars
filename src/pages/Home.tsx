
import React from 'react';


import CardCar from '../components/CardCar';

import { cars } from '../data/cars';







const Home: React.FC = () => {
    return (
       
        <div className='w-full max-w-6xl mx-auto mt-24 p-6'>
           
            <h1 className='text-3xl font-bold mb-6 text-gray-900'>Carros de Luxo á Venda</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
               
                {cars.map((car, index) => (
                 
                    <CardCar
                        key={index}
                        id={car.id}
                        name={car.name}
                        price={car.price}
                        image={car.image}
                        year={car.year}
                        km={car.km}
                    />
                ))}
            </div>
        </div>
    );
};



export default Home;