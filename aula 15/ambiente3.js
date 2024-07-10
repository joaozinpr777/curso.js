let num = [2,4,6,8,5]
num[3] = 3
console.log(num)
num.push(9)
console.log(num)
num.sort()
console.log(`o vetor quando organizado em ordem é: ${num}`)
console.log(`o vetor tem ${num.length} posições`)
for(let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
let posição = num.indexOf(10)
if(posição == -1){
    console.log(`o valor não foi encontrado`)
}else{
    console.log(`o valor está na posição ${posição}`)
}