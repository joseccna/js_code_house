// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//    }
   ///////////////////////////////////

//    Solicitamos um valor ao usuário
//    let numero = parseInt(prompt("Inserir Número"));
//    // A cada repetição, calculamos o número inserido vezes o número 
// //    da repetição (i)
//    for (let i = 1; i <= 10; i++) {
//     let resultado = numero * i;
//     console.log(numero + " X " + i + " = " + resultado);
//    }
////////////////////


// let numero = parseInt(prompt("Inserir Número"));
// function produtorio(numero) {
//  let resultado = 1;
//  for (let i = 1; i <= numero; i++) {
//  resultado = resultado * i;
//  }
//  console.log("Produtorio de " + numero + " = " + resultado);
// }
// produtorio(numero)

////////////////////////////////////////////

/// pratica

// Descrição
// Utilizando o “for” crie uma função que:
// ✓ Receba um número de 1 a 10
// ✓ Exiba todos os número que são menores que ele

// function numeroRecebe(){  // função 
//    let numero1 = parseInt(prompt('Digite um numero: ')); //pasa para inteiro
//     if(isNaN(numero1)){ ///verificação se é numero
//         alert("Não é numero!");
//     }


//    for( let i = 1; i < numero1; i++){ // loop for
//     console.log(i);
//    }

// }

// numeroRecebe(); //chamar a função.

/////////////////////////////////////////////////////

// while enquanto

// let entrada = prompt("Inserir um dado");
// //Repetimos com while até que o usuário digite "sair"
// while (entrada != "sair") {
//  alert("O usuário inseriu " + entrada);
//  //Solicitamos novamente um dado
//  //Na próxima iteração, será verificado se não é "sair"
//  entrada = prompt("Inserir outro dado");
// }
////////////////////////////

// Loop que soma até número 500.
// sem o controle não pararia o loop.

// let resultado = 0
// while(resultado < 500){
//     let numero = parseInt(prompt('Digite um número: '));
//     resultado += numero

//     console.log(resultado)
// }

//////////////////////////////////

// Descrição
// Utilizando o “while” crie uma função que:
// ✓ Recebe um número e calcula o seu fatorial
// ✓ O fatorial de um número é o produto dele pelos seus 
// antecessores maiores que 0.
// Exemplos: 
// ✓ Se for enviado o número 4, o resultado será 1 x 2 x 3 x 4 = 24


// let numero = parseInt(prompt('Digite um numero: '));
// let resultado = 1; // variavel aculmuladora .
// let i = 1;
// while (i <= numero){
//     resultado = resultado * i;
//     i++;
//     console.log(resultado);
// }

//////////////////////////////////////////////

// do...while 
// sempre faz uma vez 
// sempre o primeiro ciclo é feito pois a condição fica no final.

// let repetir = false;
// do {
//  console.log("Só uma vez!");
// } while (repetir)

/////////////////////////////////////////////////

// let numero = 0;
// do {
//  //Repetimos com do...while enquanto o usuário não inserir um 
// // número
//  numero = prompt("Inserir um número");
//  console.log(numero);
//  //O loop será interrompido quando não digital um número 
// } while (parseInt(numero)); // condição tem que ser numero se não termina.

///////////////////////////////////////////

// Switch

let entrada = parseInt(prompt("Inserir um numero"));
//Repetimos até que "sair" seja inserido.
while (!entrada > 100) {
    switch (entrada) {
    case entrada < 10:
    alert("familia do 10");
    break;
    case entrada <  20:
    alert("familia do 20");
    break;
    case entrada < 30:
    alert("familia do 30");
    break;
    case entrada < 40:
    alert("familia do 40");
    break;
    case entrada < 50:
    alert("familia do 50");
    break;
    case entrada < 60:
    alert("familia do 60");
    break;
    case entrada < 70:
    alert("familia do 70");
    break;
    case entrada < 80:
    alert("familia do 80");
    break;
    case entrada < 90:
    alert("familia do 90");
    break;
    default:
    alert("QUEM É VOCÊ ? ")
    break;
    }
 entrada = prompt("Inserir um nome");
}



