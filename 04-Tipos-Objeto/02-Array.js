/**         ARRAYS
 * 
 *  Arrays (ou vetores ou matrizes) são objetos especiais (são uma forma especializada de objeto JS).
 *  
 *  Um array é uma coleção ordenada de VALORES. 
 *  Um array (ou vetor) é uma estrutura de dados que permite armazenar vários VALORES em uma única variável.
 *   Cada valor é chamado de ELEMENTO, e cada elemento tem uma posição numérica no array, conhecida como ÍNDICE.
 *   O ÍNDICE começa do zero, ou seja, o primeiro elemento está no índice 0, o segundo no índice 1, e assim por diante. 
 * 
 *  RESUMINDO:
 *      Um array é uma estrutura de dados que permite armazenar uma coleção ordenada de elementos.
 *          Cada elemento do array pode ser acessado por meio de um índice ou uma chave.
 * 
 *      VALORES: dados reais atribuídos às variáveis. 
 *      ELEMENTO: nome dado a cada valor em um array.
 *      ÍNDICE: posição numérica de cada elemento no array, começando em zero.
 * 
 *  Os arrays em JS são SEM TIPO. 
 *      Um elemento de array pode ser de qualquer tipo. 
 *      Diferentes elementos do mesmo array podem ser de tipos diferentes; mas, geralmente, são do mesmo tipo.
 * 
 *  Os elementos de um array podem até mesmo ser objetos ou outros arrays.
 * 
 *  Os arrays em JS podem ser ESPARSOS: os elementos não precisam ter índices contínuos e podem haver lacunas.
 * 
 *  Todo array em JS possui uma propriedade de comprimento (LENGTH).  
 *      Para arrays não esparsos, a propriedade length especifica o número de elementos no array.
 *      Para arrays esparsos, o comprimento é maior que o índice mais alto de qualquer elemento.
 */
// Array básico com três elementos
let frutas = ['maçã', 'banana', 'laranja'];

// Acessando elementos por índice
let segundaFruta = frutas[1];
console.log(segundaFruta); // Saída: banana

// Array com diferentes tipos de elementos
let variedade = [42, 'texto', true, { chave: 'valor' }];

// Array esparso com lacuna entre índices
let arrayEsparsa = [];
arrayEsparsa[3] = 'elemento 3';
console.log(arrayEsparsa); // Saída: [ <3 empty items>, 'elemento 3' ]

// Usando a propriedade de comprimento
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.length); // Saída: 5
