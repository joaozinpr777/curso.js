function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'criancaHomem.jpg')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'jovemHomem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoHomem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosoHomem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'criancaMulher.jpg')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'jovemMulher.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoMulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosaMulher.jpg')
            }
        }
        res.computedStyleMap.textallign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }

}