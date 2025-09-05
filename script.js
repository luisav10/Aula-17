//Estrutura de repetição PARA
//Quando sabemos o número de vezes que vai repetir

//Repetindo uma instrução 5 vezes
for (let index = 0; index < 10000; index++) {
    console.log('Boa tarde 1° Info ' + index)
}

//Repetindo uma instrução vezes que o usuário quiser
let vezes = Number(prompt('Quantos "Bom dia" você quer?'))
for (let index = 0; index < vezes; index++) {
    console.log('Bom dia ' + index)
}

//Contagem regressiva
for(let i = 10; i >= 1; i-= 5){
    console.log('Etec vai explodir em ' + i)
}
console.log('BOOOOOOOOM')