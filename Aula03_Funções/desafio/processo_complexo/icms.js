var produto;
var preco;
var estado;
var resultado;

function calcula(){
    produto = document.getElementById("nome").value;
    preco = parseInt(document.getElementById("preco").value);
    estado = document.getElementById("estado").value;
   
   
    if (isNaN(preco) ) {
        alert('Por favor, insira números válidos.');
        return;
    }

   
    calculo_icms(preco, estado, produto) ;
 
  }


function calculo_icms(){
if (estado === "São Paulo-SP"||estado ==="Amapá-AP"||estado ==="Rio Grande do Norte-RN"||estado ==="Minas Gerais-MG"){
    resultado =  (preco * 18) /100 + preco;
    apresentar(preco, estado, produto);
    }


else if (estado === "Espírito Santo-ES" ||estado === "Rio Grande do Sul-RS" ||estado === "Mato Grosso do Sul-MS" ||estado === "Mato Grosso-MT" ||estado === "Santa Catarina-SC"){
     resultado =  (preco * 17) /100 + preco;
    apresentar(preco, estado, produto);
}

else if (estado === "Rondônia-RO" ||estado === "Acre-AC" ||estado === "Pará-PA" ||estado === "Goiás-GO" ||estado === "Paraná-PR" ||estado === "Alagoas-AL" ||estado === "Sergipe-SE"){
     resultado =  (preco * 19) /100 + preco; 
     apresentar(preco, estado, produto);}

else if (estado === "Roraima-RR" ||estado === "Bahia-BA" ||estado === "Pernambuco-PE" ||estado === "Amazonas-AM" ||estado === "Ceará-CE" ||estado === "Distrito Federal-DF" ||estado === "Paraíba-PB" ||estado === "Tocantins-TO" ||estado === "Rio de Janeiro-RJ"){
     resultado =  (preco * 20) /100 + preco;
    apresentar(preco, estado, produto);
}

else if (estado === "Piauí-PI"){
     resultado =  (preco * 21) /100 + preco;
    apresentar(preco, estado, produto);
}


else if (estado === "Maranhão-MA"){
     resultado =  (preco * 22) /100 + preco;
    apresentar(preco, estado, produto);
}

    

}

function apresentar(){

 document.getElementById('resultado').innerText = produto +" - "+ estado +" - "+ 'ICMS: R$' + resultado ; // Exibir na página

}















// document.addEventListener('DOMContentLoaded', function() {
//     // Adicionar um listener de evento ao botão quando o DOM estiver carregado
//     document.getElementById('meuBotao').addEventListener('click', calcula);
// })

