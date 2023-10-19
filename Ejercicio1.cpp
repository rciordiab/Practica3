type ResponseData2={
    id:number
    name: string
    status: string
    species: string
    gender: string
    origin: origen
    location: origen
    created: string
} 
type origen={
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

const ID = prompt("Por favor, introduce ID del personaje:");
console.log("ID:", ID);
const url1  = "https://rickandmortyapi.com/api/character/"
var url =url1.concat(ID.toString());
try{
    const respuesta1 = await fetch(url)
    const respuesta2: ResponseData2 = await respuesta1.json()
    console.log("Se ha encontrado ")

    console.log("ID -> "+ respuesta2.id)
    console.log("Name -> "+ respuesta2.name)
    console.log("Status -> "+ respuesta2.status)
    console.log("Species -> "+ respuesta2.species)
    console.log("Gender -> "+ respuesta2.gender)
    console.log("Origin  -> "+ respuesta2.origin.name)
    console.log("Location  -> "+ respuesta2.location.name)


}catch{
    console.log("No se ha encontrado")
}
console.log("Fin del programa")
