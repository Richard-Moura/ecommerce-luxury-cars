export interface Car {
    id: string;
    name: string;
    brand?: string;
    model: string;
    price: number;
    year: number;
    km: number;
    image: string;
    description?: string;
    engine: string;
    hp: number;
    speed: number;
    features?: string[];
    isAvailable: boolean;
}

export const cars: Car[] = [
    {
        id: "lamborghini-huracán-azul-2021",
        name: "Lamborghini Huracán Azul",
        brand: "Lamborghini",
        model: "Huracán",
        price: 3600000,
        year: 2021,
        km: 500,
        image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Superesportivo italiano, estado de conservação excelente.",
        engine: "5.2L V10",
        hp: 640,
        speed: 325,
        features: ["Couro", "GPS", "Câmbio Automatico"],
        isAvailable: true,

    },

    {
        id: "ferrari-roma-2023",
        name: "Ferrari Roma",
        brand: "Ferrari",
        model: "Roma",
        price: 2100000,
        year: 2023,
        km: 1500,
        image: "https://images.unsplash.com/photo-1695298800828-81b9a0dcb5db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Elegância clássica comm desempenho moderno.",
        engine: "3.9L Biturbo V8",
        hp: 620,
        speed: 320,
        features: ["Assentos Aquecidos", "Sensor de Estacionamento", "Câmbio Automatico"],
        isAvailable: true,

    },

    {
        id: "porsche-911-turbo-s-2021",
        name: "Porsche 911 Turbo S",
        brand: "Porsche",
        model: "911 Turbo S",
        price: 1800000,
        year: 2021,
        km: 8000,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Desempenho excepcinal comm acabamento premium.",
        engine: "3.8L Twin-Turbo H6",
        hp: 640,
        speed: 330,
        features: ["Tração Integral", "Pacote Sport Chrono"],
        isAvailable: true,

    },

    {
        id: "bmw-i8-2020",
        name: "BMW i8",
        brand: "BMW",
        model: "i8",
        price: 8900000,
        year: 2020,
        km: 12000,
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "O BMW i8 é um carro esportivo híbrido plug-in (PHEV) conhecido pelo seu design futurista e foco em tecnologia e sustentabilidade.",
        engine: "1.5L Turbo + Elétrico",
        hp: 369,
        speed: 250,
        features: ["Motorização Híbrida Plug-in", "Eficiência Energética", "Tecnologia de Ponta"],
        isAvailable: true,

    },

    {
        id: "mercedes-amg-gt-2022",
        name: "Mercedes AMG GT",
        brand: "Mercedes-Benz",
        model: "AMG GT",
        price: 1500000,
        year: 2022,
        km: 3000,
        image: "https://images.unsplash.com/photo-1627440829335-b42fba2a15dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "O Mercedes-AMG GT é um cupê esportivo de alto desempenho que combina luxo, design agressivo e tecnologia inspirada na Fórmula 1. Ele se destaca por sua motorização potente, que em algumas versões mais recentes, como a híbrida plug-in, ultrapassa 800 cv",
        engine: "4.0L Biturbo V8",
        hp: 585,
        speed: 315,
        features: ["Tecnologia e Dirigibilidade", "Motorização", "Modelo híbrido GT 63 S E"],
        isAvailable: true,

    },

    {
        id: "audi-r8-v10-2021",
        name: "Audi R8 V10",
        brand: "Audi",
        model: "R8 V10",
        price: 1650000,
        year: 2021,
        km: 5000,
        image: "https://images.unsplash.com/photo-1622818793130-d22dc3fc1881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "O Audi R8 V10 é um icônico supercarro com motor central-traseiro, conhecido pelo seu motor aspirado de alta performance e dirigibilidade excepcional, muitas vezes comparado a modelos da Lamborghini, que compartilha a mesma plataforma. ",
        engine: "5.2L V10",
        hp: 540,
        speed: 330,
        features: ["Varia de aproximadamente 540 cv", "Tração integral Quattro ", "Suspensão adaptativa Audi Magnetic Ride"],
        isAvailable: true,

    },

    {
        id: "white-sports-car-2021",
        name: "White Sports Car",
        brand: "Whaite",
        model: "Sports",
        price: 2800000,
        year: 2021,
        km: 5000,
        image: "https://images.unsplash.com/photo-1643630594226-78461c682d24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Elegância clássica comm desempenho moderno. ",
        engine: "4.0L V8",
        hp: 500,
        speed: 280,
        features: ["Couro", "GPS", "Câmbio Automatico"],
        isAvailable: true,

    },

    {
        id: "rolls-royce-ghost-2023",
        name: "Rolls Royce Ghost",
        brand: "Rolls-Royce",
        model: "Ghost",
        price: 5500000,
        year: 2023,
        km: 2000,
        image: "https://images.unsplash.com/photo-1632548260498-b7246fa466ea?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "O Rolls-Royce Ghost é um sedã de luxo que equilibra design elegante e desempenho refinado, focado em proporcionar uma experiência de condução suave e luxuosa. Ele foi projetado para um público que prefere dirigir o próprio carro, em vez de ser conduzido.  ",
        engine: "6.75L Twin-Turbo V12",
        hp: 571,
        speed: 250,
        features: ["Interior de Luxo", "Desempenho e Engenharia", "Motor V3 6.75L Twin-Turbo"],
        isAvailable: true,

    },

    {
        id: "bentley-bentayga-speed-2022",
        name: "Bentley Bentayga Speed",
        brand: "Bentley",
        model: "Bentayga Speed",
        price: 5500000,
        year: 2022,
        km: 2500,
        image: "https://cdn.pixabay.com/photo/2017/01/15/17/43/i-volanda-1982228_1280.jpg",
        description: "O Bentley Bentayga Speed é um SUV de luxo de alta performance, conhecido por ser um dos SUVs mais rápidos do mundo. Ele combina o luxo e o conforto característicos da Bentley com um desempenho excepcional de carro esporte.  ",
        engine: "6.0L Twin-Turbo V12",
        hp: 635,
        speed: 301,
        features: ["Potência", "Aceleração", "Foco"],
        isAvailable: true,

    },

    
    {
        id: "mclaren-720s-2021",
        name: "McLaren 720S",
        brand: "McLaren",
        model: "720S",
        price: 3200000,
        year: 2021,
        km: 3000,
        image: "https://cdn.pixabay.com/photo/2019/05/23/02/21/mclaren-4223024_1280.jpg",
        description: "O McLaren 720S é um supercarro de alto desempenho focado em proporcionar o máximo envolvimento do motorista, combinando um design aerodinâmico e leve com um motor V8 biturbo extremamente potente. ",
        engine: "3.8L Twin-Turbo V8",
        hp: 710,
        speed: 341,
        features: ["Design Aerodinâmico e Leve", "Motorização Potente", "Desempenho de Supercarro", "Potência e Torque"],
        isAvailable: true,

    },

     {
        id: "aston-martin-db11-2022",
        name: "Aston Martin DB11",
        brand: "Aston Martin",
        model: "DB11",
        price: 1950000,
        year: 2022,
        km: 3500,
        image: "https://cdn.pixabay.com/photo/2017/11/25/23/41/aston-martin-db11-2977862_1280.jpg",
        description: " O Aston Martin DB11 é um carro super luxuoso de grande turismo (Grand Tourer) que combina elegância, desempenho potente e tecnologia avançada. Ele foi produzido nas variantes coupé e conversível (Volante), com opções de motores V8 e V12. ",
        engine: "5.2L V12",
        hp: 630,
        speed: 305,
        features: ["Motorização", "V8 de 4.0 litros", "Condução Dinâmica", "Interior e Tecnologia"],
        isAvailable: true,

    },

    {
        id: "tesla-model-s-plaid-2023",
        name: "Tesla Model S Plaid",
        brand: "Tesla",
        model: "Model S Plaid",
        price: 1300000,
        year: 2023,
        km: 500,
        image: "https://cdn.pixabay.com/photo/2019/07/13/22/03/its-4335837_1280.jpg",
        description: "O Tesla Model S Plaid é um sedã elétrico de luxo conhecido por seu desempenho extremo, sendo um dos carros de produção mais rápidos do mundo. Ele combina tecnologia avançada, um interior premium e uma motorização elétrica trimotor para entregar uma experiência de condução sem igual.  ",
        engine: "Elétrico Trimotor",
        hp: 1020,
        speed: 322,
        features: ["Aceleração Feroz:", "Autonomia", "Tecnologia de Bateria", "Potência Absurda"],
        isAvailable: true,

    },
];