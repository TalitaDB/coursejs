/**     CRIANDO ARRAYS
 * 
 *      []  -       ARRAY LITERALS  -   método mais comum e direto de criar um array: envolver s elementos do array entre colchetes [].
 *      Array() -   ARRAY CONSTRUCTOR -  construtora pode ser chamada de três maneiras distintas: sem argumentos; com um único argumento; Especificando explicitamente dois ou mais elementos de array ou um único elemento não numérico para o array.                                            
 *      Array.of()          -       cria um novo array com os argumentos fornecidos, mesmo que o argumento seja um número.
 *      Array.from()        -       cria um novo array a partir de um objeto iterável (como uma string ou array-like object) ou de uma estrutura de mapa/função.
 *      ...     -   SPREAD OPERATOR -   pode ser usado para criar um array, de modo a incluir os elementos de um array dentro de um literal de array.
 *                                        é uma maneira conveniente de criar uma cópia (rasa) de um array.
 *                                      Isso significa que alterações em copy não afetam original.
 *      
 */

//  Array Literals []
let arrayLiteral = [1, 2, 3, 4, 5];
console.log(arrayLiteral); // Saída: [1, 2, 3, 4, 5]


/**     new Array() - Array Constructor 
 * 
 *  Outra forma simples de criar array, podendo ser invocado de três formas:
 *      1.   SEM ARGUMENTOS  -   cria um array vazio, sem elementos, sendo equivalente ao array literal [].
 *      2.   COM UM ÚNICO ARGUMENTO NUMÉRICO - cria um array com o comprimento especificado. 
 *                                             Nessa forma, pode-se pré-alocar um array quando souber antecipadamente quantos elementos serão necessários. 
 *                                             Note que nenhum valor é armazenado no array, e as propriedades de índice do array "0", "1" e assim por diante, nem mesmo são definidas para o array.
 *                                             Ou seja, essa forma cria um array com o comprimento especificado. Não são atribuídos valores aos elementos do array, e as propriedades de índice não são definidas. 
 *                                             Isso pode ser útil para alocar espaço para um número conhecido de elementos, sem atribuir valores específicos.
 *      3.  ESPECIFICANDO EXPLICITAMENTE DOIS OU MAIS ELEMENTOS - Neste caso, os argumentos fornecidos tornam-se os elementos do novo array. 
 *                                                                Isso é útil quando você deseja criar um array com valores específicos.
 */

        // Chamada sem argumentos
        let b = new Array(); // Esse método 
        console.log(b); // output = []

        // Com um único argumento numérico, que especifica um comprimento
        let c = new Array(10);
        console.log(c); // Saída: [ <10 empty items> ]

        // Especificação explícita de dois ou mais elementos de array ou de apenas um elemento não numérico para o array
        let d = new Array(5, 4, 3, 2, 1, "testing, testing");
        console.log(d); // Saída: [ 5, 4, 3, 2, 1, 'testing, testing' ]


/**         Array.of()
 * 
 *      Quando a função construtora Array() é invocada com um argumento numérico, ela usa esse argumento como um comprimento do array. 
 *      Mas quando invocada com mais de um argumento numérico, trata esses argumentos como elementos para o array a ser criado. 
 *      Isso significa que a função construtora Array() não pode ser usada para criar um array com um único elemento numérico. 
 * 
 *      A função Array.of() aborda esse problema: ela é um método de fábrica que cria e retorna um novo array, usando seus valores de argumento (independentemente de quantos existam) como os elementos do array.
 * 
 *      Os exemplos a seguir demonstram como o método Array.of() pode ser flexível em relação aos tipos de elementos e ao número de argumentos fornecidos, criando arrays com base nos valores passados para ele.
 */ 
        // Array vazio
        let emptyArray = Array.of();
        console.log(emptyArray); // Saída: []

        // Array com um único elemento
        let singleElementArray = Array.of("single");
        console.log(singleElementArray); // Saída: ['single']

        // Array com vários elementos
        let multipleElementsArray = Array.of(1, 2, "three", true);
        console.log(multipleElementsArray); // Saída: [1, 2, 'three', true]

        // Array com valores undefined e null:
        let undefinedNullArray = Array.of(undefined, null);
        console.log(undefinedNullArray); // Saída: [undefined, null]

        // Array com objetos como elementos:
        let objectArray = Array.of({ name: "John" }, { name: "Jane" });
        console.log(objectArray); // Saída: [ { name: 'John' }, { name: 'Jane' } ]

        // Array com valores numéricos:
        let numericArray = Array.of(5, 10, 15, 20);
        console.log(numericArray); // Saída: [5, 10, 15, 20]

/**         Array.from()
 * 
 *      Utilizado para criar um novo array a partir de um objeto iterável ou de um objeto semelhante a array.
 *      Também pode ser utilizado para criar uma cópia do array original.
 */         


// Spread Operator ...
    // Inclusão de Elementos de um Array: Você pode usar o operador de propagação para incluir os elementos de um array dentro de um novo array.
    let arrayOriginal = [1, 2, 3];
    let arraySpread = [...arrayOriginal, 4, 5];
    console.log(arraySpread); // Saída: [1, 2, 3, 4, 5]

    let ab = [1, 2, 3];
    let bc = [0, ...ab, 4];
    console.log(bc); // output = [ 0, 1, 2, 3, 4 ]

    // Criação de Cópias (Rasas) de Arrays: É uma maneira conveniente de criar cópias de arrays. Modificar a cópia não afeta o array original.
    let original = [1, 2, 3];
    let copy = [...original];
    copy[0] = 0; // Modificar a cópia não altera o original
    original[0] // => 1
    console.log(copy); // output = [ 0, 2, 3 ]
    console.log(original); // output = [ 1, 2, 3 ]

    // Iterando sobre Strings: O operador de propagação pode ser usado para transformar uma string em um array de caracteres.
    let digits = [..."0123456789ABCDEF"];
    console.log(digits); // output = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E", "F"]
