📌 Desafio Técnico — Vaga de CS Tech | VanguardIA
Aplicação desenvolvida para o processo seletivo da VanguardIA, com o objetivo de validar competências técnicas em integração de APIs, armazenamento de dados e uso de ferramentas modernas de desenvolvimento.

✅ Objetivo
Criar uma aplicação web utilizando Next.js com TypeScript que:

Recebe nome, e-mail e cidade via formulário;

Consulta a WeatherAPI para obter os dados climáticos da cidade informada;

Armazena todas as informações no banco de dados PostgreSQL.

🚀 Tecnologias Utilizadas
Ferramenta	Descrição
Next.js	Framework React fullstack
TypeScript	Superset do JavaScript com tipagem estática
PostgreSQL	Banco de dados relacional
Prisma ORM	ORM para integração com PostgreSQL
WeatherAPI	API pública para dados climáticos
Railway	Hospedagem do banco de dados

🖥️ Funcionalidades
 Formulário com campos:

Nome

E-mail

Cidade

 Integração com a WeatherAPI

 Armazenamento dos dados em PostgreSQL

 Rota /api/submit para processar e salvar os dados

 Uso de variáveis de ambiente com .env.local

🌤 Integração com WeatherAPI
Endpoint utilizado:

bash
Copiar
Editar
http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q={cidade}
Campos utilizados da resposta:

Campo	Descrição
current.temp_c	Temperatura em Celsius
current.condition.text	Descrição da condição climática
current.condition.icon	Ícone representativo do clima (opcional)

🗂️ Estrutura do Projeto <br>
graphql <br>
Copiar <br>
Editar <br>
/
├── pages/
│   ├── index.tsx           # Formulário principal
│   └── api/
│       └── submit.ts       # Rota para processar e salvar os dados
├── prisma/
│   └── schema.prisma       # Definição do banco de dados
├── lib/
│   └── weather.ts          # Função para integração com a API climática
├── .env.example            # Modelo para variáveis de ambiente
├── README.md               # Este arquivo
⚙️ Como Executar Localmente
1. Clone o repositório
bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
2. Instale as dependências
bash
Copiar
Editar
npm install
# ou
yarn
3. Configure o ambiente
Crie um arquivo .env.local com base no .env.example:

bash
Copiar
Editar
cp .env.example .env.local
4. Execute as migrações do banco
bash
Copiar
Editar
npx prisma migrate dev
5. Inicie o servidor de desenvolvimento
bash
Copiar
Editar
npm run dev
6. Acesse a aplicação
Abra no navegador:

arduino
Copiar
Editar
http://localhost:3000
🧪 Variáveis de Ambiente (.env.example)
env
Copiar
Editar
DATABASE_URL=postgresql://usuario:senha@host:porta/banco
WEATHER_API_KEY=sua-chave-da-weatherapi
📹 Vídeo Explicativo
🎥 Link do vídeo com a demonstração da aplicação, decisões técnicas e funcionamento:
[Em breve]

📬 Entrega
Você deve enviar:

✅ Repositório GitHub com:

Código-fonte completo

README.md

.env.example

✅ Link do vídeo explicativo (máx. 10 minutos)

Envie para:
📩 sucessodocliente@vanguardiaacademy.org
🕓 Prazo: Quinta-feira, até às 22:00.

Desenvolvido com 💻 por [Seu Nome] — Candidato à vaga CS Tech | VanguardIA

Se quiser, posso substituir [Seu Nome], o link do repositório e o do vídeo assim que tiver essas informações. Deseja isso agora?








Você disse:
Adicione: Danilo Santos tudo que cita o autor


O ChatGPT disse:
Perfeito! Aqui está o README.md atualizado com o nome Danilo Santos como autor do projeto:

📌 Desafio Técnico — Vaga de CS Tech | VanguardIA
Aplicação desenvolvida para o processo seletivo da VanguardIA, com o objetivo de validar competências técnicas em integração de APIs, armazenamento de dados e uso de ferramentas modernas de desenvolvimento.

✅ Objetivo
Criar uma aplicação web utilizando Next.js com TypeScript que:

Recebe nome, e-mail e cidade via formulário;

Consulta a WeatherAPI para obter os dados climáticos da cidade informada;

Armazena todas as informações no banco de dados PostgreSQL.

🚀 Tecnologias Utilizadas
Ferramenta	Descrição
Next.js	Framework React fullstack
TypeScript	Superset do JavaScript com tipagem estática
PostgreSQL	Banco de dados relacional
Prisma ORM	ORM para integração com PostgreSQL
WeatherAPI	API pública para dados climáticos
Railway	Hospedagem do banco de dados

🖥️ Funcionalidades
 Formulário com campos:

Nome

E-mail

Cidade

 Integração com a WeatherAPI

 Armazenamento dos dados em PostgreSQL

 Rota /api/submit para processar e salvar os dados

 Uso de variáveis de ambiente com .env.local

🌤 Integração com WeatherAPI
Endpoint utilizado:

bash
Copiar
Editar
http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q={cidade}
Campos utilizados da resposta:

Campo	Descrição
current.temp_c	Temperatura em Celsius
current.condition.text	Descrição da condição climática
current.condition.icon	Ícone representativo do clima (opcional)

🗂️ Estrutura do Projeto
graphql
Copiar
Editar
/
├── pages/
│   ├── index.tsx           # Formulário principal
│   └── api/
│       └── submit.ts       # Rota para processar e salvar os dados
├── prisma/
│   └── schema.prisma       # Definição do banco de dados
├── lib/
│   └── weather.ts          # Função para integração com a API climática
├── .env.example            # Modelo para variáveis de ambiente
├── README.md               # Este arquivo
⚙️ Como Executar Localmente
1. Clone o repositório
bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
2. Instale as dependências
bash
Copiar
Editar
npm install
# ou
yarn
3. Configure o ambiente
Crie um arquivo .env.local com base no .env.example:

bash
Copiar
Editar
cp .env.example .env.local
4. Execute as migrações do banco
bash
Copiar
Editar
npx prisma migrate dev
5. Inicie o servidor de desenvolvimento
bash
Copiar
Editar
npm run dev
6. Acesse a aplicação
Abra no navegador:

arduino
Copiar
Editar
http://localhost:3000
🧪 Variáveis de Ambiente (.env.example)
env
Copiar
Editar
DATABASE_URL=postgresql://usuario:senha@host:porta/banco
WEATHER_API_KEY=sua-chave-da-weatherapi
📹 Vídeo Explicativo
🎥 Link do vídeo com a demonstração da aplicação, decisões técnicas e funcionamento:
[Em breve]

📬 Entrega
Você deve enviar:

✅ Repositório GitHub com:

Código-fonte completo

README.md

.env.example

✅ Link do vídeo explicativo (máx. 10 minutos)

Envie para:
📩 sucessodocliente@vanguardiaacademy.org
🕓 Prazo: Quinta-feira, até às 22:00.

Desenvolvido com 💻 por Danilo Santos — Candidato à vaga CS Tech | VanguardIA
