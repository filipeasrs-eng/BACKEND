const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API funcionando');
});

app.post('/login', (req, res) => {
    res.json({ message: 'Login OK' });
});

app.listen(3000, () => {
    console.log('Rodando na porta 3000');
});
