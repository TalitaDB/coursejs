/**     Undefined e Null são tipos especiais que possuem um só valor cada, respectivamente undefined null.
 * 
 *      null        -   palavra-chave da linguagem avaliada com um valor especial
 *                      normalmente utilizado (de forma voluntária/intencional) para indicar a ausência de um valor
 *                          quando utilizamos null, diz-se voluntariamente ao JS que queremos que ele não aponte para nenhum local na memória
 *                      pode ser usado para indicar “nenhum valor” para números e strings, bem como para objetos
 *                      
 *      undefined   -   valor primitivo utilizado quando uma variável não teve valor atribuído
 *                      indica que uma variável ou propriedade foi declarada, mas não foi inicializada.
 *                      Também é o valor retornado quando você tenta acessar uma propriedade que não existe em um objeto ou array.
 * 
 */
let sobrenomeAluno = null; 
console.log(sobrenomeAluno) // output = null

let variavelNaoInicializada;  // variavelNaoInicializada é undefined
let meuObjeto = {};
console.log(meuObjeto.propriedadeInexistente);  // A propriedade inexistente é undefined


/**     Equivalência e Compatibilidade:
 * 
 *  null e undefined são considerados equivalentes em termos de valor quando você utiliza o operador de igualdade ==.
 *  No entanto, eles não são estritamente iguais. 
 *      Use === para verificar igualdade estrita e considerar diferenças nos tipos.
 */
console.log(null == undefined);  // true
console.log(null === undefined);  // false
