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

export const GetPag= async (pagina1: number) : Promise <pagina> =>{
    const url1  = `https://rickandmortyapi.com/api/character/?page=${pagina1}`
    const data: Response = (await fetch(url1))
    const pag= await data.json()
    return{
        info: pag.info.pag,
        results: pag.results
    }
}