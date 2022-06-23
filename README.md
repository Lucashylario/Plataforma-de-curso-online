- Vídeo pause: 32min GraphCMS config

## 📲 Aplicação: **Plataforma de curso online**
## 📚 Evento: Ignite Lab | Especialização em ReactJS
## 🚀 Rocketseat
## ✒️ Layout: `https://www.figma.com/community/file/1120711251998877938`

## 🛠 Ferramentas: 
- Vite
----------
- ReactJS (TypeScript)
----------
- TailwindCSS
-  Install: 
-      `npm i tailwindcss postcss autoprefixer -D`; 
-       `npx tailwindcss init -p`;
-  Abrir **tailwind.config.js** e add dentro de "content: []": `['./src/**/*.tsx']` ou `['./src/**/*.jsx']`;
----------
- GraphQL
----------
- GraphCMS - Fornecerá dos dados para a aplicação.
----------
- Apollo
-  Intall + GraphQL: `npm i @apollo/client graphql`
----------
- Date FNS (Para formatar data e hora / Liberar curso após atingir data e hora programados no GraphCMS)
-   Install: `npm i date-fns`
-   Link: `https://date-fns.org/`
 
 ## 📲 Acessar pasta da aplicação: `cd .\event-platform\`;
 ## ⚙️ Instalar dependêcias: `npm install`; **Obrigatório caso faça o download da aplicação, para que ela funcione no start**
 ## ☑️ Start aplication: `npm run dev`;

## Time content vídeo:
**Aula 1**
- React install (Vite) - 13min
- Install and config Tailwindcss - 22:30 min
- Extension install vs code - 26:25 min
- GraphCMS introduction - 32min 
- GraphCMS created new field - 41:16 min
- GraphCMS clone project - 44min
- GraphCMS add Teacher and Aula - 46:55 min
- GraphCMS config API - 57:35 min
- Importando API para o React com Apollo- 58:28 min
- Install Apollo - 01:00:30 hr
- Configuração do Apollo - 01:01:19 hr
- Fazendo requisição da api para a o React - 01:01:36 hr

**Aula 2**
- Criação dos components - 10:15 min
- Importar fontes no Tailwind - 24:15 min
- Criação do sidebar (Barra lateral) - 28:25 min 
- Instal Phosphor icons - 46:25 min
- Propriedades react (interface - typescript) - 49:25 min
- Importar aulas do GraphCMS para a aplicação - 55:40 min
- Install biblioteca para verificar a data e hr definida para liberar aula - 01:01:25 hrs
- Formatar data - 01:04:08 hrs

**Aula 3**
- Iniciando component do vídeo - 06:38 min
- Install biblioteca VIMEJS para reproduzir o vídeo - 30:18 min
- Implementando VimeJS no projeto - 32:46 min
- Install e confg.  React router dom - 37:44 min
- Configurando cards de aulas para redirecionar rota para o endereço especifico da aula- 42:30 min
- Importando dados do GraphCMS para o component video - 57:36