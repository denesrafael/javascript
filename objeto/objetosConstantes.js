// pessoa -> 0x00 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'

console.log(pessoa)

// tenta atribuir a constante a um novo objeto
// irá retornar um erro
//pessoa = { nome: 'Ana' }

// Congela o objeto para alterações
Object.freeze(pessoa)

pessoa.nome = 'Maria'
delete pessoa.nome

console.log(pessoa.nome)
