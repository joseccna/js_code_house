// // cira a função
// function saudacao(){
//     console.log("sou jose!");
// }

// // pra chamar a função tem que escrever o nome com parentese
// saudacao()

// function saudacao(){
//     numero = Number(prompt("Digite um numero: "))
//     console.log(numero)
//     if (!isNaN(numero)) //verifica se é numero se caso não for o programa para.
//     if (numero > 1000){
//     alert(numero > 1000)
//     }
//     else if (10 >= numero <= 50){
//     alert("Numero esta entre 10 e 50")
//     }
// }

// saudacao();

//////////////////////////////////////////////////////////

// var numero ;

// function par(){
//     numero = Number(prompt("Digite um numero para saber se é par: "));
//     resultado = numero % 2;
//     if (resultado === 0){
//         alert("O numero " + numero + " é par");
//     }
//     else{
//         alert("O numero " + numero + " é impar");
//     }
// }

// par();


//////////////////////////////////////////////

// outro jeito de fazer

// var num = Number(prompt("Digite um numero para saber se é par: "));
// function par(){
// if (num % 2 === 0){
//     alert("é par");
// }
// else {alert("Não é par")}
// }

// par()

///////////////////////////////////////////////////////

// var num = Number(prompt("Digite um numero para saber se é par: "));

// function par(numeroDigitado){
// if (numeroDigitado % 2 === 0){
//     alert("é par");
// }
// else {alert("Não é par")}
// }
// par(num)


// function somaDois(numero1, numero2){
//     console.log(numero1 + numero2);
// }

// somaDois(num2 = Number(prompt("ditige dois numeros: ")), num3 = Number(prompt("ditige dois numeros: ")));

////////////////////////////////////


// function somar(primeiroNumero, segundoNumero) {
//  return primeiroNumero + segundoNumero;
// }

// var resultado = somar(5, 5); // retorna pra quem chamou a função

// console.log(resultado += resultado);

///////////////////////////////////////////////

// Caculadora

// function calculadora(primeiroNumero, segundoNumero, operacao){
//     if (operacao == "+"){
//         return primeiroNumero + segundoNumero;
//     }

//     else if (operacao == "-"){
//         return primeiroNumero - segundoNumero;
//     }

//     else if (operacao == "*"){
//         return primeiroNumero * segundoNumero;
//     }
//     else if (operacao == "/"){
//         return primeiroNumero / segundoNumero;
//     }
//     else{
//         return 0;
//     }

// }

// console.log(calculadora(10,5, "*"));

/////////////////////////////////////////////////

//         Para praticar
// Crie uma função que faz subtrações:
// ✓ Receba dois números
// ✓ Verifique qual é o número maior
// ✓ Faça uma subtração do maior pelo menor
// ✓ Exiba o resultado com o console


// function subitrair(num1, num2){
//     if (num1 > num2){
//     return num1 -num2;
//     }
//     else{
//         return num2 - num1;
//     }
// }

// var resultado = subitrair(15, 20);
// console.log(resultado);

///////////////////////////////////////////////////////


// Funções Anônimas

// var somaDois = function(numero1, numero2){
//     var retorno = numero1 + numero2 ;
//     return retorno;
//
//
// var resultado= somaDois(3, 5);
// console.log(resultado);
// // }

////////////////////////////////////////////////////

//     Function(Funções seta)

// var somaDois = (numero1, numero2) => {
//     var retorno = numero1 + numero2 ;
//     return retorno;
// }

// var resultado= somaDois(3, 5);
// console.log(resultado);

///////////////////////////////////////////////////////

//     Function(Funções seta)


// var somaDois = (numero1, numero2) => numero1 + numero2
  
// var resultado= somaDois(10, 5);
// console.log(resultado);

///////////////////////////////////////////////////////

