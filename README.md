# 🌦️ VanguardIA Weather User System - Desafio Técnico

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14.1.0-000000?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5.3.3-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Prisma-5.9.1-2D3748?style=for-the-badge&logo=prisma" alt="Prisma">
  <img src="https://img.shields.io/badge/PostgreSQL-16.2-4169E1?style=for-the-badge&logo=postgresql" alt="PostgreSQL">
</div>

## 🔍 Visão Geral do Projeto
Sistema web completo que integra:
- Cadastro de usuários com validação em tempo real
- Consulta meteorológica instantânea via WeatherAPI
- Armazenamento persistente em banco relacional
- Interface responsiva e intuitiva

🚀 **Demo Online:** [Acesse Aqui](https://desafio-vanguard-ia.vercel.app/)  
📹 **Vídeo Explicativo:** [Assistir Demonstração](https://drive.google.com/...) *(link atualizar)*

![Screenshot da Aplicação](public/screenshot.png) <!-- Adicione uma imagem real se disponível -->

## 🛠 Stack Tecnológica Completa

### Core Architecture
| Camada          | Tecnologias                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| **Frontend**    | Next.js 14 (App Router), React 18, CSS Modules                              |
| **Backend**     | Next.js API Routes, Axios, Zod                                              |
| **Database**    | PostgreSQL, Prisma ORM 5.9.1                                                |
| **Validação**   | React Hook Form 7, Zod Schema Validation                                    |
| **Infra**       | Vercel (Deploy), Railway (PostgreSQL), Environment Variables                |

### Principais Dependências
```json
"dependencies": {
  "next": "14.1.0",
  "prisma": "^5.9.1",
  "@prisma/client": "^5.9.1",
  "axios": "^1.6.2",
  "zod": "^3.22.4",
  "react-hook-form": "^7.49.3"
}
⚡ Funcionalidades Detalhadas
Formulário Inteligente
Validação em tempo real de e-mail

Autocomplete de cidades (via API)

Estados de loading/error/success

Persistência local dos dados

Integração Meteorológica
typescript
// lib/weather.ts
export const fetchWeatherData = async (city: string) => {
  const { data } = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`
  );
  
  return {
    temperature: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon
  };
};
Fluxo Completo de Dados
Usuário preenche formulário

Validação client-side com Zod

Chamada API para /api/submit

Consulta WeatherAPI

Transaction no PostgreSQL via Prisma

Retorno com feedback visual

🛠️ Configuração Detalhada
Requisitos Mínimos
Node.js 18.17+

PostgreSQL 15+

Conta na WeatherAPI

Setup Local Passo-a-Passo
Clone o repositório:

bash
git clone https://github.com/DaniloSantos284/desafio-vanguardIA.git
cd desafio-vanguardIA
Instale dependências:

bash
npm install
Configure ambiente:

bash
cp .env.example .env.local
# Preencha com suas credenciais
Banco de dados:

bash
npx prisma generate
npx prisma migrate dev --name init
Inicie a aplicação:

bash
npm run dev
🗃️ Estrutura do Projeto
src/
├── app/
│   ├── api/
│   │   └── submit/
│   │       └── route.ts       # Endpoint de submissão
│   └── page.tsx               # Página principal
├── components/
│   ├── FeedbackModal.tsx      # Modal de notificação
│   └── Form.tsx               # Formulário controlado
├── lib/
│   ├── db.ts                  # Client do Prisma
│   └── weather.ts             # Serviço de clima
prisma/
└── schema.prisma              # Modelo de dados
📊 Modelagem de Dados com Prisma
prisma
model User {
  id          Int      @id @default(autoincrement())
  name        String   @db.VarChar(100)
  email       String   @unique @db.VarChar(255)
  city        String   @db.VarChar(50)
  temp_c      Float
  condition   String   @db.VarChar(50)
  created_at  DateTime @default(now()) @db.Timestamp(6)

  @@index([email], name: "User_email_key")
}
🔐 Gerenciamento de Ambiente
Variáveis Necessárias
env
DATABASE_URL="postgresql://user:password@host:port/db?schema=public"
WEATHER_API_KEY="sua_chave_api"
Política de Segurança
Variáveis sensíveis nunca commitadas

Validação de schema com Zod

Conexão SSL com banco de dados

Rate limiting básico na API

🚨 Tratamento de Erros
typescript
// app/api/submit/route.ts
try {
  // ... lógica principal
} catch (error) {
  console.error('Submission Error:', error);
  
  if (error instanceof ZodError) {
    return NextResponse.json(
      { error: 'Dados inválidos', details: error.flatten() },
      { status: 422 }
    );
  }
  
  return NextResponse.json(
    { error: 'Erro interno do servidor' },
    { status: 500 }
  );
}
📌 Melhorias Futuras
Implementação de testes E2E com Cypress

Cache de consultas meteorológicas

Design FrontEnd

Dashboard de visualização de dados

Autenticação JWT para API

📄 Licença
Este projeto está licenciado sob a MIT License - veja o arquivo detalhado.

Desenvolvido com ❤️ por Danilo Santos
📧 danilosantos284@gmail.com


Este README foi totalmente remodelado para:
1. Refletir fielmente a estrutura do repositório
2. Mostrar trechos reais de código da implementação
3. Detalhar especificidades técnicas da arquitetura
4. Incluir informações de configuração precisas
5. Adicionar elementos visuais relevantes
6. Manter consistência com as tecnologias utilizadas
New chat
