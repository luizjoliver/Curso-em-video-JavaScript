function tabuada( ){
  let num = document.querySelector(`input#txtn`)
  let tab = document.getElementById(`Seltab`)
if(num.value.lenght == 0){
  window.alert(`digite um número`)
  let n = Number(num.value)
}else {
  let n = Number(num.value)
  let c = 1 
  tab.innerHTML = ``
  while( c <= 10) {
    let item = document.createElement(`option`)
    item.text = `${n} x ${c} = ${n*c}`
    item.value = `tab${c}`
    tab.appendChild(item)
    c++
  }
}
}
