/** 
 *      1.      operador []    - Ler/acessar um elemento do array (obter um valor em uma posição específica dentro de um array.)
 *                               Adicionar um elemento ao final do array (altera o tamanho o array)
 *                               Substituir elementos do array
 *      2.      .length        - Fornece o número de elementos presentes no array.
 *                               Adicionar Elementos ao Final do Array
 *                               Remover Elementos do Final do Array
 *                               Alterar o Comprimento do Array (para aumentar ou diminuir) 
 *      3.      .indexOf(buscar, posicao)     - Retorna o índice do PRIMEIRO elemento encontrado no array, ou -1 se não estiver presente.   
 *      4.      .lastIndexOf(buscar, posicao) - Retorna o índice do ÚLTIMO elemento encontrado no array, ou -1 se não estiver presente. 
 *                                                       A diferencia de indexOf(), este método realiza una búsqueda hacia atrás, desde el final de la cadena.   
 *      5.      .includes(buscar, posicao)   - Procura pelo  valor do atributo buscar dentro da cadeia de caracteres e retorna true ou false de acordo com o resultado. 
 *                                              O atributo 'buscar' é o texto que desejamos encontrar, e o atributo 'posicao' determina o índice a partir do qual queremos iniciar a busca. 
 *                                              Se o atributo posicao não for especificado, a busca começa a partir do início da cadeia.
 *      6.      .push()         - Adiciona um ou mais elementos ao FINAL do array e retorna o novo comprimento.
 *      7.      .unshift()      - Adiciona um ou mais elementos ao INÍCIO do array e retorna o novo comprimento.
 *      8.      .pop()          - Remove o ÚLTIMO elemento do array e o retorna.                        
 *      9.      .shift()        - Remove o PRIMEIRO elemento do array e o retorna.
 *     10.      .sort()         - ordena os elementos do array. 
 *     11.      .
 *     12.      .
 *     13.      .
 *                         
 */

//      1. LENDO/ACESSANDO um elemento de um array usando o operador [] 
        let fruits = ["Apple", "Orange", "Plum"];
            // lendo o primeiro elemento do array
            console.log( fruits[0] ); // output = Apple
            // lendo o segundo elemento do array
            console.log( fruits[1] ); // output = Orange
            // lendo o terceiro elemento do array
            console.log( fruits[2] ); // output = Plum 
            
            //se tentar aceder uma posição que não existe (maior que o tamanho do array), nos retornará um undefined.
            console.log( fruits[3] ); // output = undefined - nenhum elemento neste índice.
            console.log( fruits[-1] ); // output = undefined - nenhuma propriedade com este nome.

//      1. ADICIONANDO/ESCREVENDO um elemento ao final do array usando o operador []
            fruits[3] = "Banana"; // Adicionando um novo elemento na posição 3 do array

            console.log(fruits); //  output = [ 'Apple', 'Orange', 'Plum', 'Banana' ]

//      1. SUBSTITUIR  elementos em arrays usando o operador []
            fruits[1] = "Naranja" // Substituindo o segundo elemento (índice 1) do array

            console.log(fruits); //  output = [ 'Apple', 'Naranja', 'Plum', 'Banana' ]


//      2. Obter o Comprimento de um Array usando length
        // não esparso (também chamado de denso)
           let arrayDenso = [10, 20, 30, 40, 50];       // Cria um arrai chamado "arrayDenso" com 5 elementos
           console.log(arrayDenso.length); // Saída: 5  // Imprime no console o comprimento (número de elementos) do array, que é 5.              
                
        // arrays esparços
           let arrayEsparsa1 = [];                      // Cria um array vazio chamado arrayEsparsa1.
           arrayEsparsa1[2] = 'elemento1';              // Adiciona o elemento 'elemento1' ao índice 2 do array. Como o array estava vazio, isso cria espaços vazios nos índices 0 e 1.
           arrayEsparsa1[5] = 'elemento2';              // Adiciona o elemento 'elemento2' ao índice 5 do array. Isso cria espaços vazios nos índices 3 e 4.
           console.log(arrayEsparsa1.length); // Saída: 6       // Imprime no console o comprimento do array, que é 6. Mesmo que haja espaços vazios, o comprimento inclui esses espaços.

        // também podemos fazer da seguinte forma
           let frutas = ["Apple", "Orange", "Plum"];   // Cria um array chamado "frutas" com três elementos.
           let length = frutas.length;                 // Acessa a propriedade length do array e atribui seu valor a length.
           console.log(length); // Output: 3           // Imprime o comprimento do array no console.

//      2. Adicionar Elementos ao Final do Array usando length
                let colors = ["Red", "Green", "Blue"];  // Cria um array chamado colors com três elementos.
                colors[colors.length] = "Yellow";       // Adiciona o elemento "Yellow" ao final do array usando o índice colors.length.
                console.log(colors); // Output: ["Red", "Green", "Blue", "Yellow"]

//      2. Remover Elementos do Final do Array .length -1
                let fruitsList = ["Apple", "Orange", "Banana", "Mango"];  // Cria um array chamado fruitsList com quatro elementos.
                fruitsList.length = fruitsList.length - 1;                //  Reduz o comprimento do array em 1, removendo o último elemento.
                console.log(fruitsList); // Output: ["Apple", "Orange", "Banana"]  // Imprime o array resultante no console.

//      2. Alterar o Comprimento do Array usando length
        // aumentando o comprimento
                let numbers = [10, 20, 30];             //  Cria um array chamado numbers com três elementos.
                numbers.length = 5;                     // Aumenta o comprimento do array para 5, adicionando elementos undefined
                console.log(numbers); // Output: [10, 20, 30, undefined, undefined]

        // diminuindo o comprimento
                let a = [1,2,3,4,5];        // Aumenta o comprimento do array para 5, adicionando elementos undefined
                
                a.length = 3;              // Reduz o comprimento do array para 3. Isso remove os elementos do índice 3 em diante, resultando em [1, 2, 3].
                console.log(a) // output = [ 1, 2, 3 ]
                
                a.length = 0; // Exclua todos os elementos. a é [].
                console.log(a) // output = []
                
                a.length = 5; //  Aumenta o comprimento do array para 5. Isso adiciona dois elementos indefinidos (undefined) 
                console.log(a) // output = [ <5 empty items> ]  // ao final do array, resultando em [undefined, undefined, undefined, undefined, undefined].



//      3. indexOf()
        let fruta = ["Apple", "Orange", "Banana", "Orange"];

        console.log(fruta.indexOf("Banana")); // Output: 2

        // Exemplo com elemento presente
                let indexOfOrange = fruta.indexOf("Orange");
                console.log(indexOfOrange); // Output: 1

        // Exemplo com elemento ausente
                let indexOfGrape = fruta.indexOf("Grape");
                console.log(indexOfGrape); // Output: -1


//      4. lastIndexOf()
        let color = ["Red", "Blue", "Green", "Blue", "Yellow"];

        console.log(color.lastIndexOf("Green")) // Output: 2

        // Exemplo com elemento presente
                let lastIndexOfBlue = color.lastIndexOf("Blue");
                console.log(lastIndexOfBlue); // Output: 3

        // Exemplo com elemento ausente
                let lastIndexOfPurple = color.lastIndexOf("Purple");
                console.log(lastIndexOfPurple); // Output: -1


//      5. .includes(buscar, posicao)
        let sentence = "Hola, ¿cómo estás hoy?";

        // Exemplo com elemento presente
                let hasComo = sentence.includes("cómo");
                console.log(hasComo); // Saída: true

        // Exemplo com elemento ausente
                let hasAdios = sentence.includes("adiós");
                console.log(hasAdios); // Saída: false

        // Exemplo com posição especificada
                let hasEstasDesdePosicion = sentence.includes("estás", 10);
                console.log(hasEstasDesdePosicion); // Saída: false (porque a busca começa na posição 10)


//      6. .push() - para adicionar elementos ao final
        let numbersP = [1, 2, 3];
        numbersP.push(4, 5);      // push() é usado para adicionar os elementos 4 e 5 ao final do array numbersP
        console.log(numbersP);    // output = [ 1, 2, 3, 4, 5 ]  
        console.log(numbersP.length);   // output = 5           // retorna o tamanho do array

        // mas também é possível adicionar elementos e guardar o tamanho do array em uma nova variável
        let newLength = numbersP.push("Oi", "Vamos");    // push() é usado para adicionar os elementos"Oi" e "Vamos" ao final do array numbersP
                // newLength é uma variável que armazena o resultado da chamada do método push().
        console.log(numbersP);      // Output: [ 1, 2, 3, 4, 5, 'Oi', 'Vamos' ]
        console.log(newLength);    // Output: 7
        // Como o método push() modifica o array ao adicionar os elementos especificados, ao verificarmos a variável que guarda o tamanho do array, veremos o novo comprimento do array após a adição.


//      7. .unshift()  - para adicionar elementos ao INICIO 
        let animals = ["Dog", "Cat", "Bird"];
        animals.unshift("Elephant");
        console.log(animals);  // Output: [ 'Elephant', 'Dog', 'Cat', 'Bird' ]


//      8. .pop() - remover o último elemento
        let cities = ["New York", "Los Angeles", "Chicago"];
        let removedCity = cities.pop(); 
        console.log("Após o pop:", cities); // Output: Após o pop: ["New York", "Los Angeles"]
        console.log("Elemento removido:", removedCity); // Output: Elemento removido: Chicago

//      9. .shift() - remover o primeiro elemento
        let cars = ["Toyota", "Honda", "Ford"];
        let removedCar = cars.shift();
        console.log("Após o shift:", cars); // Output: Após o shift: ["Honda", "Ford"]
        console.log("Elemento removido:", removedCar); // Output: Elemento removido: Toyota
//      10. 


