function convertir_a_celsius(farhenheit : number){
    let celsius: number;
    celsius = (farhenheit - 32) / 1.8;
    return celsius;
}

console.log('El resultado de la conversión son '  + convertir_a_celsius(86) + ' Grados Celsius')