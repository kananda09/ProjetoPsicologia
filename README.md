# 🧠 Projeto Psicologia — Rayane Viana

Site institucional desenvolvido para a psicóloga Rayane Viana, com o objetivo de apresentar seus serviços, informações profissionais e formas de contato.

## 📌 Sobre o Projeto

O projeto consiste em um site institucional responsivo para uma psicóloga, contendo páginas informativas sobre a profissional, seus serviços, sua abordagem e formas de contato.

O projeto foi desenvolvido utilizando tecnologias de Front-end e Back-end, com Node.js e Express para execução do site em ambiente local.

## 🚀 Tecnologias Utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.3
- Bootstrap Icons
- Google Fonts

### Back-end

- Node.js
- Express.js

### Versionamento e Deploy

- Git
- GitHub
- GitHub Actions
- GitHub Pages

## 📂 Estrutura do Projeto

```text
ProjetoPsicologia/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── Backend/
│   └── Node/
│       ├── package-lock.json
│       ├── package.json
│       └── server.js
│
├── Frontend/
│   ├── Img/
│   ├── contato.html
│   ├── index.html
│   ├── quem-somos.html
│   ├── servicos.html
│   ├── sobre.html
│   └── styles.css
│
├── .gitignore
└── README.md

📄 Páginas do Site
🏠 Home

Página inicial do site, apresentando a psicóloga e os principais serviços oferecidos.

👩‍⚕️ Sobre

Apresenta informações sobre Rayane Viana, sua formação, especializações e abordagem profissional.

🤝 Quem Somos

Apresenta a missão, os valores e a proposta de atendimento da profissional.

💼 Serviços

Apresenta os serviços terapêuticos oferecidos:

Terapia Individual
Terapia de Casal
Terapia Familiar
Pacotes Especiais
Atendimento Online
📞 Contato

Página destinada ao contato e agendamento de consultas, contendo formulário e informações de atendimento.

⚙️ Funcionamento do Back-end

O projeto utiliza Node.js com Express para servir os arquivos do Front-end.

O servidor está configurado para utilizar a porta:

http://localhost:5000
Rotas disponíveis
/
 /sobre
 /quem-somos
 /servicos
 /contato

O Express também disponibiliza os arquivos estáticos presentes na pasta Frontend.

▶️ Como Executar o Projeto
1. Clonar o repositório
git clone https://github.com/kananda09/ProjetoPsicologia.git
2. Entrar na pasta do projeto
cd ProjetoPsicologia
3. Entrar na pasta do Back-end
cd Backend/Node
4. Instalar as dependências
npm install
5. Iniciar o servidor
node server.js

Depois, acesse:

http://localhost:5000

🌐 Deploy

O Front-end do projeto está publicado utilizando o GitHub Pages.

🔗 https://kananda09.github.io/ProjetoPsicologia/

🔄 GitHub Actions

O projeto utiliza GitHub Actions para realizar automaticamente o deploy do Front-end no GitHub Pages sempre que houver alterações na branch main.

O workflow está localizado em:

.github/workflows/deploy.yml

📚 Objetivo Acadêmico

Projeto desenvolvido como atividade acadêmica da disciplina de Front-end II, com o objetivo de aplicar conhecimentos de desenvolvimento web, organização de projetos, utilização de bibliotecas, Node.js, Express, Git e GitHub.

👩‍💻 Desenvolvedora

Ivanahi Kananda

Estudante de Sistemas de Informação.

⭐ Projeto desenvolvido para fins acadêmicos.