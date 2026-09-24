const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    const produtos = [
        {
            id: 1,
            nome: 'iPhone 20 Pro Max',
            marca: 'Semsunga',
            preco: 67000.00,
            categoria: 'Eletrônicos',
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGthFWHovq7zzOW6ZQFN9WTvreBHIbQGFDg4BC6rvkGA&s=10',
            Estoque: true
        },
        {
            id: 2,
            nome: 'PC gaymer sem turbo',
            marca: 'negativo',
            preco: 8500.00,
            categoria: 'Informática',
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyd5eyUMHp9hcKETWiPlA8YShDEFN14AHe6pYDXM2og&s=10',
            Estoque: true
        },
        {
            id: 3,
            nome: 'Fone Bluetooth',
            marca: 'inSonya',
            preco: 1200.00,
            categoria: 'Áudio',
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ090ecU0z6XADx6sNQV3OQsZfYAScSUwZPmp0Gy1oUkg&s=10',
            Estoque: false
        },
        {
            id: 4,
            nome: 'Smartwatch',
            marca: 'Maçã',
            preco: 2500.00,
            categoria: 'Acessórios',
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVv_BpgAiZMLiTW92HVy3LOtiCd_Ep1ExBtOQXyu62Q&s=10',
            Estoque: true
        }
    ];

    res.json(produtos);
});

app.listen(3000, () => console.log('Servidor local rodando na porta 3000'));