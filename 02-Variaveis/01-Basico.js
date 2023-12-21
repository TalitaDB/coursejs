/** Uma das técnicas mais fundamentais de programação de computadores é o uso de nomes – ou identificadores/identifiers – para REPRESENTAR VALORES.
 
 * Vincular um nome a um valor dá-nos uma maneira de referirmo-nos a esse valor e usá-lo no programas que escrevemos. 
 * Quando fazemos isso, normalmente dizemos que estamos a atribuir um VALOR a uma VARIÁVEL.
 * Qualquer variável pode conter um valor de qualquer tipo.
 
 * Variáveis são palavras-chave usadas para ARMAZENAR VALORES de dados para uso posterior.
  
 * O termo “variável” implica que novos valores podem ser atribuídos: 
       o valor associado à variável pode variam à medida que nosso programa é executado.

 * Embora os dados armazenados em uma variável possam mudar, o nome da variável permanece o mesmo.
 
        *** No JS, as variáveis não são amarradas a nenhum tipo (não têm tipo),
                mas sempre contêm valores que pertencem a algum dos tipos disponíveis. ***
            
            !!! LEMBRE-SE !!!
        O tipo é uma característica dos VALORES, e as variáveis em JS são agnósticas quanto a eles (aos tipos).

    Pense em uma variável como um armário de ginásio — o que você armazena nele muda, mas seu número permanece inalterado.
 */

    /**       ORIENTAÇÕES GERAIS SOBRE VARIÁVEIS
     * 
     * NÃO é possível criar variáveis com PALAVRAS RESERVADAS (Reserved Words).
     * 
     * NÃO pode começar o nome de uma variável com um número.
     * 
     * Nome da variável NÃO pode conter espaços ou traços.
     * 
     * Variáveis precisam ter nomes significativos. Isso ajuda a saber o que a variável faz, o que ela é. 
     * 
     * Procure começar seu nome de variável com letras minúsculas. 
     * 
     * Se for necessário atribuir nome composto, utilize o camelCase. (camelCase é um exemplo de Case-sensitive, isso significa dizer que já diferença, que o programa detecta e entende, entre maiúsculas.)
     * 
     */

    /**       DECLARAR x INICIALIZAR VARIÁVEL
     * 
     * Creating a new variable is known as declaring a variable.
     * 
     * Declaramos variáveis usando as palavras-chave var, let ou const. 
        VEJA O EXEMPLO:
     */
        let nome; //declarando a variável
        let idade; //declarando a variável

    /**       DECLARAR x INICIALIZAR VARIÁVEL
     * 
     * Ao atribuirmos um valor a uma variável, estaremos inicializando-a.
          i.e., assigning a value to a variable for the first time is called initializing a variable.
        VEJA O EXEMPLO:
     */
        let name = 'Geraldo'; // usamos let para declarar a variável, cujo identificador é 'name' e atribuimos o valor ('Geraldo') com o sinal = 
        let age = 45; // mesma situação: variável está sendo declarada e inicializada

        /**  !!!!     ATENÇÃO     !!!!
         * 
         * É uma boa prática de programação atribuir um valor inicial às suas variáveis ao declará-las.
         * 
         * Variáveis declaradas, mas não inicializadas, são reconhecidas pelo JS como UNDEFINED.
         * 
         * Variáveis declaradas com const PRECISAM ser inicializadas ao serem declaradas
         */
        