// Retornar Funções por Parâmetro

// function porCadaUm(array, funcao) {
//     for (const item of array) {
//     funcao(item);
//     }
//    }
//    const numeros = [1, 2, 3, 4];
//    porCadaUm(numeros, console.log);


// const quadrados = []
// const numeros = [1, 2, 3, 4];
// function porCadaUm(array, funcao) {
//  for (const item of array) {
//  funcao(item);
//  }
// }
// porCadaUm(numeros, (o) => {
//  quadrados.push(o * 2)
// })
// console.log(quadrados) // [2, 4, 6, 8]

////////////////////////////////////////////////////////////

//For Each

// const numeros = [1, 2, 3, 4, 5, 6]
// numeros.forEach((num) => {
//  console.log(num + 10 /* exemplo + 10 */) // tem que colocar o operador para utilizar
// })


//////////////////////////////////////////////////

// Find

// const cursos = [
//     { nome: 'Javascript', preco: 15000 },
//     { nome: 'ReactJS', preco: 22000 },
//    ]
//    const resultado = cursos.find((o) => o.nome === "ReactJS")
//    const resultado2 = cursos.find((o) => o.nome === "Python")

//    console.log(resultado) // {nome: 'ReactJS', preco: 22000}
//    console.log(resultado2) // undefined


   ///////////////////////////////


   // Filter

//    const cursos = [
//     { nome: "JavaScript", preco: 15000 },
//     { nome: "ReactJS", preco: 22000 },
//     { nome: "AngularJS", preco: 22000 },
//     { nome: "Dev Web", preco: 16000 },
//    ]
//    const resultado = cursos.filter((o) =>
//    o.nome.includes("JS"))
//    const resultado2 = cursos.filter((o) =>
//    o.preco < 14000)
//    console.log(resultado)
//    //[{nome: "ReactJS", preco: 22000},
//    //{nome: "AngularJS", preco: 22000}]
//    console.log(resultado2) // []


   ///////////////////////////

   // Some

//    const cursos = [
//     { nome: "JavaScript", preco: 15000 },
//     { nome: "ReactJS", preco: 22000 },
//     { nome: "AngularJS", preco: 22000 },
//     { nome: "Dev Web", preco: 16000 },
//    ];
//    console.log(cursos.some((o) => o.nome ==
//    "Dev Web")) // true
//    console.log(cursos.some((o) => o.nome ==
//    "VueJS")) // false


/////////////////////////////////////

// Map, cira um novo array.

// const cursos = [
//     { nome: "JavaScript", preco: 15000 },
//     { nome: "ReactJS", preco: 22000 },
//     { nome: "AngularJS", preco: 22000 },
//     { nome: "Dev Web", preco: 16000 },
//    ];
//    const nomes = cursos.map((o) => o.nome)
//    console.log(nomes)
//    // [ 'JavaScript', 'ReactJS', 'AngularJS', 'Dev Web' ]

// outro exemplo

//    const cursos = [
//     { nome: "JavaScript", preco: 15000 },
//     { nome: "ReactJS", preco: 22000 },
//     { nome: "AngularJS", preco: 22000 },
//     { nome: "Dev Web", preco: 16000 },
//    ];
//    const atualizado = cursos.map((o) => {
//     return {
//     nome: o.nome,
//     preco: o.preco * 1.25
//     }
//    })
//    console.log(atualizado)
//    /* [
//     { nome: 'JavaScript', preco: 18750 },
//     { nome: 'ReactJS', preco: 27500 },
//     { nome: 'AngularJS', preco: 27500 },
//     { nome: 'Dev Web', preco: 20000 }
//    ] */

    /////////////////////////////////////////////////////////////

// Reduce

// const numeros = [1, 2, 3, 4, 5, 6]
// const total =
// numeros.reduce((acumulador, elemento) =>
// acumulador + elemento, 0)
// console.log(total) // 21


/////////////////////////////////////////////////////////////

//Sort

// const numeros = [40, 1, 5, 200];
// var crescente = numeros.sort((a, b) => a - b);
// console.log(crescente)// [ 1, 5, 40, 200 ]
// var decrescente = numeros.sort((a, b) => b- a);
// console.log(decrescente) // [ 200, 40, 5, 1 ]
 

// outro exemplo

// const items = [
//     { nome: 'Pikachu', preco: 21 },
//     { nome: 'Charmander', preco: 37 },
//     { nome: 'Pidgey', preco: 45 },
//     { nome: 'Squirtle', preco: 60 }
//    ]
//    items.sort((a, b) => {
//     if (a.nome > b.nome) {
//     return 1;
//     }
//     if (a.nome < b.nome) {
//     return -1;
//     }
//     // a é igual a b
//     return 0;
//    })
//    console.log(items);

////////////////////////////////////////////////
