const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

const frontendPath = path.join(__dirname, '..', '..', 'Frontend');

// Servir arquivos estáticos
app.use(express.static(frontendPath));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// Rota /sobre
app.get('/sobre', (req, res) => {
    res.sendFile(path.join(frontendPath, 'sobre.html'));
});

// Quem Somos
app.get('/quem-somos', (req, res) => {
    res.sendFile(path.join(frontendPath, 'quem-somos.html'));
});

// Serviços
app.get('/servicos', (req, res) => {
    res.sendFile(path.join(frontendPath, 'servicos.html'));
});

// Contato
app.get('/contato', (req, res) => {
    res.sendFile(path.join(frontendPath, 'contato.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});