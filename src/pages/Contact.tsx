import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <div className="max-w-5xl mx-auto p-6 mt-24">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Contato</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Entre em Contato</h2>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <Phone className="text-yellow-500 mt-1" size={24} />
                            <div>
                                <h3 className="font-semibold text-gray-800">Telefone</h3>
                                <p className="text-gray-600">+55 (11) 1234-5678</p>
                                <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Mail className="text-yellow-500 mt-1" size={24} />
                            <div>
                                <h3 className="font-semibold text-gray-800">Email</h3>
                                <p className="text-gray-600">contato@luxcars.com</p>
                                <p className="text-gray-600">atendimento@luxcars.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="text-yellow-500 mt-1" size={24} />
                            <div>
                                <h3 className="font-semibold text-gray-800">Endereço</h3>
                                <p className="text-gray-600">Avenida Getúlio Vargas, 1000</p>
                                <p className="text-gray-600">Belo Horizonte - MG, 30130-100</p>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Enviar Mensagem</h2>
                    
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Nome</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                                placeholder="Seu nome"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input 
                                type="email" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                                placeholder="Seu email"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Mensagem</label>
                            <textarea 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 h-28"
                                placeholder="Sua mensagem"
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
