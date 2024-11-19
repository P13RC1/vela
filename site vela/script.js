// Array para armazenar os produtos
const produtos = [
  { id: 1, nome: "Produto 1", preco: 100.0, imagem: "img/produto1.jpg" },
  { id: 2, nome: "Produto 2", preco: 200.0, imagem: "img/produto2.jpg" },
  { id: 3, nome: "Produto 3", preco: 300.0, imagem: "img/produto3.jpg" },
  { id: 4, nome: "Produto 4", preco: 300.0, imagem: "img/produto4.jpg" },
];

// Array para armazenar o carrinho de compras
let carrinho = [];

// Função para atualizar o carrinho
function atualizarCarrinho() {
  const carrinhoLista = document.getElementById('carrinho-lista');
  const totalCarrinho = document.getElementById('total-carrinho');
  
  carrinhoLista.innerHTML = '';
  totalCarrinho.textContent = `Total: R$ ${carrinho.reduce((acc, produto) => acc + produto.preco, 0).toFixed(2)}`;
  
  carrinho.forEach((produto) => {
    const item = document.createElement('li');
    item.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
    carrinhoLista.appendChild(item);
  });
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
  atualizarCarrinho();
  document.getElementById('carrinho').textContent = `Carrinho (${carrinho.length})`;
}

// Função para abrir o modal do carrinho
function abrirCarrinho() {
  document.getElementById('carrinho-modal').style.display = 'block';
}

// Função para fechar o modal do carrinho
function fecharCarrinho() {
  document.getElementById('carrinho-modal').style.display = 'none';
}

// Adicionar evento de clique aos botões de adicionar ao carrinho
document.querySelectorAll('.adicionar-carrinho').forEach((botao, index) => {
  botao.addEventListener('click', () => {
    adicionarAoCarrinho(produtos[index]);
  });
});

// Adicionar evento de clique ao botão de carrinho
document.getElementById('carrinho').addEventListener('click', abrirCarrinho);

// Adicionar evento de clique ao botão de fechar carrinho
document.getElementById('fechar-carrinho').addEventListener('click', fecharCarrinho);

// Inicializar o carrinho
atualizarCarrinho();




// Variável para armazenar o número de visitas
let visitas = localStorage.getItem('visitas') || 0;

// Função para atualizar o contador de visitas
function atualizarContadorVisitas() {
    visitas++;
    localStorage.setItem('visitas', visitas);
}

// Chamar a função ao carregar a página
window.onload = atualizarContadorVisitas;






