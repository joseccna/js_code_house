var saudacao = prompt('Digite seu nome: ');
console.log('Olá, ' + saudacao +'!');
var idade = prompt('Digite sua idade: ');
var ano = 2024
nascimento = ano - parseInt(idade);
console.log('Sua data de nasciento é: ' + nascimento);
var criarTexto = prompt(saudacao + ' digite um texto.')
var paragrafo = 'Sua idade ' + idade + ' e o ano que você nasceu é ' + nascimento; 
var fazerTexto = paragrafo +'\n'+criarTexto;
alert(fazerTexto);
