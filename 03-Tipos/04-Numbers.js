/**     NUMBERS 
 * 
 *  Any number (without quotes) or 
 *      an expression that evaluates to a number (for example 1+1) to a variable or constant.    
 * 
 *  Number, é usado para representar números inteiros e aproximar números reais.
 */

let number1 = 123;
console.log(number1); // output = 123

// FLOAT número com "ponto flutuante"
let number2 = 12.32;
console.log(number2); // output = 12.32

// não reconhece o zero depois do ponto. EXEMPLO: 12.30 ---> output - 12.3
let number3 = 12.30; 
console.log(number3); // output = 12.3

//USA-SE OS OPERADORES PARA FAZER CONTAS COM OS NÚMEROS
console.log(number2 + number1); // output = 135.32

/* '.toString()'
        Os números podem ser convertidos para string utilizando-se a função '.toString()'
        Nesse caso, os valores da variável continuam sendo números.
            Porém, temporáriamente, esse número é convertido para uma string
            Não por acaso, ao testar com 'typeof', continuaremos a ver a variável como um número
*/
console.log(number1.toString() + number2) // output = 12312.32 => a conta não foi realizada => o que se fez foi a CONCATENAÇÃO de 123 + 12.32
console.log(typeof number1) // output = number

// Para tornar um NÚMERO UMA STRING de modo definitivo, basta fazer a operação abaixo
// ATENÇÃO !!!! Só é possível fazer isso com let e var, NUNCA COM CONST
number1 = number1.toString();
console.log(typeof number1) // output = string


// '.toString(2)' pode ser usado para representação binária do número
console.log(number2.toString(2)) // output = 1100.01010001111010111000010100011110101110000101001


/* '.toFixed()' 
    Para arredondar os números depois do ponto.
        Entre parenteses, vou colocar quantas casas depois do ponto eu quero que considere.
*/
let number4 = 10.5689722656;
console.log(number4.toFixed(2)) // output = 10.57
console.log(number4.toFixed(4)) // output = 10.5690


// 'Number.isInteger()' para saber se o número é um número inteiro ==> retorna TRUE ou FALSE
let number5 = 10;
let number6 = 52.9;
console.log(Number.isInteger(number5)); // output = true 
console.log(Number.isInteger(number6)); // output = false


// 'Number.isNaN()' - Is 'x' the NaN value?  ==> retorna TRUE (se for um NaN) ou FALSE (se não for um NaN)
let x = number6 * 'olá';
console.log(x) // output = NaN
console.log(Number.isNaN(x)) // output = true


// Veja o seguinte PROBLEMA
let num1 = 0.7;
let num2 = 0.1;
console.log(num1 + num2) // output = 0.7999999999999999

num1 += num2; // num1 = num1 + num2
console.log(num1) // output = 0.7999999999999999
num1 += num2; // num1 = num1 + num2
console.log(num1) // output = 0.8999999999999999
num1 += num2; // num1 = num1 + num2
console.log(num1) // output = 0.9999999999999999

// Para corrigir esse problema, poderiamos utilizar o '.toFixed()' 
// Porém, ao questionarmos se esse é um número inteiro 'Number.isInteger()', veremos que não é
// ==>         num1 = num1.toFixed(2);
console.log(num1) // output = 1.00
console.log(Number.isInteger(num1)); // output = false

// Para resolver, o correto é usar o 'parseFloat()' ou Number
// ==>         num1 = parseFloat(num1.toFixed(2));
console.log(num1) // output = 1
console.log(Number.isInteger(num1)); // output = true

// ==>      num1 = Number(num1.toFixed(2));
console.log(num1) // output = 1
console.log(Number.isInteger(num1)); // output = true