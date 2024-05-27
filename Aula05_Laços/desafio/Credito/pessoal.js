


function parcela_03(){
    let parcelas = 0
    parcelas = parseInt(document.getElementById('parcela03').value);
    recebe_mes(parcelas);
}

function parcela_06(){
    let parcelas = 0
    parcelas = parseInt(document.getElementById('parcela06').value);
    recebe_mes(parcelas);
}

function parcela_09(){
    let parcelas = 0
    parcelas = parseInt(document.getElementById('parcela09').value);
    recebe_mes(parcelas);
}

function parcela_12(){
    let parcelas = 0
    parcelas = parseInt(document.getElementById('parcela12').value);
    recebe_mes(parcelas);
}

function parcela_24(){
    let parcelas = 0
    parcelas = parseInt(document.getElementById('parcela24').value);
    recebe_mes(parcelas);
}

function parcela_36(){
    let parcelas = 0
    parcelas = parseInt(document.getElementById('parcela36').value);
    recebe_mes(parcelas);
}

function parcela_48(){
    let parcelas = 0
    parcelas = parseInt(document.getElementById('parcela48').value);
    recebe_mes(parcelas);
}

function parcela_60(){
    let parcelas = 0
    parcelas = parseInt(document.getElementById('parcela60').value);
    recebe_mes(parcelas);
}

function recebe_mes(parcela1){
   let recebeMes = parcela1;
   valor = parseInt(document.getElementById('valor').value);
    if(isNaN(valor)){
        alert('Favor colocar o valor do emprestimo!')
        return;
    }
 
    
    let emprestimo = valor; // Valor financiado
    let i = 0.0794;  // Taxa de juros mensal
    let parcela = recebeMes;     // Número de parcelas
    


    // Cálculo da parcela mensal (PMT)
    let mensal = emprestimo * (i * Math.pow(1 + i, parcela)) / (Math.pow(1 + i, parcela) - 1);
    // Valor total pago (VT)
    let total = mensal * parcela;

    // Juros totais (J)
    let juros = total - emprestimo;

    // Exibindo os resultados com quebras de linha
    document.getElementById('resposta').value =
    "Parcela mensal:   R$ " + mensal.toFixed(2) + "\n" +
    "Valor total pago: R$ " + total.toFixed(2) + "\n" +
    "Juros totais:     R$ " + juros.toFixed(2);


}

