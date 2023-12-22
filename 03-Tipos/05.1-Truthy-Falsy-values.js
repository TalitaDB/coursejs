/**     Truthy e Falsy Values
 * 
 *  Sempre que o JS espera um valor booleano, 
 *      e.g. contextos onde o JS precisa avaliar uma expressão como verdadeira ou falsa, 
 *      como em estruturas condicionais, operadores lógicos e algumas funções que esperam um valor booleano como argumento,
 *      valores não booleanos serão forçados a serem verdadeiros (truthy) ou falsos (falsy).
 * 
 *      TRUTHY  -   Valores que são tratados como verdadeiros quando convertidos para booleanos.
 *                  Exemplos: Qualquer valor que não seja falsy.
 * 
 *      FALSY   -   Valores que são tratados como falso quando convertidos para booleanos. 
 *                  Exemplos:
 *                      false                O valor booleano false é, obviamente, avaliado como falso.
                        null / undefined     O valor nulo e indefinido são tratados como falsos em contextos booleanos.
                        0 / -0,              O número zero, quando usado em contextos booleanos, é considerado falso.
                        NaN                  Not a Number (Não é um Número) é tratado como falso.
                        "" '' ``             (String vazia): Uma string vazia é avaliada como falsa.
 */
// false
if (false) {
    console.log('Esta mensagem não será exibida');
  }
  
// null / undefined
let valorNulo = null;
let valorIndefinido;

if (valorNulo === null) {
  console.log('Este bloco não será executado com um valor nulo');
}

if (valorIndefinido === undefined) {
  console.log('Este bloco não será executado com um valor indefinido');
}

// 0 / -0
let numeroZero = 0;
let numeroNegativoZero = -0;

if (numeroZero === 0) {
  console.log('Este bloco não será executado com 0');
}

if (1 / numeroNegativoZero === -Infinity) {
  console.log('Este bloco não será executado com -0');
}

// NaN
let resultadoNaN = 'Texto' / 2;

if (isNaN(resultadoNaN)) {
  console.log('Este bloco será executado com um valor NaN');
}

// String vazia
let stringVazia = '';

if (stringVazia === '') {
  console.log('Este bloco será executado com uma string vazia');
}
