
// Para saber qual caractere está em determinada posição, basta colocar o número da posição entre []
    //                 01234567
    let outraString = "Um texto"
    console.log(outraString[4]) // output = e
    console.log(outraString[5]) // output = x

    // caso chame uma posição inexistente, retorna "undefined"
    console.log(outraString[8]) // output = undefined
    console.log(outraString[-1]) // output = undefined

// .length    -   Obter o tamanho da string 
    console.log(outraString.length)

    let fraseString = 'O rato roeu a roupa do rei de roma'
    console.log(fraseString.length) // output = 34 - OBSERVE QUE OS ESPAÇOS EM BRANCO TAMBÉM CONTAM

// .slice(start, end) e .substring(start, end)  -   Obtaining portions of a string
    console.log(fraseString.slice(2, 6)) // output = rato
    console.log(fraseString.slice(2, 5)) // output = rat
    console.log(fraseString.slice(-4)) // output = roma -> 'pega' os 4 últimos caracteres da string

    console.log(fraseString.substring(7, 10)) // output = roe

/**  .split(separador, limite)   -   divide uma string em um array de substrings, com base em um delimitador especificado. 
 * A string original permanece inalterada, e o array resultante contém as partes da string original que foram separadas pelo delimitador.
 *      separador: É o caractere ou expressão regular usado para realizar a separação da string. 
 *                 Se este argumento for omitido, a string será dividida em cada caractere.
 *      limite: É um número opcional que especifica o número máximo de elementos a serem incluídos no array resultante.
 */ 
    // Dividindo por espaços:
    const frase = "Olá mundo JavaScript";
    const palavras = frase.split(" ");
    console.log(palavras); // output = [ 'Olá', 'mundo', 'JavaScript' ]

    // Dividindo por vírgulas
    const lista = "maçã,banana,uva,morango";
    const frutas = lista.split(",");
    console.log(frutas); // output = [ 'maçã', 'banana', 'uva', 'morango' ]
    
    // Dividindo por letras
    const palavra = "JavaScript";
    const letras = palavra.split("");
    console.log(letras); // output = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

    // Dividindo com limite
    const numeros = "1-2-3-4-5";
    const partes = numeros.split("-", 3);
    console.log(partes); // output = [ '1', '2', '3' ]


// Pesquisando em uma string
    // .indexOf(searchValue, startIndex)    -   retorna o índice da primeira ocorrência de um determinado valor ou substring em uma string. 
    // EXEMPLO RETIRADO DE Ln15 - let fraseString = 'O rato roeu a roupa do rei de roma' -     
        console.log(fraseString.indexOf('r')) // output = 2 - position of first letter
        console.log(fraseString.indexOf('roeu')) // output = 7 - position of first letter of the word
        console.log(fraseString.indexOf('r', 5)) // output = 7 - position of first "r" at or after 5
        // Se o valor não for encontrado, retorna -1.
        console.log(fraseString.indexOf('x')) // output = -1
        // ATENÇÃO - lembrar que há diferença entre maiusculas e minusculas
        console.log(fraseString.indexOf('R')) // output = -1
    
    //  .lastIndexOf    -   retorna o índice da última ocorrência do valor na string.
        console.log(fraseString.lastIndexOf('r')) // output = 30 - position of last letter 'r'

        const frase1 = "JavaScript é incrível, e o JavaScript é poderoso!";
        const ultimoIndice = frase1.lastIndexOf("JavaScript");
        console.log(ultimoIndice);         // Saída: 27 (posição da última ocorrência de "JavaScript" - CONTA NA PRIMEIRA LETRA, NO CASO, NO J)

// Funções de pesquisa booleana -   retornam sempre TRUE ou FALSE
    //  .startsWith -   verifica se uma string começa com a substring fornecida. 
        const frase2 = "JavaScript é incrível!";
        const comecaComJS = frase2.startsWith("JS");
        console.log(comecaComJS); // output = false
        const comecaComJS2 = frase2.startsWith("JavaScript");
        console.log(comecaComJS2); // output = true

    //  .endsWith   -   verifica se uma string termina com a substring fornecida.
        const frase3 = "JavaScript é incrível!";
        const terminaComVel = frase3.endsWith("vel");
        console.log(terminaComVel); // output = false
        const terminaComVel2 = frase3.endsWith("!");
        console.log(terminaComVel2); // output = true

    //  .includes   -   verifica se uma string contém a substring fornecida.
        const frase4 = "JavaScript é incrível!";
        const contemJava = frase4.includes("Java");
        console.log(contemJava); // output = true

// Criar versões modificadas de uma string
    //  .replace -   substitui uma substring por outra e retorna a nova string.
        const frase5 = "JavaScript é incrível!";
        const novaFrase = frase5.replace("incrível", "poderoso");
        console.log(novaFrase); // output = JavaScript é poderoso!
    
    //  .toLowerCase    -   converte todos os caracteres de uma string para minúsculas.
        const palavraJ = "JavaScript";
        const minuscula = palavraJ.toLowerCase();
        console.log(minuscula); // output = javascript
    
    //  .toUpperCase    -   converte todos os caracteres de uma string para MAIUSCULAS.
        const palavra2 = "JavaScript";
        const maiuscula = palavra2.toUpperCase();
        console.log(maiuscula); // output = JAVASCRIPT
    
    //  .normalize  -   usado para normalizar caracteres Unicode. Essa função é mais relevante para strings que contenham caracteres acentuados.
        const acentuada = "cômputér";
        const normalizada = acentuada.normalize();
        console.log(normalizada); // output = cômputér

// Inspecionar caracteres individuais (16 bits) de uma string:
        const palavr = "JavaScript";

    //  .charAt -   retorna o caractere no índice especificado.
        const caractereCharAt = palavr.charAt(3);
        console.log(caractereCharAt); // output = "a" (caractere no índice 3)

    //  .charCodeAt -   retorna o valor Unicode do caractere no índice especificado.
        const unicode = palavr.charCodeAt(0);
        console.log(unicode); // output = 74 (valor Unicode do "J")

    //  .codePointAt    -   etorna o valor Unicode do ponto de código do caractere no índice especificado. Útil para caracteres Unicode além do BMP.
        const emoji = "😊";
        const codePoint = emoji.codePointAt(0);
        console.log(codePoint); // output = 128522 (ponto de código Unicode do emoji)



// Funções de preenchimento de string no ES2017:
    //  .padStart   -   preenche a string com um determinado caractere no início até atingir o comprimento desejado.
        const num = "42";
        const numpad = num.padStart(5, "0");
        console.log(numpad); // output = 00042

    //  .padEnd -    preenche a string com um determinado caractere no final até atingir o comprimento desejado.
        const number = "42";
        const numberpad = number.padEnd(4, "!");
        console.log(numberpad); // output = 42!!

// Funções de remoção de espaços:
    //  .trim   -   remove espaços em branco no início e no final de uma string.
        const texto = "    Olá, mundo!    ";
        const resultado = texto.trim();
        console.log(resultado); // output = Olá, mundo!

    //  .trimStart  -   remove espaços em branco no início de uma string.
        const texto2 = "    Olá, mundo!";
        const resultado2 = texto2.trimStart();
        console.log(resultado2); // output = Olá, mundo!

    //  .trimEnd    -   remove espaços em branco no fim de uma string.
        const texto3 = "Olá, mundo!    ";
        const resultado3 = texto3.trimEnd();
        console.log(resultado3); // output = Olá, mundo!

// Métodos de string diversos:
    //  .concat -   concatena duas ou mais strings e retorna a nova string resultante.
        const saudacao = "Olá";
        const nome = "mundo";
        const mensagem = saudacao.concat(", ", nome, "!");
        console.log(mensagem); // output = Olá, mundo!

    //  .repeat -   cria e retorna uma nova string que consiste em repetições da string original.
        const parte = "AleLuia";
        const repetida = parte.repeat(3);
        console.log(repetida); // output = AleLuiaAleLuiaAleLuia