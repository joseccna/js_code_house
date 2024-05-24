


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

function recebe_mes(parcela1){
   let recebeMes = parcela1;
   valor = parseInt(document.getElementById('valor').value);
    if(isNaN(valor)){
        alert('Favor colocar o valor do emprestimo!')
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

    // Exibindo os resultados
    console.log("Parcela mensal (PMT): R$ " + mensal.toFixed(2));
    console.log("Valor total pago (VT): R$ " + total.toFixed(2));
    console.log("Juros totais (J): R$ " + juros.toFixed(2));


}

// function Credito_evento(){
//     let valor = 0
//     valor = parseInt(document.getElementById('valor').value);
//     console.log(valor);
//     let rescebe_meses =  0;
//     rescebe_meses = recebe_mes(emviar());


// }



// // Dados do problema
// let emprestimo = 30000; // Valor financiado
// let i = 0.0794;  // Taxa de juros mensal
// let parcela = 48;     // Número de parcelas


// // Cálculo da parcela mensal (PMT)
// let mensal = emprestimo * (i * Math.pow(1 + i, parcela)) / (Math.pow(1 + i, parcela) - 1);

// // Valor total pago (VT)
// let total = mensal * parcela;

// // Juros totais (J)
// let juros = total - emprestimo;

// // Exibindo os resultados
// console.log("Parcela mensal (PMT): R$ " + mensal.toFixed(2));
// console.log("Valor total pago (VT): R$ " + total.toFixed(2));
// console.log("Juros totais (J): R$ " + juros.toFixed(2));
