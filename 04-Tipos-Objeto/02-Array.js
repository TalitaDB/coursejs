/**         ARRAYS
 * 
 *  Arrays (ou vetores ou matrizes) são objetos especiais (são uma forma especializada de objeto JS).
 *     
 *       -->  O typeof operador em JavaScript retorna “objeto” para arrays. <--
 *  
 *   Um array (ou vetor) é uma estrutura de dados que permite armazenar vários VALORES, de forma ORDENADA, numa única variável.
 *      Ou seja, um array é uma COLEÇÃO ORDENADA de VALORES. 
 *   Cada VALOR é chamado de ELEMENTO, e cada elemento tem uma posição numérica no array, conhecida como ÍNDICE.
 *   O ÍNDICE começa do zero, ou seja, o primeiro elemento está no índice 0, o segundo no índice 1, e assim por diante. 
 * 
 *  RESUMINDO:
 *      Uma array é uma estrutura de dados que permite armazenar uma coleção ordenada de elementos.
 *          Cada elemento do array pode ser acessado por meio de um índice ou uma chave.
 *      Podemos dizer, em outras palavras, que um array é um contêiner de dados:
 *              uma lista sequencial de múltiplos elementos indexados e atribuídos a uma variável, 
 *              de forma que podemos iterar sobre um ou mais elementos desta estrutura sempre que necessário.
 * 
 *      VALORES: dados reais atribuídos às variáveis. 
 *      ELEMENTO: nome dado a cada valor em um array.
 *      ÍNDICE: posição numérica de cada elemento no array, começando em zero.
 * 
 *  No exemplo acima declaramos uma variável (com 'let') de nome 'frutas",
 *      que recebe como atributo (=) uma array composta por 3 elementos (maçã, banana e laranja).
 *    Os ELEMENTOS, que, no exemplo, são de mesmo tipo (strings), são separados utilizando-se de vírgula como separador.
 */
        let frutas = ['maçã', 'banana', 'laranja']; 


    /**  Arrays em JS são SEM TIPO. 
    *      Um elemento de array pode ser de qualquer tipo. 
    *      Diferentes elementos do mesmo array podem ser de tipos diferentes; 
    *      CONTUDO, geralmente, são do mesmo tipo. 
    * 
    *      --> É BOA PRÁTICA QUE OS ELEMENTOS DE UM ARRAY SEJAM TODOS DO MESMO TIPO <--
    */ 
    // Array com Numbers e Strings
    let numerosEStrings = [1, 'dois', 3, 'quatro'];

    // Array com Booleanos e Objetos
    let booleanosEObjetos = [true, false, { nome: 'Alice' }, { nome: 'Bob' }];

    // Array com Valores Null e Undefined
    let valoresNulosEIndefinidos = [null, undefined, 'texto', 42];

    // Os elementos de um array podem até mesmo ser objetos ou outros arrays.
    let arrayAninhado = [1, [2, 3], 4, [5, 6]]; // Array com Números e Arrays Aninhados
    let objetosEFuncoes = [{ cor: 'vermelho' }, function () { console.log('Função executada!'); }]; // Array com Objetos e Funções

    // Array com diferentes tipos de elementos 
    let misturaCompleta = [1, 'dois', { idade: 25 }, false, [5, 10], null];

    
/**        CRIANDO ARRAYS
 * 
 *      Existem duas sintaxes para criar um array vazio:
 *          Array Literals           []
 *          Array Constructor   new Array()
 */    

    //  Array Literals []
        let arrayLiteral = [1, 2, 3, 4, 5];
        console.log(arrayLiteral); // Saída: [1, 2, 3, 4, 5]

    // Espaços e quebras de linha não são importantes. Uma declaração pode abranger várias linhas:
        const cars = [
            "Saab",
            "Volvo",
            "BMW"
          ];

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
            let c = new Array(10);      // Array vazio de tamanho 10
            console.log(c); // Saída: [ <10 empty items> ]

        // Especificação explícita de dois ou mais elementos de array ou de apenas um elemento não numérico para o array
            let d = new Array(5, 4, 3, 2, 1, "testing, testing");
            console.log(d); // Saída: [ 5, 4, 3, 2, 1, 'testing, testing' ]


            
/**          ARRAY ESPARSO (Sparse Array)
 * 
 *      Em JS, os elementos de um array não precisam ter índices contínuos.
 *          Isso significa que pode haver lacunas.
 * 
 *      Um array esparso é aquele em que os elementos não possuem índices contíguos s e nem sempre começam no índice 0. 
 *          São essencialmente Arrays com “buracos”, ou lacunas na sequência de seus índices. 
 */  
        let arrayEsparsa = [];          // declarando uma array vazia
        arrayEsparsa[2] = 'elemento1';  // adicionando um elemento no índice 2
        arrayEsparsa[5] = 'elemento2';  // adicionando um elemento no índice 5

        console.log(arrayEsparsa);      // output = [ <2 empty items>, 'elemento1', <2 empty items>, 'elemento2' ]


/**     ARRAYS & SEUS ÍNDICES - Accessando elementos de um array
 * 
 *  Arrays possuem um sistema de indexação interna para seus elementos.
 *  A esse mecanismo de mapeamento e indexação dos elementos do array denominamos ÍNDICE.
 *      Os elementos do array são numerados começando do zero.
 * 
 *      --> Lembrando que todo e qualquer índice em JavaScript é iniciado a contar de ZERO <--
 *  
 *  Para acessar um elemento em um array, usamos índice numérico que representa a posição desse elemento no array.
 *      Para isso, basta que se especifique um número de índice para que seja retornado o dado/valor do elemento situado naquela posição do array.
 */  
        let fruits = ["Apple", "Orange", "Plum"];
        // Você acessa um elemento de um array usando o operador [].
            console.log( fruits[0] ); // output = Apple
            console.log( fruits[1] ); // output = Orange
            console.log( fruits[2] ); // output = Plum    

        // se tentarmos acessar um elemento em um índice que não existe (que não foi definido), JS retorna 'undefined'
            let indefinido = [1, 2, 3, 10, 20]
            console.log(indefinido[0]) // output = 1
            console.log(indefinido[5]) // output = undefined --> porque não há nada nesse índice

 /**      --> OBSERVE que não é possível acessar diretamente os elementos num array
 *              Ao contrário dos objetos em JavaScript, onde você pode acessar valores diretamente usando chaves (e.g., objeto.chave), 
 *                  os arrays não suportam essa forma de pesquisa direta por chave.
 *               Em vez disso, você acessa os elementos de um array usando seus índices numéricos. <--
 */ 
        

    /**     A propriedade .length
     * 
     *  Todo array em JS possui uma propriedade de comprimento (LENGTH).  
     *  Podemos descobrir quantos itens estão em um array com a length propriedade. 
     * 
     *      A length propriedade em um Array pega o índice do último elemento e adiciona um. 
     *      Portanto, se você tiver um array com buracos entre o índice 0 a 100 e um elemento no índice 101, 
     *          retornará length101, pois é o último índice + 1.
     * */
        
        // Para arrays não esparsos (também chamados de densos), a propriedade length especifica o número de elementos no array.
        let arrayDenso = [10, 20, 30, 40, 50];
        console.log(arrayDenso.length); // Saída: 5
          
        // Para arrays esparsos, o comprimento é maior que o índice mais alto de qualquer elemento.
        let arrayEsparsa1 = [];
        arrayEsparsa1[2] = 'elemento1';
        arrayEsparsa1[5] = 'elemento2';

        console.log(arrayEsparsa1.length); // Saída: 6

    

  








// Array esparso com lacuna entre índices
//let arrayEsparsa = [];
//arrayEsparsa[3] = 'elemento 3';
//console.log(arrayEsparsa); // Saída: [ <3 empty items>, 'elemento 3' ]

// Usando a propriedade de comprimento
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.length); // Saída: 5


/**         Alterando um elemento de array
 * 
 */

/**         .toString() - Convertendo um array em uma string
 *  O método JavaScript toString()converte um array em uma string de valores de array (separados por vírgula).
 */