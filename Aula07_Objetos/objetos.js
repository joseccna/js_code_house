// let xicara = {
//     cor: "branca",
//     forma: "redonda",
//     peso: 5,
//     capacidade: 10
//    }
//    console.log(xicara);
// criação de um objeto.
//    const objeto ={
//     nome: 'carambola',
//     cor: 'amarelo',
//     peso: 0.2,
//     tipo: 'fruta'
//    }
// como é feito a imcrementação de objeto.
//    objeto.peso =3;
//    objeto['cor'] = 'rosa';

// verificar a saida do objeto.

//    console.log(objeto.cor);
//    console.log(objeto.nome);
//    console.log(objeto.peso);
//    console.log(objeto['tipo']);

/////////////////////////////////////////////////////////
// pratica

// const pizza ={
//     tamanho: 'familia',
//     sabor: 'calabresa com queijo',
//     borda: 'recheada'
// }

// pizza.borda='sem recheio';

// console.log(pizza.tamanho);
// console.log(pizza.sabor);
// console.log(pizza['borda']);

//////////////////////////////////////////

//Construtor e New.


// function xicara(cor, forma, peso, 
//     capacidade) {
//      this.cor = cor;
//      this.forma = forma;
//      this.peso = peso;
//      this.capacidade = capacidade;
//     };


// const xicara1 = new xicara("branca", "redonda", 5, 10);
// const xicara2 = new xicara("rosa", "quadrada", 8, 15);
// console.log(xicara1);
// console.log(xicara2);

///////////////////////

// function pizza(tamanho, sabor, borda) {
//     this.tamanho = tamanho;
//     this.sabor = sabor;
//     this.borda = borda;
// }

// const pizza1 = new pizza('pequena', 'quatro queijo', 'sem borda recheda');

// const pizza2 = new pizza('media', 'portuguesa', 'borda recheada');

// const pizza3 = new pizza('grande', 'frango com captiry', 'borda recheada');

// console.log(pizza1);
// console.log(pizza2);
// console.log(pizza3);


///////////////////////////////////////////////////////////////

//Métodos.


// function pessoa(nome, idade, enderço) {
//     this.nome = nome;
//     this.idade = idade;
//     this.rua = enderço;
//     this.falar = function () { 
//     console.log("OLÁ, SOU " + this.nome) 
//     }
//    }
//    const pessoa1 = new pessoa("Homer", 39, "Av.Sempre-verde 742");
//    const pessoa2 = new pessoa("Marge", 36, "Av.Sempre-verde 742");
//    pessoa1.falar();
//    pessoa2.falar();

   /////////////////////////////////////////////////////////////////



//    let pessoa = {
//     nome: "Mariana",
//     idade: 25,
//     informacoes: function () {
//     return this.nome + " tem " + this.idade + " anos"
//     }
//    }
//    //sai com o objeto pessoa e o metodo informaçoes.
//    console.log(pessoa.informacoes())
//////////////////////////////////////////////////////////////////////

// function pizza(tamanho, sabor, borda, informacoes) {
//     this.tamanho = tamanho;
//     this.sabor = sabor;
//     this.borda = borda;
//     this.informacoes = function () {
//         return this.sabor + " tem o tamanho: " + this.tamanho + " com a borda: " + this.borda
//         }
// }

// const pizza1 = new pizza('pequena', 'quatro queijo', 'sem borda recheda');

// const pizza2 = new pizza('media', 'portuguesa', 'borda recheada');

// const pizza3 = new pizza('grande', 'frango com captiry', 'borda recheada');

// console.log(pizza1.informacoes());
// console.log(pizza2.informacoes());
// console.log(pizza3.informacoes());


//////////////////////////////////////
// Operador In

// const pessoa = { 
//     nome: "Homer", 
//     idade: 39, 
//     rua: "Av. Sempre-verde 742"
//    };
// //    //Retorna true, porque a chave "nome" existe no objeto pessoa1
// //    console.log("nome" in pessoa);
// //    //Retorna false, porque a chave "origem" não existe no objeto pessoa1
// //    console.log("origem" in pessoa);

//    for (const propriedade in pessoa) {
//     console.log(pessoa[propriedade]);
//    }


// const pessoa = { 
//     nome: "Homer", 
//     idade: 39, 
//     rua: "Av. Sempre-verde 742"
//    };
//    //Percorremos todas as propriedades do objeto com o ciclo  for...In
//    for (const propriedade in pessoa) {
//     console.log(propriedade);
//    }

//       //Percorremos todas as propriedades e mostra os valores
//    for (const propriedade in pessoa) {
//     console.log(pessoa[propriedade]);
//    }

   //////////////////////////////////////////////////

   //  Classes
//  As classes do JavaScript, introduzidas na versão 
// ES6, são basicamente modelos para objetos 
// com uma sintaxe muito mais clara e simples.

// class Carro {
//     constructor(marca, ano, cor) {
//     this.marca = marca;
//     this.ano = ano;
//     this.cor = cor;
//     }

//     apresentar() {
//     var idade = 2023 - this.ano;
//     console.log("O " + this.marca + " é " +
//    this.cor + " e tem " + idade + " anos")
//     }

//    }

//    const meuCarro = new Carro("Ford", 2014, 
//    "vermelho");

//    meuCarro.apresentar()


class Produto {
    construtor(nome, preco) {
    this.nome = nome.toUpperCase();
    this.preco = parseFloat(preco);
    this.vendido = false;
    }
    somaICMS() {
    this.preco = this.preco * 1.21;
    }
    vender() {
    this.vendido = true;
    }
   }

   const produto1 = new Produto("arroz", "125");
   const produto2 = new Produto("macarrão", "50");

  produto1.somaICMS();
   produto2.somaICMS();
   produto1.vender();

