/**     CRIANDO ARRAYS
 * 
 *      []  -   ARRAY LITERALS  -   método mais comum e direto de criar um array: envolver s elementos do array entre colchetes [].
 *      ... -   SPREAD OPERATOR -   pode ser usado para criar um array, de modo a incluir os elementos de um array dentro de um literal de array.
 *                                  é uma maneira conveniente de criar uma cópia (rasa) de um array.
 *                                      isso significa que alterações em copy não afetam original.
 */
// Array Literals []
let arrayLiteral = [1, 2, 3, 4, 5];
console.log(arrayLiteral); // Saída: [1, 2, 3, 4, 5]

// Spread Operator ...
let arrayOriginal = [1, 2, 3];
let arraySpread = [...arrayOriginal, 4, 5];
console.log(arraySpread); // Saída: [1, 2, 3, 4, 5]

let ab = [1, 2, 3];
let bc = [0, ...ab, 4];
console.log(bc); // output = [ 0, 1, 2, 3, 4 ]

    // Spread Operator ... COMO COPIA RASA
    let original = [1, 2, 3];
    let copy = [...original];
    copy[0] = 0; // Modificar a cópia não altera o original
    original[0] // => 1
    console.log(copy); // output = [ 0, 2, 3 ]
    console.log(original); // output = [ 1, 2, 3 ]

