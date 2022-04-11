// Função que retorna objeto

const prod1 = {
    nome: 'Controle',
    preco: 45
}

const prod2 = {
    nome: 'TV',
    preco: 2200
}

// Factory simples

function criarProduto() {
    return {
        nome: 'Mesa',
        preco: 650
    }
}

console.log(criarProduto());