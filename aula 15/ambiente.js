let num = [5,8,2,7] /*variavel composta*/
num[4] = 6 /*adicionar na posição desejada*/
num.push(1) /*adiciona imediatamente*/
num.sort()/*coloca na ordem crescente*/
console.log(`nosso vetor é ${num}`)
console.log(`o vetor tem ${num.length} posições.`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if( pos == -1){
    console.log(`o valor não foi encontrado`)
}else{
    console.log(`o valor 4 está na posição ${pos}`)
}
