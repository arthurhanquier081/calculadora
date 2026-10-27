const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/calcular', (req, res) => {
    const { num1, operacao, num2 } = req.body;
    let resultado;

    switch (operacao) {
        case '+': resultado = num1 + num2; break;
        case '-': resultado = num1 - num2; break;
        case '*': resultado = num1 * num2; break;
        case '/': 
            resultado = num2 === 0 ? "Erro: Divisão por zero!" : num1 / num2;
            break;
        default: resultado = "Operação inválida!";
    }

    res.json({ resultado });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend rodando em http://localhost:${PORT}`);
});