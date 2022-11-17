/* 
    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; 
*/

function aplicarDesconto(preco, desconto) {
    return (preco - (preco * (desconto / 100)));
}

function aplicarJuros(preco, juros) {
    return (preco + (preco * (juros / 100)));
}

let precoNormal = 100;
let formaPagamento = 4;

if (formaPagamento === 1) {
    console.log (aplicarDesconto (precoNormal, 10));
} else if (formaPagamento === 2) {
    console.log (aplicarDesconto  (precoNormal, 15));
} else if (formaPagamento === 3) {
    console.log (precoNormal);
} else if (formaPagamento === 4) {
    console.log (aplicarJuros (precoNormal, 10));
} else {
    console.log ('Inválido');
}
