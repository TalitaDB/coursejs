/**     BOOLEANS
 * 
 *  Um booleano é um tipo de dado que tem apenas dois valores possíveis: true (verdadeiro) ou false (falso) 
 */
    let isTrue = true;
    let isFalse = false;

    console.log(isTrue);  // Saída: true
    console.log(isFalse); // Saída: false

/**     Comparações
 * 
 *  Os valores booleanos frequentemente resultam de comparações. 
 *      Se uma comparação for verdadeira, o resultado será true; 
 *      Se a comparação for falsa, o resultado será false.
 */
    let a = 5;
    let b = 3;
    let isEqual = (a === b); // isEqual será false, pois 5 não é igual a 3

    console.log(isEqual); // Saída: false

/**     Controle de Fluxo
 * 
 *  Valores booleanos são comumente usados em estruturas de controle em JS.
 *      Ou seja, em JS, muitas operações e estruturas de controle de fluxo esperam expressões booleanas. 
 *  Por exemplo, a instrução if/else em JS executa uma ação se um valor booleano for true e outra ação se o valor for false. 
 *  Geralmente, você combina uma comparação que cria um valor booleano diretamente com uma instrução que o utiliza. 
 */
    let x = 10;

    if (x > 5) {
    // Este bloco será executado porque a condição é verdadeira (true)
    console.log('x é maior que 5');
    } else {
    // Este bloco seria executado se a condição fosse falsa (false)
    console.log('x não é maior que 5');
    }
