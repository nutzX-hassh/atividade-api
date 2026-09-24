async function carregarDados() {
    const url = 'http://localhost:3000/';

    try {
        const resposta = await fetch(url);
        const produtos = await resposta.json();

        const areaProdutos = document.getElementById('lista-produtos');
        areaProdutos.innerHTML = ''; // Limpa a área antes de colocar os produtos

        produtos.forEach(produto => {
            areaProdutos.innerHTML += `
                <div class="card">
                    <img src="${produto.imagem}" alt="${produto.nome}" class="card-img">
                    <div class="card-conteudo">
                        <span class="categoria">${produto.categoria}</span>
                        <h2>${produto.nome}</h2>
                        <p class="marca">Marca: <strong>${produto.marca}</strong></p>
                        <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
                        <p class="estoque ${produto.Estoque ? 'disponivel' : 'indisponivel'}">
                            ${produto.Estoque ? '✓ Em estoque' : '✕ Indisponível'}
                        </p>
                    </div>
                </div>
            `;
        });
    } catch (erro) {
        console.error('Erro ao carregar dados dos produtos:', erro);
    }
}

carregarDados();