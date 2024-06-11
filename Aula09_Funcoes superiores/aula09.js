// Retornar Funções por Parâmetro

// function porCadaUm(array, funcao) {
//     for (const item of array) {
//     funcao(item);
//     }
//    }
//    const numeros = [1, 2, 3, 4];
//    porCadaUm(numeros, console.log);


const quadrados = []
const numeros = [1, 2, 3, 4];
function porCadaUm(array, funcao) {
 for (const item of array) {
 funcao(item);
 }
}
porCadaUm(numeros, (o) => {
 quadrados.push(o * 2)
})
console.log(quadrados) // [2, 4, 6, 8]