/* 
    1) Faça um algoritmo que, dado as três notas tiradas por um aluno em um semestre da faculdade, calcule imprima a
    sua média e a sua classificação conforme a tabela abaixo:

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre.
 */

    let nota1 = 7;
    let nota2 = 6;
    let nota3 = 8;
    
    const media = (nota1 + nota2 + nota3) / 3;
    console.log(media);
    
    if (media < 5) {
        console.log ('REPROVADO');
    } else if (media >= 5 && media <= 7) {
        console.log ('RECUPERAÇÃO');
    }  else {
        console.log ('APROVADO');
    }