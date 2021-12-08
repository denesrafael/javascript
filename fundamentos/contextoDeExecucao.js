let a = 3;

global.b = 123;
this.c = 456;

console.log(this.a);
console.log(global.b); // em node, equivale a window
console.log(this.c);

// Em Node, cada arquivo é um módulo diferente, diferente da web, onde tudo está disputando no escopo global
console.log(module.exports.c); // equivale ao this (module.exports)
console.log(module.exports === this);
console.log(module.exports);