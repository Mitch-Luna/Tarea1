function convertir_a_fahrenheit(celsius : number){
    let farhenheit: number;
    farhenheit = (celsius *1.8) + 32;
    return farhenheit;
}

console.log('El resultado de la conversión son '  + convertir_a_fahrenheit(30) + ' Grados fahrenheit')

