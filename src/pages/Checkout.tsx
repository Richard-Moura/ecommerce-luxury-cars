import { useParams, Link } from "react-router-dom";
import { cars } from "../data/cars";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Checkout() {
    const { id } = useParams();
    const car = cars.find((c) => c.id === id);
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);
    const [orderNumber] = useState(() => `#LUX${Math.random().toString(36).substr(2, 9).toUpperCase()}`);

    if (!car) {
        return (
            <div className="p-10 text-center text-white mt-24">
                <h1 className="text-2xl font-bold">Carro não encontrado</h1>
                <Link to="/" className="text-blue-400 underline mt-4 inline-block">Voltar para Home</Link>
            </div>
        );
    }

    const handlePurchase = () => {
        setIsProcessing(true);
       
        setTimeout(() => {
            setIsProcessing(false);
            setOrderComplete(true);
        }, 2000);
    };

    if (orderComplete) {
        return (
            <div className="max-w-3xl mx-auto p-6 mt-24 text-center">
                <div className="bg-white rounded-lg shadow-lg p-12">
                    <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
                    <h1 className="text-4xl font-bold text-green-600 mb-4">Compra Realizada!</h1>
                    <p className="text-gray-700 text-lg mb-6">
                        Parabéns! Sua compra de <span className="font-bold">{car.name}</span> foi processada com sucesso.
                    </p>
                    
                    <div className="bg-gray-100 p-6 rounded-lg mb-8 text-left">
                        <h2 className="text-xl font-semibold mb-4">Detalhes do Pedido:</h2>
                        <div className="space-y-3">
                            <p><span className="font-semibold">Veículo:</span> {car.name}</p>
                            <p><span className="font-semibold">Valor:</span> R$ {car.price.toLocaleString("pt-BR")}</p>
                            <p><span className="font-semibold">Número do Pedido:</span> {orderNumber}</p>
                            <p><span className="font-semibold">Data:</span> {new Date().toLocaleDateString("pt-BR")}</p>
                        </div>
                    </div>

                    <p className="text-gray-600 mb-8">
                        Um email de confirmação foi enviado para seu email. Em breve entraremos em contato para finalizar os detalhes.
                    </p>

                    <Link 
                        to="/" 
                        className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors inline-block"
                    >
                        Voltar para Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto p-6 mt-24">
            <Link to={`/car/${id}`} className="flex items-center gap-2 mb-6 text-gray-600 hover:text-gray-800">
                <ArrowLeft size={20} /> Voltar para Detalhes
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Resumo da Compra</h2>
                    
                    <img 
                        src={car.image} 
                        alt={car.name}
                        className="w-full h-64 rounded-lg object-cover mb-6"
                    />

                    <div className="space-y-4 border-b pb-6">
                        <h3 className="text-xl font-semibold text-gray-900">{car.name}</h3>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-gray-600">Ano</p>
                                <p className="font-semibold text-gray-900">{car.year}</p>
                            </div>
                            <div>
                                <p className="text-gray-600">Quilometragem</p>
                                <p className="font-semibold text-gray-900">{car.km} km</p>
                            </div>
                            <div>
                                <p className="text-gray-600">Motor</p>
                                <p className="font-semibold text-gray-900">{car.engine}</p>
                            </div>
                            <div>
                                <p className="text-gray-600">Potência</p>
                                <p className="font-semibold text-gray-900">{car.hp} cv</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700">Subtotal</span>
                            <span className="font-semibold">R$ {car.price.toLocaleString("pt-BR")}</span>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-700">Taxas e Frete</span>
                            <span className="font-semibold">R$ 0,00</span>
                        </div>
                        <div className="flex justify-between items-center text-xl font-bold">
                            <span>Total</span>
                            <span className="text-yellow-500">R$ {car.price.toLocaleString("pt-BR")}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Dados de Compra</h2>

                    <form className="space-y-6">
                        
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Dados Pessoais</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Nome Completo</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                                        placeholder="João Silva"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                                        placeholder="seu@email.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Telefone</label>
                                    <input 
                                        type="tel" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                                        placeholder="(11) 99999-9999"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Dados do Cartão</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Número do Cartão</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                                        placeholder="1234 5678 9012 3456"
                                        maxLength={19}
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Validade</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                                            placeholder="MM/AA"
                                            maxLength={5}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">CVV</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                                            placeholder="123"
                                            maxLength={3}
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Nome do Titular</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                                        placeholder="JOAO SILVA"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        
                        <button
                            type="button"
                            onClick={handlePurchase}
                            disabled={isProcessing}
                            className={`w-full py-3 rounded-lg font-semibold text-white transition-colors ${
                                isProcessing 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-yellow-500 hover:bg-yellow-600'
                            }`}
                        >
                            {isProcessing ? 'Processando...' : 'Confirmar Compra'}
                        </button>

                        <p className="text-xs text-gray-600 text-center">
                            Seus dados estão seguros e criptografados.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
