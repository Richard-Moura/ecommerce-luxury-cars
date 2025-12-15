import { useParams } from "react-router-dom";
import { cars } from "../data/cars";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CarDetails() {
    const { id } = useParams();
    const car = cars.find((c) => c.id === id);

    if (!car) {
        return (
            <div className="p-10 text-center text-white">
                <h1 className="text-2xl font-bold">Carro náo encontrado</h1>
                <Link to="/" className="text-blue-400 underline mt-4 inline-block"> Voltar para Home </Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto p-6 text-white">
            <Link to="/" className="flex items-center gap-2 mb-6 text-gray-300 hover:text-white">
                <ArrowLeft size={20} /> Voltar
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#111] p-6 rounded-xl shadow-lg">
                <img 
                src={car.image} 
                alt={car.name}
                className="w-full rounded-xl object-cover" />

                <div>
                    <h1 className="text-3xl font-bold mb-3">{car.name}</h1>
                    <p className="text-gray-400 mb-4">{car.description}</p>

                    <p className="text-3xl font-semibold text-green-400 mb-3">
                        R$ {car.price.toLocaleString("pt-BR")}
                    </p>

                    <ul className="space-y-2 text-gray-300">
                        <li><strong>Ano:</strong> {car.year}</li>
                        <li><strong>Motor:</strong> {car.engine}</li>
                        <li><strong>Potência:</strong> {car.hp} cv</li>
                        <li><strong>Velocidade Máx:</strong> {car.speed} km/h</li>
                    </ul>

                    <Link to={`/checkout/${id}`} className="mt-6 w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold block text-center transition-colors">
                        Comprar agora
                    </Link>
                </div>
            </div>
        </div>
        
    );
}