
// esta acessando a variavel global usuando this
var nome = "Lucas"
function obterNome() {
 var nome = "Jonas"
 console.log(this.nome + 2) //Lucas
}
obterNome()
console.log(this.nome + 1) //Lucas

///////////////////////////////////////////////



var nome = "Lucas"
function obterNome() {
 this.nome = "Jonas"
 console.log(this.nome + 5) //Jonas
}
new obterNome()
console.log(this.nome + 4) //Lucas

// Já em uma função construtora o this se refere
// ao próprio objeto ou ao objeto da instância.
