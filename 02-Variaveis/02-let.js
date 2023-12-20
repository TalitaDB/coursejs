// No JavaScript moderno (ES6 e posterior), as variáveis são declaradas com a palavra-chave let
    let name = 'Leonardo'; // variável declarada e inicializada

// É possível declarar múltiplas variáveis em uma única instrução let:
    let i, sum; // variáveis declaradas e não inicializadas, cujos valores serão UNDEFINED
    console.log(i, sum) // output = undefined undefined


/**     Variáveis declaradas com let não podem ser REDECLARADAS
 * 
 *    Isso significa que não é possível usar let para declarar novamente uma variável com o mesmo identificador (nome/identifier) na mesma área de escopo.
 *      Isso se aplica ao escopo do bloco em que a variável foi declarada.
 *      VEJA O EXEMPLO
 */

        let idade = 25; // variável idade é declarada inicialmente com o valor 25. 

        // Tentativa de redeclarar a variável dentro do mesmo escopo
       // let idade = 30; // Isso resultará em um erro

// Pode-se modificar o valor da variável. Para isso, basta atribuir um novo valor a ela, sem usar a palavra-chave let novamente:
    let age = 35;
    // Modificando o valor da variável, sem redeclaração
    age = 30; 

/**     EMPTY VARIABLE
 * 
 *    Quando declaramos uma variável, mas não a inicializamos, criamos uma "empty variable"
 * 
 *    Ao criar uma "empty variable" utilizando let, é possível assinalar diferentes valores a ela a posteriori, sem que isso seja entendido como redeclarar.
 *      VEJA O EXEMPLO: 
 */
        let nome; //declarando a variável
        nome = 'João';  //inicializando a variável 
        console.log(nome); // output = João
        nome = 'António'; // alterando o valor da variável
        console.log(nome); // output = António