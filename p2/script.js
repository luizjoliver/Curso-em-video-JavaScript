function clicar (){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.querySelector(`div#res`)
    if(fano.value.lenght == 0 || Number(fano.value)> ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    }else{
      var fsex = document.getElementsByName(`radsex`)
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement(`img`)
      img.setAttribute(`id`, `foto`)
      if (fsex[0].checked){
        genero = `Homem`
        if(idade >= 0 && idade < 10 ){
        img.setAttribute(`src`, `crianca-h.png`)
        }else if ( idade < 21){
        img.setAttribute(`src`, `jovem-h.png`)
        }else if ( idade < 50){
          img.setAttribute(`src`, `adulto-h.png`)
        }else{
          img.setAttribute(`src`, `idoso-h.png`)
        }

      }else if (fsex[1].checked){
        genero = `Mulher`
        if(idade >= 0 && idade < 10 ){
          img.setAttribute(`src`, `crianca-m.png`)
          }else if ( idade < 21){
            img.setAttribute(`src`, `jovem-m.png`)
          }else if ( idade < 50){
            img.setAttribute(`src`, `adulto-m.png`)
          }else{
            img.setAttribute(`src`, `idoso-m.png`)
          }
      }
      res.style.textAlign = `center`
      res.innerHTML = `detectamos ${genero} com ${idade} anos`
      res.appendChild(img)
    }
}