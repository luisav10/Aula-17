let frase = prompt('Digite uma frase')
let numero = Number(prompt('Quantas vezes você quer repeti-la?'))

for (let index = 0; index <= numero; index++) {
    console.log(frase + ' ' + index)   
}