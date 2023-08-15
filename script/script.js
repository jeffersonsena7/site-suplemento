/*function mudouTamanho(){
  if(window.innerWidth >= 460 && window.innerWidth <= 680){
    itens.style.display = 'flex'
  }
  else{
    itens.style.display = 'none'
  }
}*/
function clickMenu(){
  if (itens.style.display == 'none') {
      itens.style.display = 'flex'
      burgue.style.display = 'none'
  }
  else{
    itens.style.display = 'none'
  }
}
function abrirMenu(){
  if (lista.style.display == 'none'){
    lista.style.display = 'flex'
  }
  else{
    lista.style.display = 'none'
  }
}
