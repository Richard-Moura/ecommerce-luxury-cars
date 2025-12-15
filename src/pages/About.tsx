export default function About() {
    return (
        <div className="max-w-5xl mx-auto p-6 mt-24">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Sobre Nós</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">LuxCars - Sua Plataforma de Carros de Luxo</h2>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                    A LuxCars é uma plataforma dedicada a conectar entusiastas de automóveis com os mais exlusivos e desejados veículos de luxo do mercado.
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed">
                    Com mais de uma década de experiência no setor automotivo premium, oferecemos:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                    <li>Catálogo curado dos melhores carros de luxo</li>
                    <li>Avaliação profissional de cada veículo</li>
                    <li>Condições de financiamento facilitadas</li>
                    <li>Atendimento personalizado 24/7</li>
                    <li>Garantia e suporte pós-venda</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Nossa Missão</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Proporcionar aos nossos clientes acesso aos mais refinados automóveis do mundo, com total segurança, transparência e excelência no atendimento.
                </p>
            </div>
        </div>
    );
}
