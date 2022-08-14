let num = document.getElementById(`fnum`)
let lista = document.querySelector(`select#flista`)
let res = document.querySelector(`div#res`)
let valores = []
function isNumber(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else {
    return false
  }

}
function inlist(n, l){
if (l.indexOf(Number(n)) != -1){
  return true

}else {
  return false
}
}
function adicionar(){
  if (isNumber(num.value) && !inlist(num.value, valores)){
valores.push(Number(num.value))
let item = document.createElement(`option`)
item.text = `valor ${num.value} adicionado`
lista.appendChild(item)
res.innerHTML = ``
  }else{
    alert(`Valor Inválido ou Já encontrado na lista!`)
  }
num.value = ``
num.focus()
}

function finalizar() {
  if(valores.length == 0){
    alert(`adicione valores antes de finalizar!`)

  }else{
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
  
    res.innerHTML = ``
    res.innerHTML += `<p>Ao todo, temos ${total} Números cadastrados </p>`
      }
  
}