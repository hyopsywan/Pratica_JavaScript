// let nome = "Diogo";
// let idade = 30;

//* CONCATENAÇÃO
// console.log("Nome: " + nome + ", idade: " + idade);

//* INTERPOLAÇÃO
// console.log(`Nome: ${nome}, idade: ${idade}`);

// console.log(typeof nome);
// console.log(typeof idade);


// let soma = "5" + 3; // 53
// let sub = "5" - 3; // 2

// console.log(soma);
// console.log(sub);

// console.log(typeof soma);
// console.log(typeof sub);

// convertendo valores
// let numero = "ab" // string

// let convertido = Number(numero) // converte o valor para number

// console.log(typeof convertido);


//* OPERADORES RELACIONAIS

// VALIDA IGUALDADE DE VALOR (SOMENTE VALOR)
// "10" == 10 -> true

// VALIDO IGUALDADE DE VALOR E TIPO DE DADO
// "10" === 10 -> false


//* &&
//* ||
//* !

// let opcao = 2

// switch(opcao) {
//     case 1:
//         hgdhasghd
//         break;
//     case 2:
// }


//* ESTRUTURA DE REPETIÇÃO
// let frutas = ["Maçã", "Banana", "Acerola", "Uva"];

// console.log(frutas);

// frutas.forEach(function(fruta) {
//     console.log(`Fruta: ${fruta}`);
// })

// frutas.forEach(fruta => console.log(`Fruta: ${fruta}`));


//* FUNÇÕES NATIVAS JS

//* FUNÇÃO MAP()
// Percorre uma lista e cria uma nova lista com base em uma condição

// let numeros = [1, 2, 3, 4]

// let numerosDobrados = numeros.map(function(num) {
//     return num * 2
// })

// numerosDobrados = [2, 4, 6, 8]
// console.log(numerosDobrados);

//  ou assim:
//  Arrow function com retorno implícito

// let numerosDobradosArrow = numeros.map(num => num * 2);


//* FILTER
// Filtra os elementos com base em uma condição

// let numeros = [5, 10, 15, 20];

// let maioresQueDez = numeros.filter(num => num > 10);

// maioresQueDez = [15, 20]
// console.log(maioresQueDez);

//* REDUCE
// Reduz os valores de um array para um único valor

// let numeros = [1, 2, 3, 4]

//  acumulador inicia em 0
//  variavel auxiliar 
//  acumulador começa em 0 e soma com o auxiliar até o último valor do array

// let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);

// console.log(soma);


//* FIND 
// Retorna o primeiro elemento que atende a condição

// let produtos = [
//     { id: 1, nome: "Teclado", preco: 50 }, // produto
//     { id: 2, nome: "Mouse", preco: 30 },
//     { id: 2, nome: "Caderno", preco: 30 }
// ]


// let item = produtos.find(produto => produto.id === 2);

// console.log(item);

//* DIFERENÇA ENTRE FILTER E FIND
//  find -> retorna somente o primeiro elemento que ele encontra com a condição
//  filter -> retorna todos os elementos que encontra com a condição
//  arrow function  /  função lambda
// let itemFiltrado = produtos.filter(produto => produto.id === 2);

// console.log(itemFiltrado);


//* SPLIT
// Divide a string em partes, transformando em um array

// let frase = "JS é top";

// let palavras = frase.split(" ");
// console.log(palavras);

//* TRIM
// trim remove espaços no inicio e final de string
// let nome = "      Paulo"
// let nomeLimpo = nome.trim();

// console.log(nome);
// console.log(nomeLimpo);

//* INCLUDES
// Verifica se existe um valor dentro de uma lista e retorna um booleano
// verdadeiro ou falso

// let frutas = ["maçã", "banana"];

// let frutasIncludes = frutas.includes("maçã");
// console.log(frutasIncludes); // true

// toLowerCase() -> transforma o texto em minúsculo
// toUpperCase() -> transforma o texto em maiúsculo
// let nome = "KESSIA";
// let cargo = "instrutora";

// console.log(nome.toLowerCase()) // kessia
// console.log(cargo.toUpperCase()) // INSTRUTORA

//* FOREACH
// let nomes = ["Guilherme", "João", "Maria"];

// console.log(nomes);

// nomes.forEach(nome => console.log(nome));

//* SOME
// Verifica se pelo menos um item atende a condição
// retorna booleano

// let numeros = [1, 3, 5, 8];

// let temPar = numeros.some(num => num % 2 === 0);
// console.log(temPar); // true

// * EVERY
//  Verifica se TODOS os elementos atendem a condição

// let todosPares = numeros.every(num => num % 2 === 0);
// console.log(todosPares); // false

//* SORT
// Ordena os elementos do array

// let numeros = [3, 10, 5, 2, 4];
// let letras = ["c", "a", "x", "h"];

// para letras
// letras.sort();
// console.log(letras);

// para números
// numeros.sort((a, b) => a - b);
// console.log(numeros);


//* REVERSE
//Inverte a oderm dos elemntos

// let numeros = [1, 2, 3];

// numeros.reverse();
// console.log(numeros); //[1, 2, 3]

//* JOIN
//Juntas o elemntos de um array em uma string

// let palavra = ["Js", "é", "legal", "!"];

// let frase = palavra.join(" ");

// console.log(frase); 


//* ADICIONANDO E REMOVENDO ELEMNTOS DO ARRAY
//PUSH
//POP
//SHIFT
//UNSHIFT

// let lista = [ "A", "B"];

//* PUSH -> adiciona elemntos no final do array
// lista.push("C");
// console.log(lista);

//* POP -> Remove o elemnto no final da lista 
// lista.pop();
// console.log(lista);

//* SHIFT -> Remove elemtos do começo da lista
// lista.shift();
// console.log(lista);

// UNSHIFT -> Adicionar elementos no inicio da lista 
// lista.unshift("A");
// console.log(lista);

// * SLICE
//Cria uma cópia de uma parte da lista 

/*
    Array.slice(inicial, final)

    inicial -> onde começa
    final -> onde termina
*/

// let numeros = [1, 2, 3, 4, 5];

// let parte = numeros.slice(1, 3); //vai ate a posição mas nao pega ele
// console.log(parte); //2, 3 (na posição um da lista, temos o 2, e percorrendo ate a posição três ele verifica até o 4 da lista, mas naoimprime ele, é Até)

// * SPLICE
/*
    array.splice(index, count, item1, ..., itemX);

    index -> posição do elemnto no array
    count -> numero de elementos a serem removidos (pode ser 0)
    item1, ..., itemX -> itens a serem adicionados

*/
// Remover ou adicionar elemntos em qualquer posição

// let num = [1, 2, 3, 4]

// Removendo elementos sem adicionar 
// num.splice(1, 1); // antes da virgula, informa a posição, e depois da virgula a quantidade de elementos a serem excluidos apartir de lá
// console.log(num); // 1, 3, 4

// Removendo elementos e adicionando mais dois elementos
//  let frutas = ["maçã", "banana", "uva", "manga"];

//  frutas.splice(0, 3, "limão", "kiwi")
//  console.log(frutas); //(limao, kiwi, manga)

// frutas.splice(2, 0, "kiwi", "limão"); //ele vai naposição dois e torna ela o texto que colocamos, fazendo o resto ser jogado pro final
// console.log(frutas); //['maçã', 'banana', 'kiwi', 'limão', 'uva', 'manga']

//* REPLACE 
//Substitui uma parte da string

/*
    replace.(valorProcurado, "valorQueSubstitui")
*/

// let texto = "Olá, Mundo!"

// let novoTexto = texto.replace ("Mundo", "Cliente");
// console.log(novoTexto)

//* NOSSAS FUNÇÕES 

//? função comum
// function exibirMensagem() {
//     console.log("Bem vindo(a)!")
// };

// exibirMensagem();

//? função com parametro
// function cumprimentar(nome) {
//     console.log(`Olá, ${nome}`)
// }

// cumprimentar("Hanna");
// cumprimentar("Mike");

//? função com mais parâmetro
// function somar(n1, n2) {
//     let soma = n1 + n2
//     console.log(soma)
// };
// somar(25, 25);

//? Outra forma de fazer a função somar: 
// const somar = (n1, n2) => n1 + n2;
// console.log(somar(1,2));

//* PROMPT
//Recebe/Solicita uma informação de usuário
//O valor recebido pelo prompt() geralmente é string

let nome = prompt("Digite seu nome:");
console.log(nome);
alert(nome);

//recebendo um numero e convertendo
//Number() -> Converte de forma genérica (int e float)
let idade = Number(prompt("Digite sua idade:"));

//ParseInt() converte o valor para um numero inteiro
idade = parseInt(prompt("Digite sua idade:"));

//ParseFloat() converte o valor para um numero decimal
idade = parseFloat(prompt("Digite sua altura:"));

