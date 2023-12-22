
/* O objeto Math em JavaScript é um objeto embutido que fornece métodos e propriedades para realizar operações matemáticas

        Ele não é um construtor e, portanto, não é instanciado como outros objetos. 
        Em vez disso, você pode acessar diretamente os métodos e propriedades do objeto Math sem criar uma instância.

    
    O termo "objeto" no contexto do "objeto Math" em JavaScript pode ser um pouco enganador para algumas pessoas. 
        Ao contrário dos objetos que você cria em JavaScript usando construtores, como new MinhaClasse(), 
            o objeto Math é uma instância única e global da classe Math. 
        Em outras palavras, ele é mais como um conjunto de métodos e propriedades estáticos reunidos sob um mesmo nome, 
            o que é uma convenção comum em muitas linguagens de programação.

    O termo "métodos" é utilizado em programação para descrever funções que são associadas a objetos. 
        No contexto de objetos, um método é uma função que está vinculada a um objeto específico e é chamada para realizar alguma operação relacionada a esse objeto. Os métodos geralmente têm acesso aos dados do objeto no qual são chamados.
        No caso do objeto Math em JavaScript, ele contém uma coleção de funções matemáticas que são organizadas como métodos. 
*/

// !!!!!      Métodos para Funções Matemáticas Básicas:

// Math.abs(x): Retorna o valor absoluto de x.
let numeroNegativo = -5;
let absoluto = Math.abs(numeroNegativo);
console.log(absoluto); // Saída: 5

// Math.round(x): Retorna o valor de x arredondado para o inteiro mais próximo.
let numeroDecimal = 3.75;
let arredondado = Math.round(numeroDecimal);
console.log(arredondado); // Saída: 4

// Math.floor(x): Retorna o maior inteiro menor ou igual a x.
let numeroDecimal1 = 8.99;
let arredondadoParaBaixo = Math.floor(numeroDecimal1);
console.log(arredondadoParaBaixo); // Saída: 8

// Math.ceil(x): Retorna o menor inteiro maior ou igual a x.
let numeroDecimal2 = 2.01;
let arredondadoParaCima = Math.ceil(numeroDecimal2);
console.log(arredondadoParaCima); // Saída: 3

// Math.max(x, y, ...): Retorna o maior número entre os argumentos.
let maiorNumero = Math.max(10, 5, 8, 15);
console.log(maiorNumero); // Saída: 15

// Math.min(x, y, ...): Retorna o menor número entre os argumentos.
let menorNumero = Math.min(10, 5, 8, 15);
console.log(menorNumero); // Saída: 5


// !!!!!      Métodos Trigonométricos:

// Math.sin(x), Math.cos(x), Math.tan(x): Funções trigonométricas.
let anguloEmRadianos = Math.PI / 2;
let senoDoAngulo = Math.sin(anguloEmRadianos);
console.log(senoDoAngulo); // Saída: 1 (seno de 90 graus)

// Math.asin(x), Math.acos(x), Math.atan(x): Funções trigonométricas inversas.
let senoInverso = Math.asin(0.5);
console.log(senoInverso); // Saída: 0.5235987755982988 (em radianos, aproximadamente 30 graus)


// !!!!!      Métodos Exponenciais e Logarítmicos:

// Math.pow(x, y): Retorna a base elevada à potência do expoente.
let potencia = Math.pow(2, 3);
console.log(potencia); // Saída: 8 (2 elevado à potência de 3)

// Math.sqrt(x): Retorna a raiz quadrada de x.
let raizQuadrada = Math.sqrt(9);
console.log(raizQuadrada); // Saída: 3 (raiz quadrada de 9)

// Math.exp(x): Retorna e elevado à potência de x.
let exponencial = Math.exp(2);
console.log(exponencial); // Saída: 7.3890560989306495 (e elevado à potência de 2)

// Math.log(x): Retorna o logaritmo natural de x.
let logaritmoNatural = Math.log(10);
console.log(logaritmoNatural); // Saída: 2.302585092994046 (logaritmo natural de 10)


// !!!!!      Constantes:

// Math.PI: Representa a constante matemática π (pi).
console.log(Math.PI); // Saída: 3.141592653589793 (valor de π)

// Math.E: Representa a constante matemática e.
console.log(Math.E); // Saída: 2.718281828459045 (valor de e)


// ECMAScript 6 adiciona novas funções ao objeto Math:

// Math.cbrt(27) // => 3: raiz cúbica
let raizCubica = Math.cbrt(27); // raizCubica será igual a 3

// Math.hypot(3, 4) // => 5: raiz quadrada da soma dos quadrados de todos os argumentos
let hipotenusa = Math.hypot(3, 4); // hipotenusa será igual a 5

// Math.log10(100) // => 2: logaritmo na base 10
let log10 = Math.log10(100); // log10 será igual a 2

// Math.log2(1024) // => 10: logaritmo na base 2
let log2 = Math.log2(1024); // log2 será igual a 10

// Math.log1p(x) // Logaritmo natural de (1+x); preciso para valores muito pequenos de x
let log1p = Math.log1p(0.01); // log1p será aproximadamente 0.0099503

// Math.expm1(x) // Math.exp(x)-1; o inverso de Math.log1p()
let expm1 = Math.expm1(0.01); // expm1 será aproximadamente 0.0100502

// Math.sign(x) // -1, 0 ou 1 para argumentos <, == ou > 0
let sinal = Math.sign(-5); // sinal será igual a -1

// Math.imul(2, 3) // => 6: multiplicação otimizada de inteiros de 32 bits
let multiplicacao = Math.imul(2, 3); // multiplicacao será igual a 6

// Math.clz32(0xf) // => 28: número de bits zero à esquerda em um inteiro de 32 bits
let zerosAEsquerda = Math.clz32(0xf); // zerosAEsquerda será igual a 28

// Math.trunc(3.9) // => 3: converter para um número inteiro truncando a parte fracionária
let truncado = Math.trunc(3.9); // truncado será igual a 3

// Math.fround(x) // Arredondar para o número de ponto flutuante de 32 bits mais próximo
let arredondadoParaFloat32 = Math.fround(3.14); // arredondadoParaFloat32 será aproximadamente 3.140000104904175

// Math.sinh(x) // Seno hiperbólico. Também Math.cosh(), Math.tanh()
let senoHiperbolico = Math.sinh(1); // senoHiperbolico será aproximadamente 1.1752011936438014

// Math.asinh(x) // Arco seno hiperbólico. Também Math.acosh(), Math.atanh()
let arcoSenoHiperbolico = Math.asinh(1); // arcoSenoHiperbolico será aproximadamente 0.881373587019543