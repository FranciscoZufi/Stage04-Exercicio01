alert('Iremos brincar com 2 números')
const numberOne = prompt('Digite o primeiro número:')
const numberTwo = prompt('Digite o segundo número:')
const resultSam = Number(numberOne) + Number(numberTwo)
const resultSub = Number(numberOne) - Number(numberTwo)
const resultMult = Number(numberOne) * Number(numberTwo)
const resultDiv = (Number(numberOne) / Number(numberTwo)).toFixed(2)
const resultRes = Number(numberOne) % Number(numberTwo)
const resultIP = resultSam % 2 == 0 ? 'Par' : 'Impar'
const resultIg = numberOne == numberTwo ? 'Iguais' : 'Diferentes'
alert('Resultado final da soma é: ' + resultSam)
alert('Resultado final da subtração é: ' + resultSub)
alert('Resultado final da multiplicação é: ' + resultMult)
alert('Resultado final da divisão é: ' + resultDiv)
alert('Resultado final resto é: ' + resultRes)
alert('Resultado da soma é um número: ' + resultIP)
alert('Os números que você escolheu são: ' + resultIg)
