const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    const produtos = [
        {
            id: 1,
            nome: 'Iphone 20 pro max',
            marca: 'Semsunga',
            preco: 67000.00,
            categoria: 'Eletrônicos',
            Estoque: true
        },
        {
            id: 2,
            nome: 'Notebook Gamers Supreme',
            marca: 'Dellta',
            preco: 12500.50,
            categoria: 'Informática',
            Estoque: true
        },
        {
            id: 3,
            nome: 'Fone de Ouvido Sem Fio',
            marca: 'Soni',
            preco: 899.90,
            categoria: 'Acessórios',
            Estoque: false
        },
        {
            id: 4,
            nome: 'Smart TV 8K 75"',
            marca: 'Elijê',
            preco: 8400.00,
            categoria: 'Eletrônicos',
            Estoque: true
        }
    ];

    res.json(produtos);
});

app.listen(3000, () => {
    console.log('server on door 3000');
});