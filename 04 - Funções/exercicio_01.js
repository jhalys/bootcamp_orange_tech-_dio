// Verificar se é maior ou menor de idade

function verificarIdade(idade) {
    if (idade > 0 && idade < 18) {
        console.log ('Menor de idade');
    } else if (idade >= 18) {
        console.log ('Maior de idade');
    } else {
        console.log ('Inválido');
    }
}

verificarIdade(26);