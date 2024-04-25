export class Exercicio{
   
    static retornarOMaior(numArr:Array) {
        return Math.max.apply(null, numArr)
    }

    static calcularMedia(numArr:Array){
        let soma = Exercicio.somaDosNumeros(numArr)
        return soma / numArr.length;
    }

    static somaDosNumeros(numArr:Array) {
        return numArr.reduce((acumulador, numero) => {
            return acumulador += numero;
        },0)
        
    }

    static quantosPares(numArr: Array) {
        let pares: number = 0
        for( let num of numArr) {
            if (num % 2 === 0) pares++
        }
        return pares;
    }

    static quantosInpares(numArr: Array) {
        let impar: number = 0
        for( let num of numArr) {
            if (num % 2 !== 0) impar++
        }
        return impar;
    }
}