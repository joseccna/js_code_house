// Declaração de array vazio
const arrayA = [];
// Declaração de array com números
const arrayB = [1,3];
// Declaração de array com strings
const arrayC = ["C1", "C2", "C3"];
// Declaração de array com booleanos
const arrayD = [true, false, true, false];
// Declaração de array misto
const arrayE = [1, false, "C4"];



const numeros = [1,2,3,4,5,6];
for (let index = 0; index < 5; index++){
    console.log(numeros[index]);
}

console.log(numeros[0]);
console.log(numeros[3]);
let resultado = numeros[1] + numeros[2];
console.log(resultado);


for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

console.log(`Meu array tem ${numeros.length} elementos`);

// metodos do array 

// Length

// Acrescentar 
// elementos
// Para adicionar um elemento a um array já 
// existente, utilizamos o método push, que 
// acrescenta elementos ao final do array. Se 
// quisermos acrescentar no início do array, 
// utilizamos o método unshift()

numeros.push('final');
numeros.unshift('inicio');
console.log(`Meu array tem ${numeros.length} elementos`);


numeros.shift(); //tira o primeiro elemento

numeros.pop(); // tira o ultimo elemento
console.log(`Meu array tem ${numeros.length} elementos`);



const outroarray = [10, 5, 8, 9, 6, 4];

outroarray.splice(1, 3); //escluit aparti de 1, quantos vai ser escluido 3.
console.log(outroarray);
///////////////////////////////////


const nomes = ['jose','maria','joão','samuel'];
console.log(nomes.join('|')); // separa os itens neste caso por | 

/////////////////////////////////////

const soma = numeros.concat(nomes); // metodo Concat que combinar dois arrays
console.log(soma); 

///////////////////////////////////////


const masculinos = nomes.slice(0, 3);
console.log(masculinos); // jose, maria joão

// O método slice retorna uma parte do array para 
// um novo array.
// Funciona com 2 parâmetros: os índices inicial e 
// final que determina a posição em que o método 
// será executado (fim não incluído). 
// O array original não é modificado.

////////////////////////////////////////////

console.log(nomes.includes(1));// false mostra se tem ou não tem
console.log(nomes.includes('jose'));// true

console.log(nomes.indexOf('samuel'));// 3 mostra o index
console.log(nomes.indexOf('jose'));// 0

////////////////////////////////////////

numeros.reverse();
console.log(numeros);// reverte a posição do ultimo pra o primeiro e altera o ///original
//////////////////////////////////////////////

