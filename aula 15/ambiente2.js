/*let vetor = [4,2,5,1]
console.log(`o vetor tem ${vetor.length} posições`)
console.log(`nosso vetor é ${vetor}`)
vetor.push(15)
console.log(`vetor atualizado para \n ${vetor}`)
vetor.sort()
console.log(`em ordem crescente, o vetor fica: \n ${vetor}`)
for(let pos in vetor){
    console.log(`a posição ${pos} tem o valor ${vetor[pos]}`)
}
let posição = vetor.indexOf(15)
if(posição == -1){
    console.log(`o valor não foi encontrado`)
}else{
    console.log(`o valor está na posição ${posição}`)
}*/

let vetor = [1,3,5,6,8]
console.log(`o vetor tem ${vetor.length} posições`)
console.log(`o nosso vetor é ${vetor}`)
vetor.push(13)
console.log(`vetor atualizado para \n ${vetor}`)
for(let pos in vetor ){
    console.log(`a posição ${pos} tem o valor ${vetor[pos]}`)
}
let posição = vetor.indexOf(6)
if(posição == -1){
    console.log(`o valor não foi encontrado`)
}{
    console.log(`o valor está na posição ${posição}`)
}