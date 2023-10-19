

type ResponseData2={
    name: string
    generation: generacion
} 
type generacion={
    name: string
    url: string
}
type ResponseData1={
    id:number
    types: tipos[]
} 
type tipos={
    slot: number
    'type': tipo
}
type tipo={
    name: string
    slot: number
}

if(option === '1'){
    const tipo = prompt("Por favor, en INGLES, introduce el Tipo:");
    console.log("Tipo:", tipo);
    const url1  = "https://pokeapi.co/api/v2/type/"
    var url =url1.concat(tipo.toString());
    try{
        const respuesta1 = await fetch(url)
        const respuesta2: ResponseData2 = await respuesta1.json()
        console.log("Se ha encontrado ")
        console.log("Tipo:  "+ respuesta2.name)
        console.log("Generacion: "+ respuesta2.generation.name)
        //const datos: data = await Respuesta.json()
    }catch{
        console.log("No se ha encontrado")
    }

}else if(option==='2'){
    const pokemon = prompt("Por favor, introduce el pokemon:");
    console.log("Name:", pokemon);
    const url1  = "https://pokeapi.co/api/v2/pokemon/"
    var url =url1.concat(pokemon.toString());
    try{
        const respuesta1 = await fetch(url)
        const respuesta2: ResponseData1 = await respuesta1.json()
        console.log("Se ha encontrado ")
        console.log("Nombre "+ pokemon)
        console.log("id: "+ respuesta2.id)
        console.log("tipo/tpos: "+ respuesta2.types.at(0).type.name)
        //const datos: data = await Respuesta.json()
    }catch{
        console.log("No se ha encontrado")
    }
}else{
    console.log("No has introducido lo pedido")
}
console.log("Fin del programa")