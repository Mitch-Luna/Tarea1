function convertir_a_gigabytes (cantidad_de_megabytes:number, gigabytes:number =1, megabytes:number=1024){
    return (cantidad_de_megabytes*gigabytes )/megabytes
}
console.log( 'La cantidad de Megabytes equivale a '+ convertir_a_gigabytes(1200) +' Gigabytes')