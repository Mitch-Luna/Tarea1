function convertir_a_megabytes (cantidad_de_gigabytes:number, gigabytes:number = 1, megabytes:number=1024){
    return (cantidad_de_gigabytes*megabytes) /gigabytes
}
console.log('La cantidad de Gigabytes equivale a '+ convertir_a_megabytes(59) +' Megabytes')