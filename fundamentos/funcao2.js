// Armazenar função em uma variável

const imprimirSoma = function(a, b) {
    console.log(a + b);
};

imprimirSoma(3, 7);

// Armazenar uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}
console.log(soma(3, 4));

// Retorno implícito 
const subtracao = (a, b) => a - b;
console.log(subtracao(4, 1));

const print = a => console.log(a);

print('JavaScript')