function convertir_a_metros(kilometros:number){
    let metros: number;
    metros = (kilometros*1000) /1;
    return metros
}
console.log( 'La cantidad de kilometros asignados equivalen a ' + convertir_a_metros(1.5) +' Metros')