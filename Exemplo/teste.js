/*var nome = prompt("Digite o seu texto")
console.log(nome)
document.write(nome)*/

/*let a = 10
console.log(a)
if(true){
    let a = 15
    console.log(a)
}

console.log(a)*/

var nome = prompt("Digite seu nome")
//alert("Bom dia " + nome)
//alert(`Bom dia ${nome}`)

var n1 = parseInt(prompt(`Digite o numero: `))
var n2 = parseInt(prompt(`Digite o numero: `))
console.log(typeof n1)
console.log(typeof n2)
console.log(typeof soma)


var soma = n1 + n2

if(soma > 10){
    document.write(`<p class = "maior">O resultado de ${n1} com ${n2} é de: ${soma}<p/>`)
}
else{
    document.write(`<p class = "menor">O resultado de ${n1} com ${n2} é de: ${soma}<p/>`)
}