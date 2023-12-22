/**         STRING - is any literal text.
 * 
 *      Uma string é uma sequência de caracteres usados para representar texto;
 *      Strings são úteis para guardar dados que podem ser representados em forma de texto;
 *  
 *  1.    Strings podem ser compostas por uma variedade de caracteres, incluindo:
 *          * letras
 *          * números
 *          * símbolos
 *          * espaços em branco
 *          * pontuação (como vírgulas e pontos)
 *          * caracteres especiais
 * 
 *   2.   Para serem considerados strings, esses caracteres devem vir delimitados por:
 *          aspas simples (') ou duplas (") -   String literal
 *          crases (`)                      -   Template Literals
 * 
 *   3.   Uma string é uma sequência ordenada imutável de valores de 16 bits.
 *           Cada um dos valores de uma string representa um caractere, geralmente seguindo o padrão Unicode.
 * 
 *           Haja vista que as strings podem ser consideradas arrays de caracteres, poder-se-ia esperar que fossem mutáveis. 
 *           CONTUDO, em JS, as strings são imutáveis: você pode acessar o texto em qualquer índice de uma string.
 *                  Mas o JS não fornece maneira de alterar o texto de uma string existente. 
 *     
 *           !!!! Vale lembrar !!!!
 *     Strings são TIPOS PRIMITIVOS e, por isso, são IMUTÁVEIS.
 *     "Imutável" significa que, uma vez que você cria uma string, não pode modificar os caracteres individuais dentro dela.
 *          Por exemplo, se tivermos a string 'hello', não podemos alterar o 'e' para 'a' diretamente na string existente.
 *   
 *  4.    Escaping characters   -   pode-se usar o Backslash (\) para incluir caracteres especiais em suas strings.
 * 
 *  5.    Quebras de linha      -   A partir do ES5, entretanto, você pode quebrar uma string literals em múltiplas linhas terminando cada linha, exceto a última, com uma backlash (\).
 * 
 *  6.    String length; slice, indexOf, etc - Estão em 03.1
 *            
 */

// 1.
    // String composta por letras
        let stringLetras = "Hello";  
        console.log(stringLetras);   // Output: Hello

    // Números podem estar presentes em uma string.
        let stringNumeros = "12345";  // Uma string composta por números
        console.log(stringNumeros);   // Output: 12345

    // Contudo, é importante notar que, se forem tratados como texto em vez de valores numéricos, operações matemáticas não serão realizadas corretamente.
        let numeroComoTexto = "5";  // Uma string contendo o número 5 como texto
        let numeroComoValor = 2;
        
        // Se tratarmos 'numeroComoTexto' como texto e tentarmos concatenar, não realizaremos a adição
        let resultadoTexto = numeroComoTexto + numeroComoValor;
        console.log(resultadoTexto);  // Output: 52 (concatenação de strings, não soma)
   
    // Símbolos são caracteres especiais que não são letras ou números. Exemplos incluem '@', '#', '$', '&' e assim por diante.
        let stringSimbolos = "!@#$";  // Uma string composta por símbolos
        console.log(stringSimbolos);  // Output: !@#$

    // Espaços em branco, como espaços, tabs e quebras de linha, também são caracteres válidos em uma string.   
        let stringComEspacos = "Texto com espaços";  // Uma string com espaços em branco
        console.log(stringComEspacos);               // Output: Texto com espaços
    
    // Pontuação (como vírgulas e pontos) podem ser parte de uma string
        let stringComPontuacao = 'Este é um exemplo com pontuação: vírgulas, pontos, e outros caracteres.';
        console.log(stringComPontuacao);

    // Caracteres especiais, como quebras de linha (\n), tabulações (\t), aspas (\" para representar uma aspa dentro de uma string delimitada por aspas), entre outros, podem ser representados usando uma barra invertida \ seguida do caractere especial. Isso é conhecido como "escape character" em inglês.
        let stringComCaracteresEspeciais = 'Esta é uma string com caracteres especiais: \n nova linha, \t tabulação, e \"aspas\".';
        console.log(stringComCaracteresEspeciais);
    
// 2.
    /**         STRING LITERAL vs TEMPLATE LITERAL
     *      
     *      STRING LITERAL   -   é uma forma de representar uma string diretamente no código, sem a necessidade de construtores ou métodos especiais para criar a string.
     *                           É delimitada por aspas simples (') ou duplas (").
     *                           Não suporta quebras de linha ou interpolação de variáveis diretamente na string.
     *                           Quando colocada uma string entre aspas simples (') ou aspas duplas ("), isso delimita o início e o fim da string.
     * 
     *      TEMPLATE LITERALS -  Delimitada por crases (`).
     *                           Permite interpolação de variáveis e expressões usando ${} diretamente na string.
     *                           Suporta quebras de linha, o que facilita a criação de strings multilinhas.
     *                           Usar template literals torna o código mais legível e flexível, especialmente quando precisa incluir variáveis ou expressões em suas strings. 
     *                           Além disso, a capacidade de quebras de linha facilita a formatação de strings que abrangem várias linhas de maneira mais clara.
     *                           As crases (`) não são usadas para delimitar o início e o fim de strings no mesmo sentido que as aspas simples ou aspas duplas.                           
     */
        // String Literal:
        let catName = "Doçura";
        let catColors = 'white, red, blue, black, cream, cinnamon, fawn and brown';
        console.log(catName, catColors) // output = Doçura white, red, blue, black, cream, cinnamon, fawn and brown
        
        let nome = 'Alice';
        let saudacao = 'Olá, meu nome é ' + nome + '.';
        console.log(saudacao); // output = Olá, meu nome é Alice.

        // Havendo necessidade de que o texto apareça entre aspas, as aspas externas devem ser diverente das internas
        let famousQuote2 = '"Ser ou não ser."';
        console.log(famousQuote2); // output = "Ser ou não ser."

        let famousQuote1 = "'To be or not to be.'";
        console.log(famousQuote1); // output = 'To be or not to be.'

        // Templates Literals
            let nome1 = 'Bob';
            let saudacao1 = `Olá, meu nome é ${nome1}.`;

            let multiLinha = `
            Esta é
            uma string
            multilinha.
            `;

            let nome3 = 'Alice';
            let idade = 30;
            let frase = `Olá, meu nome é ${nome3} e tenho ${idade} anos.`; // Usando template literals
            console.log(frase); // output =  Olá, meu nome é Alice e tenho 30 anos.
            
// 3. 
    /**         Indexação Baseada em Zero
     *  
     *      As strings em JS usam indexação baseada em zero, o que significa que a primeira posição de um caractere é representada pelo índice 0.
     *          Isso significa que o primeiro caractere da string está no índice 0, o segundo no índice 1, e assim por diante.
     *       Por exemplo, na string 'hello', o caractere 'h' está na posição 0, o 'e' está na posição 1 e assim por diante.
     */
            let texto = "Hello, World!";
            let primeiroCaractere = texto[0];  // Obtendo o primeiro caractere usando indexação baseada em zero
            console.log(primeiroCaractere);  // Output: H

            let str = 'hello';
            console.log(str[0]);  // Saída: 'h' - primeiro caractere
            console.log(str[1]);  // Saída: 'e' - segundo caractere

    /**         Representação de Caractere Único
     * 
     *      String de comprimento 1 é usada para representar um único caractere. 
     *      Mesmo que essa string tenha apenas um caractere, ela ainda é tratada como uma string.
     */
            let char1 = 'A';  // Uma string com comprimento 1 representando o caractere 'A'
            let char2 = 'B';  // Uma string com comprimento 1 representando o caractere 'B'

            console.log(char1);  // Saída: 'A'
            console.log(char2);  // Saída: 'B'

// 4.
    /**         Escaping characters
     * 
     *      A barra invertida (\) tem um propósito especial em strings JavaScript. 
     *      Combinado com o caractere que o segue, ele representa um caractere que não pode ser representado de outra forma dentro da string. 
     *      A seguir, uma lista de exemplos de caracteres especiais que podem ser usados em strings no JS.
     */
        //  \0  Byte nulo   -   Representa o caractere nulo (valor ASCII 0)
        let stringComNulo = "Texto\0com\0nulo";
        console.log(stringComNulo);  // Output: Texto(com caractere nulo)com(com caractere nulo)nulo

        //  \b  Backspace   -   Move uma posição para trás
        let textoComBackspace = "AB\bC";
        console.log(textoComBackspace);  // Output: ABC

        //  \f  Alimentador de formulário   -   Geralmente usado para avançar para uma nova página ou formulário
        let textoComAlimentadorForm = "Texto\fcom\falimentador";
        console.log(textoComAlimentadorForm); // output = Textocomalimentador

        //  \n  Nova linha  -   Representa uma nova linha.
        let textoComNovaLinha = "Primeira linha\nSegunda linha";
        console.log(textoComNovaLinha);

        //  \r  Carriage return -   Move o cursor para o início da linha.
        let textoComRetornoCarro = "Texto\rcom retorno de carro";
        console.log(textoComRetornoCarro);

        //  \t  Tabulação   -      Representa um caractere de tabulação.
        let textoComTabulacao = "Coluna1\tColuna2";
        console.log(textoComTabulacao);

        //  \v  Tabulação vertical  -   Representa uma tabulação vertical.
        let textoComTabulacaoVertical = "Linha1\vLinha2";
        console.log(textoComTabulacaoVertical);

        //  \"  Double quote    -   Permite incluir aspas duplas dentro de uma string delimitada por aspas duplas.
        let textoComAspasDuplas = "Isso é uma aspas \"dupla\" dentro da string";
        console.log(textoComAspasDuplas); // output = Isso é uma aspas "dupla" dentro da string

        //  \'  Apostrophe or single quote  -  Permite incluir uma aspa simples dentro de uma string delimitada por aspas simples.
        let textoComAspasSimples = 'Isso é uma aspas \'simples\' dentro da string';
        console.log(textoComAspasSimples);

        //  \\  Backslash   -   Permite incluir uma barra invertida dentro de uma string.
        let textoComBarraInvertida = "C:\\Diretorio\\Arquivo";
        console.log(textoComBarraInvertida);

// 5.
    /** QUEBRAS DE LINHA */
    // A string representing 2 lines written on one line:
        let ex = 'two\nlines'
        console.log(ex)
    
    // A one-line string written on 3 lines:
        let ex2 = "one\
        long\
        line"
        console.log(ex2)

    // A two-line string written on two lines:
        let ex3 = `the newline character at the end of this line
                    is included literally in this string`
        console.log(ex3)

