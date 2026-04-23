const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'Frontend')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'index.html'));
});

// Rota /sobre
app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'sobre.html'));
});

// Quem Somos
app.get('/quem-somos', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'quem-somos.html'));
});

// Serviços
app.get('/servicos', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'servicos.html'));
});

// Contato
app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'contato.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});