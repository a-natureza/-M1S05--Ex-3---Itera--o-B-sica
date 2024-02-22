// Requerendo a biblioteca prompt-sync
const prompt = require('prompt-sync')({sigint: true});

// Criando o array numeros inicialmente vazio
let numeros = [];

// Solicitando ao usuário para inserir cinco números
console.log("Por favor, insira 5 números inteiros.");

for (let i = 0; i < 5; i++) {
    let numero = prompt(`Número ${i + 1}: `);
    // Convertendo a entrada para inteiro e adicionando ao array
    numeros.push(parseInt(numero, 10));
}

// Utilizando um loop for para imprimir cada número do array no console
console.log("Os números inseridos são:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
