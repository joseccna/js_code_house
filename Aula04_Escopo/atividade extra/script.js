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