export function stringCalculator(numeros:string){
    let numerosArray = numeros.split(",")
    let num = numerosArray.map(Number)
    let initialValue = 0;

    for(let i = 0; i < num.length; i++){
        if(num[i] >= 1000 || num[i] < 0 ){
            num.splice(i, 1);
            i--;
        }
    }

    let soma = num.reduce((previousValue, currentValue) =>  previousValue + currentValue, initialValue)

    return soma
}

const response = stringCalculator("1,-2,1000")
console.log(response)
export default stringCalculator