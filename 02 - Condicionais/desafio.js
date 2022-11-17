/*  Faça um programa para calcular o valor de uma viagem.

    Você terá 5 variáveis, sendo elas:

    1 - Preço do etanol
    2 - Preço da gasolina
    3 - O tipo de combustível que está no carro
    4 - Gasto médio de combustível do carro por KM
    3 - Distâcia em KM da viagem

    Imprima no console o valor que será gasto de combustível para realizar esta viagem
*/

let precoEtanol = 4.73;
let precoGasolina = 5.82;
let combustivelUsado = 'gasolina';
let kmPorLitroGasolina = 12;
let kmPorLitroEtanol = 10;
let distanciaViagemKM = 350;

if (combustivelUsado === 'gasolina') {
    const valorViagem = (distanciaViagemKM/kmPorLitroGasolina) * precoGasolina
    console.log ('Na viagem foi gasto o valor de R$ ' + valorViagem.toFixed(2) + '.');
} else {
    const valorViagem = (distanciaViagemKM/kmPorLitroEtanol) * precoEtanol
    console.log ('Na viagem foi gasto o valor de R$ ' + valorViagem.toFixed(2) + '.');
}