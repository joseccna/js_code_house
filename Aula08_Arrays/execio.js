let meuArray = [];
let nome;

do{
    nome = prompt('digite um nome:');
    meuArray.push(nome);

}while(nome !== 'fim');


meuArray.splice(meuArray.length -1, 1);

for (const intem of meuArray){
        console.log(intem);
    

};