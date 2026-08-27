# 🧠 Projeto Psicologia — Rayane Viana

<p align="center">
  <strong>Site institucional desenvolvido com HTML, CSS, JavaScript, Bootstrap, Node.js e Express.</strong>
</p>

<p align="center">
  <a href="https://kananda09.github.io/ProjetoPsicologia/">
    🌐 Acessar o projeto
  </a>
</p>

---

## 📌 Sobre o Projeto

O **Projeto Psicologia — Rayane Viana** é um site institucional desenvolvido para apresentar os serviços, informações profissionais, abordagem de atendimento e formas de contato de uma psicóloga.

O projeto foi desenvolvido com tecnologias de **Front-end** e **Back-end**, utilizando Node.js e Express para disponibilizar as páginas da aplicação em ambiente local.

O projeto também utiliza **GitHub Actions** para realizar o deploy automático do Front-end no **GitHub Pages**.

---

## 🚀 Tecnologias Utilizadas

### 💻 Front-end

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

### ⚙️ Back-end

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

### 🔧 Versionamento e Deploy

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

---

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

Página inicial com apresentação da psicóloga e destaque dos principais serviços oferecidos.

👩‍⚕️ Sobre

Apresenta informações profissionais, formação, especializações e abordagem terapêutica.

🤝 Quem Somos

Apresenta a missão, os valores e a proposta de atendimento.

💼 Serviços

Apresenta os serviços terapêuticos oferecidos:

Terapia Individual
Terapia de Casal
Terapia Familiar
Pacotes Especiais
Atendimento Online
📞 Contato

Página destinada ao contato e agendamento, contendo formulário e informações de atendimento.

⚙️ Back-end com Node.js e Express

O projeto utiliza Node.js e Express para disponibilizar o Front-end através de um servidor local.

O servidor utiliza a porta:
http://localhost:5000

Rotas disponíveis
/
 /sobre
 /quem-somos
 /servicos
 /contato

O Express também é responsável por servir os arquivos estáticos presentes na pasta Frontend.

▶️ Como Executar o Projeto
1. Clone o repositório
git clone https://github.com/kananda09/ProjetoPsicologia.git

2. Acesse a pasta do projeto
cd ProjetoPsicologia

3. Acesse o Back-end
cd Backend/Node

4. Instale as dependências
npm install

5. Inicie o servidor
node server.js
O servidor será iniciado em:
http://localhost:5000


🌐 Deploy

O Front-end está publicado através do GitHub Pages.

🔗 Projeto online

https://kananda09.github.io/ProjetoPsicologia/


🔄 GitHub Actions

O projeto utiliza GitHub Actions para automatizar o deploy do Front-end.

Sempre que uma alteração é enviada para a branch main, o workflow realiza o processo de publicação no GitHub Pages.

O workflow está localizado em:

.github/workflows/deploy.yml


🔐 Organização do Projeto

O projeto foi organizado separando as responsabilidades entre Front-end e Back-end:

Frontend → páginas, estilos e imagens

Backend/Node → servidor Node.js + Express

.github/workflows → automação do deploy

.gitignore → arquivos que não devem ser enviados ao Git

README.md → documentação do projeto


📚 Objetivo Acadêmico

Projeto desenvolvido como atividade acadêmica da disciplina de Front-end II, com o objetivo de aplicar conhecimentos de desenvolvimento web, organização de projetos, utilização de bibliotecas, Node.js, Express, Git, GitHub e GitHub Actions.


👩‍💻 Desenvolvedora

Ivanahi Kananda

Estudante de Sistemas de Informação.

<p align="center"> ⭐ Projeto desenvolvido para fins acadêmicos e de portfólio. </p> ```