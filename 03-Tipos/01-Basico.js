/**     REMEMORANDO:
 * 
 *  Variáveis: representam VALORES em um programa.
 *  Valores: dados reais atribuídos às variáveis.
 *  Tipos: indicam a natureza dos dados armazenados em uma variável
 */

/**  Os tipos (de dados) de JS podem ser divididos em duas categorias: 
 * 
 *      TIPOS PRIMITIVOS:   valores imutáveis   Strings – numbers – booleans – undefined – null - Symbol (novo em ECMAScript 6).
 *      TIPOS DE OBJETO:    valores mutáveis    Array - objetos - funções e outros  
 */ 

// TIPOS DE DADOS PRIMITIVOS

        let nome = "Talita"; //string
        let nome2 = 'Talita'; //string
        let nome3 = `Talita`; //string

        const numberOne = 123; // number
        const numberTwo = 12.32; // number

        /* Dentro de aspas e crase = STRING = texto
        Fora de aspas e crase = NUMBER = número
        */

        const aprovado = falso // Boolean = true - falso

        let nomeAluno; //undefined

        let sobrenomeAluno = null; // Nulo        


/**     OBJETOS
 *
 *  Qualquer valor JS que não seja um número, uma string, um booleano, um símbolo, null ou undefined é um objeto.
 *  Um objeto (ou seja, um membro do tipo objeto) é uma coleção de propriedades onde cada propriedade tem um nome e um valor (seja um valor primitivo ou outro objeto).
 *  
 *  Um objeto JS comum é uma coleção não ordenada de valores nomeados.
 *  A linguagem também define um tipo especial de objeto, conhecido como array, que representa uma coleção ordenada de valores numerados.
 * 
 *      Além de objetos básicos e arrays, o JS define vários outros tipos de objetos úteis.
 *      Um objeto Set representa um conjunto de valores. 
 *      Um objeto Map representa um mapeamento de chaves para valores. 
 *      Vários tipos de "arrays tipados" facilitam operações em arrays de bytes e outros dados binários. 
 *      O tipo RegExp representa padrões textuais e permite operações sofisticadas de correspondência, pesquisa e substituição em strings. 
 *      O tipo Date representa datas e horas e suporta aritmética de data rudimentar. 
 *      Error e seus subtipos representam erros que podem surgir ao executar código JavaScript.
 * 
 *      Como qualquer valor JS que não é um valor primitivo, funções e classes são um tipo especializado de objeto. 
 */
