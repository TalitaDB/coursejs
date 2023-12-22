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

//        TIPOS DE OBJETOS
        // array
        let frutas = ['maçã', 'banana', 'laranja']; 

        // objeto literal
        let pessoa = {          
                nome: 'João',
                idade: 25,
                cidade: 'Exemploville'
        };

        // função
      function saudacao(nome) {
        console.log('Olá, ' + nome + '!');
      }