
function verifica(){

    let numero = parseInt(prompt("Digite um numero para ver se é impar ou par: "));

    let resultado = numero % 2;
    if( resultado === 0){
        alert('O numero é par.');
    }
    else{
        alert('O numero é impar.');
    }

};

/////////////////////////////

function estacaoAno(){

let mes = prompt('Digite o mês para ver qual é a estação do ano: ');

if(!isNaN(mes)){
    alert('Digite um mes!');
    return;
};


if(!(mes === 'setembro' || mes === 'outubro' || mes === 'novembro' || mes === 'dezembro'|| mes === 'janeiro' || mes === 'fevereiro' || mes === 'maço' ||  mes === 'abril' || mes === 'maio' || mes === 'junho' || mes === 'julho' || mes === 'agosto' )){
    alert('Digite um mes!');
    return;
};


if ( mes === 'setembro' || mes === 'outubro' || mes === 'novembro' || mes === 'dezembro'){
    alert('É Primavera');
}
else if ( mes === 'janeiro' || mes === 'fevereiro' || mes === 'maço' ){
    alert('É Verão');
}

else if ( mes === 'abril' || mes === 'maio' || mes === 'junho' ){
    alert('É Outono');
}

else{
    alert('É Inverno')
}


};