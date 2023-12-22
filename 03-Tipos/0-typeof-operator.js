/**     Operador typeof
 * 
 *  O operador unitario typeof é usado para descobrir/determinar o tipo de uma variável ou expressão em JS.
 *  VEJA O EXEMPLO
 */
let variavel1 = "Olá, mundo!";
let variavel2 = 42;

console.log(typeof variavel1); // Output: string
console.log(typeof variavel2); // Output: number

console.log(typeof variavel1 === "string"); // Output: true
console.log(typeof variavel2 === "number"); // Output: true

/**     Uso de parênteses após typeof
 * 
 *  O uso de parênteses após typeof é uma prática comum para garantir que a operação seja realizada corretamente.
 *  Isso é especialmente útil ao lidar com expressões que envolvem operações aritméticas ou de concatenação.
 */
const numeroQuatro = 4; // number --> numeroQuatro é uma variável que armazena o número 4.
const numeroCinco = '5'; // string --> numeroCinco é uma variável que armazena a string '5'.
    // verificação dos tipos
    console.log(typeof numeroQuatro); // Output: number
    console.log(typeof numeroCinco);  // Output: string

    // Quando utilizamos o operador + com um número e uma string, o JavaScript realiza a concatenação, convertendo temporariamente o número em uma string.  
    console.log(numeroQuatro + numeroCinco); // output = 45 - Concatenação do number 4 com a string 5

    //Uso de Parênteses com typeof: os parênteses são usados para garantir que a concatenação seja realizada antes de aplicar o typeof.
    console.log(typeof (numeroQuatro + numeroCinco)); // output = string --> numeroQuatro + numeroCinco resulta em "45" (uma string temporária pela concatenação), e typeof "45" retorna a string "string".
    
    // Sem os parênteses, o typeOf analisa o tipo da primeira variável e concatena ele com a variável seguinte.
    console.log(typeof numeroQuatro + numeroCinco); // output = number5 --> typeof numeroQuatro retorna "number", e ao ser concatenado com numeroCinco, a saída é a concatenação de "number" e "5", resultando em "number5".
    // Veja quando invertemos as variáveis
    console.log(typeof numeroCinco + numeroQuatro); // output: string4