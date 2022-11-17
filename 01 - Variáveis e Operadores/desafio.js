/*  Faça um programa para calcular o valor gasto de combustível em uma viagem.
    Você terá 3 variáveis, sendo elas:

    1 - Preço do combustível
    2 - Gasto médio de combustível do carro por KM
    3 - Distâcia em KM da viagem

    Imprima no console o valor que será gasto de combustível para realizar esta viagem
*/

let precoCombustivel = 5.82;
let kmPorLitro = 10;
let distanciaViagemKM = 350;

const valorViagem = (distanciaViagemKM/kmPorLitro)*precoCombustivel;

console.log ('Na viagem foi gasto o valor de R$ ' + valorViagem.toFixed(2) + '.');