let sair_app = " ";
function continuar(){
let valorEmprestimo = parseInt(prompt('Digite o valor do emprestimo: '));
if(isNaN(valorEmprestimo)){
    alert('Digiete o valor do emprestimo!');
    return;
}
let quantidade = parseInt(prompt('Favor digite a quantidade de parcelas: '));
if(isNaN(quantidade)){
    alert('Digiete o valor da pracela!');
    return;
}

let emprestimo = valorEmprestimo; // Valor financiado
let i = 0.0794;  // Taxa de juros mensal
let parcela = quantidade;     // Número de parcelas

// Cálculo da parcela mensal (PMT)
let mensal = emprestimo * (i * Math.pow(1 + i, parcela)) / (Math.pow(1 + i, parcela) - 1);
// Valor total pago (VT)
let total = mensal * parcela;

// Juros totais (J)
let juros = total - emprestimo;

// Exibindo os resultados com quebras de linha

sair_app = ' ';
sair_app = prompt("Parcela mensal:   R$ " + mensal.toFixed(2) + "\n" +
"Valor total pago: R$ " + total.toFixed(2) + "\n" +
"Juros totais:        R$ " + juros.toFixed(2) + "\n" + 
' Digite: sair para finalizar ou clik no OK para continuar!' );



}


while( sair_app !== "sair" ){
    continuar();
    
}

  