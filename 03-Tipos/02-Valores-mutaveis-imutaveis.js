/** Em JS, a mutabilidade refere-se à capacidade de alterar o valor de uma variável após a sua criação. 
 *  Os valores podem ser classificados em duas categorias principais: mutáveis e imutáveis.
 *  A distinção entre valores mutáveis e imutáveis em JS está diretamente relacionada à forma como esses valores são manipulados, copiados e passados entre variáveis e funções.
 *      VEJAMOS UM RESUMO:
 *      
 *      IMUTÁVEIS   -   São aqueles que não podem ser alterados; 
 *                      Uma vez que esses valores são atribuídos, eles não podem ser alterados;
 *                          Qualquer operação que pareça modificar esses valores na verdade cria um novo valor;  
 *                      Quando se atribui o valor de uma variável a outra, ocorre uma cópia integral do valor;
 *                          Isso significa que as duas variáveis são independentes, e a modificação em uma não afeta a outra.
 *                      Tipos Primitivos são valores imutáveis.
 * 
 *      MUTÁVEIS    -   São aqueles que podem ser alterados após a sua criação;
 *                      Tipos de objetos são mutáveis;
 *                      Quando se atribui um objeto a uma variável ou passa um objeto para uma função, passa-se a REFEÊNCIA, não uma cópia do objeto;
 *                          Quando você faz uma cópia de um objeto (valor mutável), está copiando a referência, não os dados reais.
 *                          Ao copiar objetos, é preciso estar ciente de que se está copiando a referência, não os dados reais.
 *                      Alterações feitas no objeto afetam todas as referências a ele.
 */

/*          TIPOS PRIMITIVOS E VALORES IMUTÁVEIS
 *
 *      Primitivos são imutáveis: não há como alterar (ou “mutar”) um valor primitivo.
 *      Qualquer operação que pareça modificar esses valores na verdade cria um novo valor.  
 *          VEJA OS EXEMPLOS:
 */
            let str = "Hello";
            str[0] = "h"; // Isso não altera a string original
            console.log(str); // Output: "Hello"

            let num = 42;
            num = num + 8; // Isso cria um novo valor, não modifica o original
            console.log(num); // Output: 50

    /**   O tipo de um dado valor nunca muda, MAS o valor guardado numa variável pode ser trocado.
     *       Pode-se alterar/mudar o valor contido na variável, mas não o valor em si.
     *       VEJA O EXEMPLO:
     */
            let nome = 'Luis';
            nome = 'Otávio';   // aqui eu não estou alterando a string, mas sim o dado dela.
            console.log(nome) // output = Otávio
            nome[0] = 'X';    // Isso não é permitido em tipos primitivos
            console.log(nome) // output = Otávio --> continua sendo otávio pq a alteração de uma parte não é permitida

    /**   Além disso, quando há a atribuição de uma uma variável a outra, ocorre uma CÓPIA INTEGRAL do valor.
     *      Como as duas variáveis seguem sendo independentes, a modificação em uma não afeta a outra.
     *      VEJA O EXEMPLO:
     */
            let nome1 = 'Luis';
            let nome2 = nome1; // Cópia integral do valor
            
            nome2 = 'Maria'; // Modificar nome2 não afeta nome1
            console.log(nome1, nome2); // Output: Luis Maria

            let a1 = 'A';
            let b1 = a1;   // Cópia integral do valor
            console.log(a1, b1); // output = A A

            // SE alteramos o valor de 'a', isso só alterará o resultado de 'a'
                // ou seja, não altera o valor de A
            a1 = 'outra coisa';
            console.log(a1, b1); // output = outra coisa A

        
/*      TIPOS DE OBJETOS E VALORES MUTÁVEIS
 *
 *     Objetos são conjuntos de propriedades, que podem guardar valores de qualquer um dos tipos.
 *      
 *     Quando você cria um objeto em JS, você está, na verdade, criando uma referência a esse objeto. 
 *     A variável que armazena o objeto contém uma referência à localização na memória onde os dados do objeto são armazenados.
 *     VEJA O EXEMPLO:
 */
        let obj1 = { key: "value" };
        let obj2 = obj1; // obj2 agora referencia o mesmo objeto que obj1

    /** Assim, ao contrário dos valores imutáveis, como números e strings, que não podem ser alterados diretamente, 
     *      os objetos permitem a modificação de suas propriedades e estrutura.
     * 
     *  Ou seja, pode-se alterar as propriedades de um objeto diretamente, 
     *                   adicionar novas propriedades a um objeto existente, 
     *                   remover propriedades de um objeto.
     *  VEJA OS EXEMPLOS:
     */
        let person = { name: "John", age: 30 };
        person.age = 31; // Modificando a propriedade 'age'

        person.gender = "Male"; // Adicionando uma nova propriedade 'gender'

        delete person.age; // Removendo a propriedade 'age'

        let array = [1, 2, 3];
        array.push(4); // Adicionando um elemento ao array

    /** Nos objetos, os valores são passados por REFERÊNCIA
     * 
     * Quando você atribui um objeto a uma variável ou passa um objeto para uma função, você está manipulando uma referência àquele objeto na memória. 
     * Alterações feitas no objeto afetam todas as referências a ele.
     * VEJA OS EXEMPLOS:
     */
    let objeto = { chave: 'valor' };
    let objeto1 = objeto; // Ambas as variáveis referenciam o mesmo objeto
    
    objeto1.chave = 'novo valor'; // Modificar objeto1 afeta 'objeto'
    console.log(objeto.chave); // Output: novo valor

    let exemplo = [1, 2, 3];
    let referencia = exemplo;    // passando o valor de "exemplo" por referência    
    console.log(exemplo, referencia); // output = [ 1, 2, 3 ] [ 1, 2, 3 ]       
    // como não estamos fazendo uma cópia de valores, mas sim passando por referência;
        // sempre que eu mudar um deles, vai mudar no outro. Veja
    exemplo.push(4);         // add o número 4 no fim do array
    console.log(exemplo, referencia); // output = [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]  
    
    referencia.pop()         // excluo o último número
    console.log(exemplo, referencia); // output = [ 1, 2, 3 ] [ 1, 2, 3 ]
    
