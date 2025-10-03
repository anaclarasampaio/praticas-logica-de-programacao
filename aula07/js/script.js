function calcularProduto() {
    var quantidade = parseInt(document.getElementById("quantidade").value)
    var unidade = parseFloat(document.getElementById("unidade").value)

    var total = quantidade * unidade 
    document.getElementById("total").value = total 
    
}