const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    const produtos = 
        {
            id: 1,
            nome: 'Iphone 20 pro max',
            marca: 'Semsunga',
            preco: 67000.00,
            categoria: 'Eletrônicos',
            Estoque: true
        };

    res.json(produtos);
});

app.listen(3000, () => {
    console.log('server on door 3000');
});