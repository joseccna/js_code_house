let cores = [];
cores = prompt('Digite o nome de 5 cores');
let total = 5;


do{
    let minhacor = prompt('Digite o nome da cor');
    cores.push(minhacor);
    console.log(core, cores.length);
} while(cores.length < total);


let apagar = prompt('digite a cor a ser apagada');

let indice = cores.indexOf(apagar);

console.log(indice);

if (index > -1){
    cores.splice(index, 1);
}
else{
    console.log('A cor não foi encontrado!');
}

console.log(cores);



// const eliminar = (core) =>{

//     let index = cores.indexOf(core);

    // if (index !== -1){
    //     cores.splice(index, 1);
    // }
    // else{
    //     console.log('A cor não foi encontrado!');
    // }






// console.log( `Na posição ${i} temos a cor
//     ${cores}`)

