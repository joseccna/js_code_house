
// /// Math

// console.log( Math.E ) // 2.718281828459045
// console.log( Math.PI ) // 3.141592653589793
// console.log(Math.min(55,22,66,8,7,4,1,-28))
// const meuArray = [55,44,77,2,36,5,-1]
// console.log(Math.min(...meuArray,  -Infinity))// colocando os 3 pontos (...) ai da pra vare o array


// const objeto = {
//     arg1: 'oi',
//     arg2: 50,

// }

// console.log({...objeto});

////////////////////////////////////////////////////////////

// // Ceil, Floor & Round


// const pi = Math.PI // 3.141592653589793
// // CEIL: retorna o número inteiro maior ou igual mais próximo
// console.log(Math.ceil(pi)) // 4
// // FLOOR: retorna o número inteiro mais próximo arredondado para baixo
// console.log(Math.floor(pi)) // 3
// // ROUND: retorna o valor de um número arredondado, o número inteiro mais próximo
// console.log(Math.round(pi)) // 3




////////////////////////////////////////////////////////////////

/// Random ) gera um número aleatorio

// // números entre 0 e 10
// console.log(Math.random() * 10)
// // números entre 0 e 50
// console.log(Math.random() * 50)
// // números entre 20 e 50
// console.log(Math.random() * 30 + 20)

// execicios.

// const geradorNumero = () => {
//     return Math.round(Math.random() * 30 + 20);
//    }


// let numeros = [];


//    function meuArray(numero){

//     for(let i = 0; i < numero; i++){
//         numeros.push(geradorNumero());
//     }
//     return numeros;
//    }

// function arrayRaiz (arrayDeNumeros){

//     let arry = []

//     for (let i = 0; i < arrayDeNumeros.length; i++){
//         arry.push(Math.sqrt(arrayDeNumeros[i]));
//     }
//     return arry;

// }


//    let numero = Number(prompt('Digite um numero'));
//    let meusArray = meuArray(numero);
//    let arrayDeRaiz = arrayRaiz(meusArray);

// console.log(meusArray);
// console.log(arrayDeRaiz);




////////////////////////////////////////////////////////////////



///  Date


// console.log(new Date())
// Mon May 01 2023 11:39:55 GMT-0300 (Horário Padrão de Brasília)

// ou 

// let novaData = new Date();
// console.log(novaData);

// Construtor
// A convenção com a que se trabalha no JavaScript para 
// construir datas conta os meses a partir do 0 (0 = 
// janeiro, 11 = dezembro) e os dias a partir do 1:

// let minhadata = new Date(1989, 5 ,19,10,20,15);

// console.log(minhadata);


// Construtor
// Também pode criar uma data a partir de uma string 
// com formato específico:


// const quaseNatal = new Date("1989-06-19 23:59:59")

// console.log(quaseNatal.getFullYear());
// console.log(quaseNatal.getDate());
// console.log(quaseNatal.getDay());
// console.log(quaseNatal.getHours());
// console.log(quaseNatal.getMonth());

// const data = new Date("December 17, 2024")
// console.log(data.toDateString()) // Tue Dec 17 2024
// console.log(data.toLocaleString()) // 17/12/2024, 00:00:00
// console.log(data.toLocaleDateString()) // 17/12/2024
// console.log(data.toTimeString()) // 00:00:00 GMT-0300 (Horário 
// // Padrão de Brasília)

// const natal = new Date("December 25, 2024")
// const data = new Date("December 10, 2024")
// console.log(natal - data) // 1296000000
// const milissegundosPorDia = 86400000
// console.log((natal - data) / milissegundosPorDia) // 15


//////////////////////////////

// Para praticar
// Descrição da atividade. 
// ✓ Crie uma função que recebe uma data e exibe ela de 3 
// maneiras diferentes;
// ✓ Para testar, envie a sua data de nascimento.

let data = (prompt('Digite seu nascimento'));
1981
console.log(data);

let dataNova = new Date(data);


function criaData(dataNova){
    console.log(dataNova.toDateString());
    console.log(dataNova.getDay());
    console.log(dataNova.getHours());
}

criaData(dataNova);
////////////////////////////////////////////