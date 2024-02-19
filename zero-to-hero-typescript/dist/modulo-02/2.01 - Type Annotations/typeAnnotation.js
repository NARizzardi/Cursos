"use strict";
// => Variables [Type Annotation]
let nome = "Nicolas";
console.log(nome);
// => Arrays [Type Annotation]
let animais = ["Elefante", "Cachorro", "Gato", "Panda", "Girafa"];
console.log(animais);
// => Objects [Type Annotation]
let carro;
carro = { nome: "Toyota Yaris Sedan XS", ano: 2019, preco: 80000 },
    console.log(carro);
// => Functions [Type Annotation]
function multiplicarNumero(num1, num2) {
    return num1 * num2;
}
;
console.log(multiplicarNumero(23, 3));
