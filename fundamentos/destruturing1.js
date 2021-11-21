// Novo recurso do ES2015
const pessoa = {
    nome: 'Joca',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 10
    }
}

const { nome, idade } = pessoa
console.log(nome, idade);

const { nome: n, idade: i } = pessoa
console.log(n, i);

// undefined
const { sobrenome, etnia = true } = pessoa
console.log(sobrenome, etnia);

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep);