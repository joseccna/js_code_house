function receber(){
    let primeiro = parseInt(document.getElementById("primeiro").value);

    let segundo = parseInt(document.getElementById("segundo").value);

    let resultaldo = primeiro % segundo;

    if(resultaldo === 0){
        document.getElementById('resultado').innerText ="O número " + primeiro +" é múltiplo do número "+ segundo;
    }
    else{
        document.getElementById('resultado').innerText ="O número " + primeiro +" não é múltiplo do número "+ segundo;
    }
}

//////////////////////////////////////////////
// segunda maneira de fazer.

function receber1(numero1, numero2){
 return numero1 % numero2 === 0

}

if(receber1(9,3)){
    console.log('São multiplos');
}
else{
    console.log('Não são multiplos');
}