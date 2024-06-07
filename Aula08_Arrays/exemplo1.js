// const listaNomes = [];
// let quantidade = 5;
// //Uso de do...while para carregar nomes no array por prompt()
// do {
//  let entrada = prompt("Inserir nome");
//  listaNomes.push(entrada.toUpperCase());
//  console.log(listaNomes.length);
// } while (listaNomes.length != quantidade)

// //Concatenação com um novo array de dois elementos
// const novaLista = listaNomes.concat(["ANA", "EMA"]);
// //Saída com salto de linha após cada item usando join
// console.log(novaLista.join("\n"));


/////////////////////////////////////////


// const nomes = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanessa']
// console.log(nomes)
// // Recebo como parâmetro o elemento a ser eliminado
// const eliminar = (nome) => {
//  // Busco seu índice no array
//  let index = nomes.indexOf(nome)
//  // Se ele existir, ou seja, for diferente de -1, será eliminado com splice
//  if (index !== -1) {
//  nomes.splice(index, 1)
//  console.log(nomes)
//  }
//  else {
//  console.log("O nome " + nome + " não foi encontrado!")
//  }
// }

// let nomeEliminar = prompt("Qual nome deseja eliminar?")
// eliminar(nomeEliminar);
/////////////////////////////////////////////

// For…Of
// A sentença for...of é um iterador que percorre o 
// array do início ao fim, e, em cada iteração, acessa 
// o elemento em questão através da referência que 
// declaramos. 
// Para cada iteração, é executado o bloco de 
// código que definimos entre chaves.

// const produtos = [
//     { id: 1, nome: "Arroz" },
//     { id: 2, nome: "Macarrão" },
//     { id: 3, nome: "Pão" }
//    ];

//    for (let i = 0; i < produtos.length; i++){
//     console.log(produtos[i].nome);
//    }


//    for (const produto of produtos) {
//     console.log(produto.id, produto.nome);
//    }

   
//    for (const item of produtos) {
//     console.log(item.nome);
//    }

////////////////////////////////////////////////////////



class Produto {
    constructor(nome, preco) {
    this.nome = nome.toUpperCase();
    this.preco = parseFloat(preco);
    this.vendido = false;
    }
    somaICMS() {
    this.preco = this.preco * 1.21;
    }
   }
   //Declaramos um array de produtos para armazenar objetos
   const produtos = [];
   produtos.push(new Produto("arroz", "125"));
   produtos.push(new Produto("macarrão", "70"));
   produtos.push(new Produto("pão", "50"));
   //Iteramos o array com for...of para modificar todos
   for (const produto of produtos){
    produto.somaICMS();
   }
   
   console.log(produtos);