// => Variables [Type Annotation]
let nome: string = "Nicolas";
console.log(nome);


// => Arrays [Type Annotation]
let animais: string[] = ["Elefante", "Cachorro", "Gato", "Panda", "Girafa"];
console.log(animais);


// => Objects [Type Annotation]
let carro: {
    nome: string,
    ano: number,
    preco: number
};

carro = {nome: "Toyota Yaris Sedan XS", ano: 2019, preco: 80000},
console.log(carro);


// => Functions [Type Annotation]
function multiplicarNumero(num1: number, num2: number){
    return num1 * num2;
};

console.log(multiplicarNumero(23,3));