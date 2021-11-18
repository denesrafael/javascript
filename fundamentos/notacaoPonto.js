console.log(typeof console);

const obj1 = {};
obj1.nome = 'Computador';
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome;

    this.exec = function() {
        console.log('.exe');
    }
}

const obj2 = new Obj('Mesa');
const obj3 = new Obj('Cadeira');

console.log(obj2.nome);
console.log(obj3.nome);

obj3.exec();