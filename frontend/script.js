async function carregarDados(){

    const url = 'https://reimagined-spoon-xrv65w56r7p626rx-3000.app.github.dev/';

    try{
        const resposta = await fetch(url);

        const produto = await resposta.json();

        const areaProdutos = document.getElementById('lista-produtos');

        areaProdutos.innerHTML = `
     <div class="card">
        <h2 class="nome-produto">${produto.nome}</h2>
        <p class="categoria">Marca: ${produto.marca}</p>
        <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
        <p><strong>Estoque:</strong> ${produto.emEstoque ? 'Disponível' : 'insdisponível'}</p>
      </div>
    `;

    } catch(erro) {
        console.log('Erro ao carregar dados do produto:', erro);
    }
    

}
carregarDados();