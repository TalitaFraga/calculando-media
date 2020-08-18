const input = require("readline-sync")

console.log('quais sao as suas notas?')

const nota1 = input.question('digite a primeira nota')
const nota2 = input.question('digite a segunda nota')
const nota3 = input.question('digite a terceira nota')
const nota4 = input.question('digite a quarta nota')
const nota5 = input.question('digite a quinta nota')
const nota6 = input.question('digite a sexta nota')

const total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6)

console.log(total.toFixed(2))

const media = total/6
console.log (media.toFixed(2))

if ( media >= 7){
    console.log ('aprovada')
} else if ( media >= 5 && media < 7) {
    console.log ('recuperação')
} else if ( media < 5) {
    console.log('reprovada')
}