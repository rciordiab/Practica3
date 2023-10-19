type pagina={
    info:string
    results: Character[]
}
type info={
    count: number
    pages: number
}
type Character= {
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

export const GetChar: (id: number) => Promise <Character> = async (id: number) : Promise <Character> =>{
    const url1  = `https://rickandmortyapi.com/api/character/${id}`
    const data: Response = (await fetch(url1))
    const charact: any = await data.json()
    return{
        id: charact.id, 
        name: charact.name,
        status: charact.status,
        species: charact.species,
        gender: charact.gender,
        origin: charact.origin,
        location: charact.location,
        created: charact.created,

    }

}