let btnVermelho = document.getElementById('vermelho')
let btnAzul = document.getElementById('azul')
let btnPreto = document.getElementById('preto')
let principal = document.getElementById('principal')

btnVermelho.onclick = function(){
    
    principal.style.backgroundImage = 'url(./img/BMW1.png)'

}

btnAzul.onclick = function(){
    
    principal.style.backgroundImage = 'url(./img/BMW2.png)'

}

btnPreto.onclick = function(){
    
    principal.style.backgroundImage = 'url(./img/BMW3.png)'

}