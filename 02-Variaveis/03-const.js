/**     Para declarar uma constante em vez de uma variável, use const
 * 
 *  const funciona exatamente como let, exceto que você deve inicializar a constante ao declará-la.
 */
    let exemplo = 'um exemplo';

 
/**     CONSTANTES E TIPOS PRIMITIVOS
 *   
 *    Quando utilizamos const com tipos primitivos (strings, numbers, booleans), o valor associado a essa constante não pode ser reatribuído.
 *    Isso ocorre porque os tipos primitios têm valores imutáveis, o que significa que não podemos alterá-los, tampouco redeclará-los ou reatribuí-los (com o operador de atribuição =).
 *       VEJA O EXEMPLO:
 */
        const pi = 3.14159;
        
        // Tentativa de reatribuir um valor a uma constante
       pi = 3.14; // Isso resultará em um erro // OUTPUT = Erro: Assignment to constant variable.

       /**  Observe, contudo, que 'na origem' o valor pode ser alterado.
        *   Isso porque o tipo de um dado valor nunca muda, mas o valor guardado numa variável pode ser trocado.
        *   Nesse sentido, fica mais fácil se você imaginar que a parte a esqueda do = é como uma gaveta e a parte a direita o conteúdo.
        *   Você não pode editar o conteúdo, tampouco tentar uma substituição, mas pode ir na origem e trocar o conteúdo.
        *       VEJA O EXEMPLO:
        *       
        *       const nome = "Paulo"; // se eu trocar "Paulo" por "João", não haverá erro. Mas tem que ser aqui, na origem
        */

// embora as const não possam ser ALTERADAS, eu posso fazer operações usando const (COM LET TAMBÉM)
        const primeiroNumero = 5; 
        const segundoNumero = 10; 
        const resultado = primeiroNumero * segundoNumero;
        console.log(resultado); // output = 50

/**     CONSTANTES E VALORES MUTÁVEIS
 *   
 *    Quando utilizamos const  com valores mutáveis, como arrays ou objetos, a constante ainda impede a reatribuição da variável em si, 
 *       mas os valores internos do objeto (ou elementos do array) podem ser modificados. 
 *     Isso ocorre porque, ao modificar um valor interno do objeto, não estamos reatribuindo a variável 
 *       (ela continua apontando para o mesmo local na memória), apenas alterando o conteúdo interno do objeto.
 *       VEJA O EXEMPLO:
 */
        const pessoa = { nome: 'João', idade: 30 };

        // A constante pessoa não pode ser reatribuída
        pessoa = { nome: 'Maria', idade: 25 }; // Erro: Assignment to constant variable.

        // No entanto, podemos modificar os valores internos do objeto
        pessoa.nome = 'Carlos';
        pessoa.idade = 32;

        console.log(pessoa); // Output: { nome: 'Carlos', idade: 32 }

        //EXEMPLO COM ARRAY
        const nomes = ['Fulano'];

        // Substituindo um valor dentro do array (não é uma reatribuição da constante)
        nomes[0] = 'Beltrano';

        console.log(nomes); // Output: ['Beltrano']

