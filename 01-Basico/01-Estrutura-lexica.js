/*      ESTRUTURA LÉXICA

    * A estrutura léxica de uma linguagem de programação é o conjunto de regras elementares que especificam o modo de escrever programas nessa linguagem. 
    * É a sintaxe de nível mais baixo de uma linguagem; 
        especifica detalhes de como são os nomes de variáveis, os caracteres delimitadores para comentários 
        e como uma instrução do programa é separada da seguinte.
*/


//    COMENTÁRIOS

//   /* .. */   para comentários longos (+ de 1 linha)
    //          para comentários de 1 linha


/*      LITERALS

    * Um literal é um valor de dados que aparece diretamente em um programa.
    * Os exemplos abaixo são todos literals:
        12      -> número
        1.2     -> número
        "Olá"   -> string
        'Oi'    -> string
        true    -> valor booleano
        false   -> valor booleano
        null    -> ausência de um objeto
 */

/*      CASE-SENSITIVE

    * JavaScript é uma linguagem que diferencia letras maiúsculas de minúsculas.
    * Isto significa que as palavras-chave da linguagem, as variáveis, os nomes de funções e outros identificadores devem ser sempre digitados com uma capitalização consistente das letras.
    * Por exemplo, a palavra-chave while deve ser digitada como “while” e não como “While” ou “WHILE”. 
    * Da mesma forma, online, Online, OnLine e ONLINE são quatro nomes de variável distintos. 
 */

/*     IDENTIFICADORES

    * Um identificador é simplesmente um nome. 
    * Em JS, identificadores são usados para dar nomes a variáveis e funções e para fornecer rótulos para certos laços no código JS. 
    
    * Um identificador JS deve começar com uma letra, um sublinhado (_) ou um cifrão ($). 
    * Os caracteres subsequentes podem ser letras, dígitos, sublinhados ou cifrões. 
    * Os dígitos não são permitidos como primeiro caractere, para que JavaScript possa distinguir identificadores de números facilmente. 
    * Todos estes são identificadores válidos:

        i my_variable_name
        v13
        _dummy
        $str
 */

/*      ESPAÇOS EM BRANCO

    * JS ignora espaços que aparecem entre tokens (simbolos/caracteres/palavras/etc) em programas. 
 */

/*      QUEBRAS DE LINHA

    * Em geral, JS ignora quebras de linha (mas há uma exceção - ponto e virgula, ver adiante). 
    * Isso permite a utilização de espaços e novas linhas livremente em seus programas.
    * Ou seja, pode-se dividir código em várias linhas, formatar e recuar seus programas de maneira organizada e consistente, tornando o código fácil de ler e entender.
    * Em suma, essa possibilidade melhora a legibilidade e formatação do código.
 */

    
/*     PONTO E VÍRGULA

    * JS utiliza o ponto e vírgula (;) para separar declarações umas das outras. 
    * Isso é importante para tornar o significado do seu código claro: 
        sem um separador, o final de uma declaração pode parecer ser o início da próxima, e vice-versa. 
        
    * Em JS, você geralmente pode omitir o ; entre duas declarações se essas declarações estiverem em linhas separadas. 
    * Você também pode omitir um ; no final de um programa ou se o próximo token no programa for uma chave de fechamento: } ). 
    * Muitos programadores JS usam ; para marcar explicitamente o final das declarações, mesmo quando não são necessários. 
    
    * Outro estilo é omitir ; sempre que possível, usando-os apenas nas poucas situações que os exigem. 
    * Independentemente do estilo escolhido, há alguns detalhes que você deve entender sobre pontos e vírgulas opcionais em JS.

    1º - Existem casos em que o JS interpreta uma quebra de linha como um ponto e vírgula, adicionando implicitamente esse ponto e vírgula ao código. 
        Isso ocorre quando o interpretador não consegue analisar o código sem a inserção de um ponto e vírgula.
        Mais formalmente (e com três exceções descritas um pouco mais adiante), 
            o JS trata uma quebra de linha como um ; se o próximo caractere não em branco não puder ser interpretado como uma continuação da declaração atual.
        Ou seja, se a quebra de linha criar ambiguidade na interpretação do código, o JS insere automaticamente um ponto e vírgula.
        VEJA O EXEMPLO:
 */
        let a // criando a variável
        a 
        = 
        3 // inicializando a variável (i.e., atribuindo um valor a ela)
        console.log(a)
        /* nesse caso, o JS interpreta esse código assim: 
        
                let a; a = 3;
           
        * O JS trata a primeira quebra de linha como um ; porque não consegue analisar o código "let a" sem um ponto e vírgula. 
        * A segunda a poderia ficar sozinha como a declaração "a;", 
                mas o JS não trata a segunda quebra de linha como um ; porque pode continuar analisando a declaração mais longa a = 3;.
        */

/*  2º - Em geral, se uma declaração começa com (, [, /, + ou -, 
            há uma chance de que ela seja interpretada como uma continuação da declaração anterior.
    VEJA O EXEMPLO:
 */                
        let y = x + f
        (a+b).toString()
        /* nesse caso, o JS interpreta esse código assim: 
        
                let y = x + f(a+b).toString();
           
        *   Provavelmente, essa não é a interpretação pretendida pelo autor do código.
        *   Para que funcione como duas declarações separadas, um ponto e vírgula explícito é necessário neste caso:

                let y = x + f; // Ponto e vírgula adicionado para encerrar a primeira declaração
                (a+b).toString();
        */
    /* Alguns programadores adicionam um ; defensivo no início de tais declarações 
            para garantir que o código continue a funcionar corretamente, 
            mesmo se a declaração anterior for modificada e um ; previamente existente for removido:
     */
            let x = 0; // Ponto e vírgula adicionado aqui como medida defensiva
            ;[x, x+1, x+2].forEach(console.log); // Ponto e vírgula defensivo mantém esta declaração separada

/**    EXCEÇÕES A REGRA DE ; COMO QUEBRA DE LINHA
 
 *  Existem três exceções à regra geral de que o JS interpreta quebras de linha como ; quando não pode analisar a segunda linha como uma continuação da declaração na primeira linha.

    1ª - declarações 'return' 'throw' 'yield' 'break' e 'continue'
        Essas declarações frequentemente ficam sozinhas, mas às vezes são seguidas por um identificador ou expressão. 
        Se uma quebra de linha aparecer após qualquer uma dessas palavras (antes de qualquer outro token),
            o JS sempre interpretará essa quebra de linha como um ponto e vírgula. 
        Isso significa que você não deve inserir uma quebra de linha entre 'return' 'throw' 'yield' 'break' e 'continue' e a expressão que segue a palavra-chave. 
        Se você inserir uma quebra de linha, é provável que seu código falhe de uma maneira não óbvia que é difícil de depurar.
            VEJA O EXEMPLO 
 */
            return
            a + b 
            // O JS assume que voce quis dizer:         return; a + b;
            // Todavia, voce provavelmente quis dizer:  return a + b;

/*  2ª - operadores '++' e '--'
        Esses operadores podem ser operadores de prefixo que aparecem antes de uma expressão 
                ou operadores de sufixo que aparecem após uma expressão.
        Se quiser utilizá-los, eles deverão aparecer na mesma linha que a expressão à qual se aplicam.
            VEJA O EXEMPLO 
*/
            let c = 5;
            let d = 2;

            // Exemplo correto (operador de sufixo na mesma linha)
            c = c + d++;

            // Exemplo incorreto (operador de sufixo em linha diferente)
            let result = c +
            d++;

/*  3ª -  funções definidas usando a sintaxe concisa de "seta" =>
        Quando você define funções usando a sintaxe concisa de "seta" (=>), 
                a seta deve aparecer na mesma linha que a lista de parâmetros. 
            VEJA O EXEMPLO             
*/
            const add = (x, y) => x + y; // Exemplo correto (seta na mesma linha que a lista de parâmetros)

            const subtract = // Exemplo incorreto (seta em linha diferente da lista de parâmetros)
            (x, y) =>
                x - y;