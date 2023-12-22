/**     NUMBERS 
 * 
 *  Any number (without quotes) or 
 *      an expression that evaluates to a number (for example 1+1) to a variable or constant.    
 * 
 *  Number, é usado para representar valores numéricos, inteiros ou de ponto flutuante, e aproximar números reais.
 */

    /**     NUMERIC LITERAL
     * 
     *   Quando um número aparece diretamente em um programa JS, é chamado de numeric literal.
     *   Observe que qualquer literal numérico pode ser precedido por um sinal de menos (-) para tornar o número negativo.
     */
        let literalPositivo = 123; // Literal numérico inteiro positivo
        let literalNegativo = -456; // Literal numérico inteiro negativo

    /**     HEXADECIMAIS, BINARIOS & OCTAL
     * 
     *  O JS reconhece valores hexadecimais (base 16). 
     *      Um literal hexadecimal começa com 0x ou 0X, seguido por uma string de dígitos hexadecimais. 
     *      Um dígito hexadecimal é um dos dígitos de 0 a 9 ou as letras a (ou A) a f (ou F), que representam valores de 10 a 15.
     *          Ou seja, dígitos hexadecimais podem ser números de 0 a 9 ou letras de A a F (maiúsculas ou minúsculas).
     */
        let decimal = 42; // Exemplo de inteiro decimal
        
        let hexDecimal = 0xff; // Exemplo de inteiro hexadecimal - Representa o número 255 em decimal (15*16 + 15)
        let outroHex = 0xBADCAFE; // Outro exemplo de inteiro hexadecimal - Representa o número 195939070 em decimal
        let hex3 = 0xA; // Representa o número 10 em decimal
        let hex4 = 0x1F; // Representa o número 31 em decimal
        
    /**     BINARIOS & OCTAL
     * 
     *  Em versões mais recentes do JS, é possível representar inteiros em:
     *       BINARIOS (base 2)  -   prefixos 0b ou 0B 
     *       OCTAL (base 8)     -   prefixos 0o ou 0O
     */    
        let binario = 0b10101; // Exemplo de inteiro binário - Representa o número 21 em decimal (1*16 + 0*8 + 1*4 + 0*2 + 1*1 = 21)
        let bin2 = 0b110110; // Representa o número 54 em decimal (1*32 + 1*16 + 0*8 + 1*4 + 1*2 + 0*1)
        
        let octal = 0o377; // Exemplo de inteiro octal - Representa o número 255 em decimal (3*64 + 7*8 + 7*1 = 255)
        

    /**     FLOATING-POINT LITERALS
     * 
     *  Números de ponto flutuante são aqueles que têm uma parte decimal.
     * 
     *  Notação Exponencial -   É uma forma de representar números muito grandes ou muito pequenos 
     *                              usando a letra e ou E seguida de um expoente.
     */
        let pontoFlutuante = 3.14; // Exemplo de número de ponto flutuante
        let expo = 6.02e23; // Exemplo de notação exponencial positiva
        let expoNegativa = 1.4738223e-32; // Exemplo de notação exponencial negativa

    // SEPARATORS IN NUMERIC LITERALS - Para melhorar a legibilidade de números grandes, você pode usar underscores como separadores
        let bilhao = 1_000_000_000; // Separador de milhares
        let hexComUnderscore = 0x89_AB_CD_EF; // Separador de bytes em hexadecimal
        let binarioComUnderscore = 0b0001_1101_0111; // Separador em binário
        let fracaoComUnderscore = 0.123_456_789; // Funciona também em parte fracionária
    
    /**     Number.isInteger()  -   verifica se um número é um número inteiro e retorna true ou false
     *      Number.isNaN()      -   verifica se um valor é NaN (Not a Number) e retorna true ou false
     *                                  
     */

        // Number.isInteger()
        let inteiro = 10;
        let pontoFlu = 52.9;
        // Verificando se é um número inteiro
        console.log(Number.isInteger(inteiro)); // Saída: true
        console.log(Number.isInteger(pontoFlu)); // Saída: false

        // Number.isNaN()
        let number6 = 52.9;
        // Verificando se é NaN
        let verifica = number6 * 'olá';
        console.log(verifica); // Saída: NaN
        console.log(Number.isNaN(verifica)); // Saída: true - porque de fato não é um número
    

    /**     CONVERSÃO EM NÚMERO INTEIRO
     * 
     *  Para converter o número de ponto flutuante para um inteiro, pode-se utilizar os seguintes métodos:
     *      Math.round()    -   arredonda um número para o inteiro mais próximo.
     *      Math.floor()    -   arredonda um número para o inteiro menor ou igual.
     *      Math.ceil()     -   arredonda um número para o inteiro maior ou igual.
     *      toFixed()       -   usado para arredondar um número para um número específico de casas decimais.
     *                              No entanto, ele retorna uma string representando o número arredondado, não um número.
     * 
     *      parseFloat(_.toFixed()) & Number(_.toFixed()) 
     *          Para corrigir o problema do toFixed, aplicamos .toFixed() para arredondar 
     *               e em seguida utilizamos parseFloat() ou Number para converter de volta para um número.
     */
            // Math.round()
            let numero1 = 10.49;
            let numero2 = 10.51;
            let arredondado1 = Math.round(numero1);
            let arredondado2 = Math.round(numero2);    
            console.log(arredondado1); // Saída: 10
            console.log(arredondado2); // Saída: 11
            
            // Math.floor()
            let numero3 = 10.99;
            let paraBaixo = Math.floor(numero3);
            console.log(paraBaixo); // Saída: 10

            // Math.ceil()
            let numero4 = 10.01;
            let paraCima = Math.ceil(numero4);    
            console.log(paraCima); // Saída: 11

            // .toFixed()
            let numeroDecimal = 12.34567;
            let numeroArredondado = numeroDecimal.toFixed(2);
            console.log(numeroArredondado); // Saída: "12.35" (string)
        
            // parseFloat(_.toFixed()) & Number(_.toFixed())
            let number = 10.5689722656
            let numeroArr = parseFloat(number.toFixed(2));
            console.log(numeroArr); // Saída: 10.57

            let number1 = 11.5689722656;
            number1 = Number(number1.toFixed(2));
            console.log(number1);  // Saída: 11.57

    /**     Ponto Flutuante Binário e Erros de Arredondamento
     * 
     *  O JS usa o formato de ponto flutuante IEEE-754 para representar números reais
     *  A representação é em base binária, o que significa que ela lida bem com frações binárias, como 1/2, 1/4, 1/8, etc
     *  PROBLEMAS surgem quando tentamos representar números decimais exatos, como 0.1, que não têm uma representação exata em binário.
     *      Isso leva a arredondamentos e aproximações.
     *      VEJA O EXEMPLO
     */

            let x = 0.3 - 0.2; // trinta centavos menos vinte centavos
            let y = 0.2 - 0.1; // vinte centavos menos dez centavos
            console.log(x); // Saída: 0.09999999999999998
            console.log(y); // Saída: 0.1
            console.log(x === y); // Saída: false
            console.log(x === 0.1); // Saída: false
            console.log(y === 0.1); // Saída: true
    /**
     *  Como se vê, ao compararmos diretamente números de ponto flutuante, obtemos resultados inesperados
     *      No exemplo, embora matematicamente 0.3 - 0.2 seja o mesmo que 0.2 - 0.1, a representação binária gera pequenas diferenças nos resultados.
     *  Isso ocorre devido às pequenas discrepâncias resultantes dos arredondamentos.
     * 
     *      SOLUÇÕES:
     *          .toFixed()  -   utilizado para arredondar o número para duas casas decimais. No entanto, ele retorna uma string, não um número.
     *          Utilizar, então parseFloat(_.toFixed()) ou Number(_.toFixed())
     */
        let num1 = 0.7;
        let num2 = 0.1;
        console.log(num1 + num2) // output = 0.7999999999999999
        
        // .toFixed()
        num1 = num1.toFixed(2);
        console.log(num1); // Saída: "0.70"
        console.log(Number.isInteger(num1)); // Saída: false
        console.log(isNaN(Number(num1))); // Saída: false, porque "0.70" é uma string que pode ser convertida para um número
        console.log(Number.isNaN(num1)); // Saída: false, porque "0.70" é uma string que pode ser convertida para um número
        //contudo, por conta do toFixed retornar uma string, o valor é uma string - veja:
        let exemplo = num1 + 1; // aqui ocorre uma concatenação do num 1 (0.70), que é uma string, com o número 1
        console.log(exemplo); // output = 0.701

        // parseFloat(_.toFixed())
        let num3 = 0.7;
        let num4 = 0.1;
        let soma = num3 + num4;
        console.log(soma); // Saída: 0.7999999999999999
        soma = parseFloat(soma.toFixed(1));
        console.log(soma); // Saída: 0.8
        console.log(Number.isInteger(soma)); // Saída: false
        console.log(Number.isNaN(soma)); // Saída: false - porque de fato é um número

        // Number(_.toFixed())
        let num5 = 0.7;
        let num6 = 0.1;
        let soma1 = num5 + num6;
        console.log(soma1); // Saída: 0.7999999999999999
        soma1 = Number(soma1.toFixed(1));
        console.log(soma1); // Saída: 0.8
        console.log(Number.isInteger(soma1)); // Saída: false
        console.log(Number.isNaN(soma1)); // Saída: false - porque de fato é um número


    /**     CONVERTENDO NUMBERS PARA STRINGS
     * 
     *  .toString() -   é um método disponível para valores numéricos em js. 
     *                  Quando você chama .toString() em um número, ele retorna uma representação desse número como uma string.
     *      No exemplo abaixo, numero.toString() converte o número 42 para a string "42". 
     *          Agora, stringNumero é uma string.
     */
        let numero = 42;
        let stringNumero = numero.toString();
        console.log(stringNumero); // Saída: "42"
        console.log(typeof stringNumero); // Saída: string

        /** Observe, contudo, que ao usar .toString() criamos temporariamente uma representação em string do número, sem alterar o tipo original da variável (number).
         *  
         *  Para tornar um number em uma string de forma permanente, deve-se atribuir o resultado de .toString() de volta à variável.
         */
            let def1 = 123;
            // Temporariamente convertendo para string
            let stringTemporaria = def1.toString();
            console.log(stringTemporaria); // Saída: "123"
            console.log(typeof stringTemporaria); // Saída: string        
            // Convertendo permanentemente para string
            def1 = def1.toString();
            console.log(typeof def1); // Saída: string
        
    /**     !!!!   ATENÇÃO  !!!!
     * 
     *  Lembre-se que, ao usar const, a variável não pode ser reatribuída a um novo valor. 
     *  Portanto, ao converter um número para uma string usando .toString(), isso só afeta a representação temporária da variável e não altera a constante original.
     */
        const numeroConstante = 42;
        // Temporariamente convertendo para string
     //   let stringTemporaria = numeroConstante.toString(); // Isso resultará em um erro, pois const não pode ser reatribuído
        
    