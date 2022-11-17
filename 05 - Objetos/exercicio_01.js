/* 
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. 
*/

class Carro {
    marca; 
    cor;
    gastoMedioPorKm; 

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoViagem(distanciaEmKm, precoCombustivel) {
        return (distanciaEmKm * this.gastoMedioPorKm * precoCombustivel).toFixed(2);
    }
}

const onix = new Carro ('Chevrolet', 'preto', 0.07);
console.log (onix.calcularGastoViagem(215, 5.89));

const palio = new Carro ('Fiat', 'branco', 0.1);
console.log (palio.calcularGastoViagem(215, 5.89));