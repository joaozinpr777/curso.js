function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    //var hora = data.getHours()
    var hora = 21
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora <12){
        //BOM DIA  
        img,src = 'manha.jpg'
        document.body.style.background = "#E1E56A"
    }else if(hora >= 12 && hora < 18){
        // Boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = "#E88431"
    }else{
        //BOA NOITE
        img.src = 'noite.jpg'
        document.body.style.background = "#3F1490"
    }
}