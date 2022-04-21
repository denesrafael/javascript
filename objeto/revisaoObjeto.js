// Objeto é uma coleção dinâmica de pares chave/valor 

const produto = new Object
produto.nome = 'Mesa'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto['marca do produto']

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Rafael',
        idade: 36,
        endereco: {
            logradouro: 'Rua 2',
            numero: 96
        }
    },
    condutores: [{
        nome: 'Joca',
        idade: 18
    },
    {
        nome: 'Dede',
        idade: 37
    }], // Array de objetos
    calcularSeguro: function () { }
}

carro.proprietario.endereco.numero = 963
carro['proprietario']['endereco']['logradouro'] = 'Avenida 1'

//delete carro.condutores
console.log(carro.condutores.length)
console.log(carro);
