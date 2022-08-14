function contar() { 
  let ini = document.getElementById(`txti`)
  let fim = document.getElementById(`txtf`)
  let passo = document.getElementById(`txtp`)
  let res = document.getElementById(`res`)

  
  if (ini.value == 0 || fim.value == 0 || passo.value == 0){
    window.alert(`[ERRO] Atenção verifique os dados`)
  }else {
    res.innerHTML = `contando....`
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
if( p <= 0) {
  window.alert(`PASSO INVÁLIDO! considerando PASSO =1`)
  p = 1
}
if ( i < f) { //contagem progressiva
  for( let c = i ; c <= f; c += p){
    res.innerHTML += `${c} \u{1F449}	`
  
  } 

} else{ //contagem regressiva
  for (let c = i ; c >= f; c -= p){
    res.innerHTML += `${c} \u{1F449}`
  }
    
  }
}

res.innerHTML += `\u{1F3C1}`
  }   
  

    

