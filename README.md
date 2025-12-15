# LuxCars - Plataforma de Carros de Luxo

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)](https://reactjs.org/) 
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.3-blue?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) 
[![Vite](https://img.shields.io/badge/Vite-4.4.9-purple?logo=vite&logoColor=white)](https://vitejs.dev/) 
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)

---

## Sobre o Projeto
LuxCars é uma plataforma que conecta entusiastas a carros de luxo exclusivos, oferecendo uma experiência completa de navegação, visualização e compra. Com catálogo curado, avaliação profissional de cada veículo, financiamento facilitado, atendimento personalizado e suporte pós-venda.

 Clique aqui: (https://richard-moura.github.io/ecommerce-luxury-cars/)

**Missão:**  
Proporcionar acesso aos automóveis mais refinados com segurança, transparência e excelência no atendimento.

---

## Funcionalidades
- **Navbar fixa** com links para Início, Carros, Sobre Nós e Contato
- **Home** com catálogo de carros (`CardCar`)
- **Detalhes do carro** (CarDetails) com informações completas:
  - Marca, modelo, ano, quilometragem
  - Motor, potência, velocidade máxima
  - Descrição e lista de recursos (features)
- **Checkout funcional**:
  - Formulário de dados pessoais e do cartão
  - Simulação de processamento de compra
  - Número de pedido gerado automaticamente
  - Resumo do pedido e total
- **Página de contato** com formulário de envio de mensagens
- Navegação dinâmica usando **React Router**
- Estilização responsiva com **Tailwind CSS**
- Ícones interativos com **Lucide React**

---

## Estrutura de Dados (`cars.ts`)

Todos os carros seguem a interface `Car`:

```ts
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
