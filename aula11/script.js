class Cliente{
    constructor(nome,sexo,idade){
        this.nome = nome
        this.sexo = sexo
        this.idade = idade
    }
    exibirInformacao(){
        console.log(`Nome: ${this.nome}, Sexo: ${this.sexo}, Idade: ${this.idade}`)
        const resultado = document.getElementById("resultado")
        resultado.textContent = `Nome: ${this.nome}, Sexo: ${this.sexo}, Idade: ${this.idade}`
    }
}
// escrevendo fora da classe = usar função 
function pegarDados(){
    const nomeDigitado = document.getElementById("nome").value 
    const sexoDigitado = document.getElementById("sexo").value 
    const idadeDigitada = document.getElementById("idade").value 

    const cliente = new Cliente(nomeDigitado,sexoDigitado,idadeDigitada)
    cliente.exibirInformacao() 
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
class Produto{
    constructor(produto,marca){
        this.produto = produto
        this.marca = marca
    }
    exibirInformacao(){

        console.log(`Produto: ${this.produto}, Marca: ${this.marca}`)
        const resultado = document.getElementById("resultado")
        resultado.textContent = (`Produto: ${this.produto}, Marca: ${this.marca}`)
    }
    }
    function pegarDados() {

        const produtoDigitado = document.getElementById("produto").value
        const marcaDigitada = document.getElementById("marca").value 

        const produto = new Produto(produtoDigitado, marcaDigitada)
        produto.exibirInformacao()
    }
