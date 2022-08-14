function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date ()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas`
  if (hora >= 0 && hora < 12) {
    //Bom dia!!
    img.src = `manha-imgv.png`
    document.body.style.backgroundColor = `#afa8a0`
  } else if (hora >= 12 && hora < 18){
    //Boa tarde!
   img.src = `tarde-imgv.png`
   document.body.style.backgroundColor = `#d9bd9a`
  }else {
    //Boa noite!
    img.src = `noite-img.png`
    document.body.style.backgroundColor = `#436377`
  }
}
