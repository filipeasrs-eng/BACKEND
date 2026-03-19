const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// LOGIN
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        return res.json({ token: "fake-jwt-token" });
    }

    res.status(400).json({ error: "Dados inválidos" });
});

// AGENDAMENTO
app.post('/agendamento', (req, res) => {
    const { data, horario } = req.body;

    res.json({
        message: "Consulta agendada",
        data,
        horario
    });
});

// CEP
app.get('/cep/:cep', async (req, res) => {
    const cep = req.params.cep;

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    res.json(data);
});

app.listen(3000, () => {
    console.log("Servidor rodando");
});
