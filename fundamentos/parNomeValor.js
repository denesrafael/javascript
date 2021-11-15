// par nome/valor
const saudacao = 'Olá'; // 1 contexto lexico

function exec() {
    const saudacao = 'E ae'; // 2 contexto lexico
    return saudacao;
}

const cliente = {
    nome: 'Denes',
    idade: 35,
    peso: 85,
    endereco: {
        logradouro: 'Rua 1',
        numero: 2
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);