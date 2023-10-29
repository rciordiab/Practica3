export type Character= {
    [x: string]: any;
    id:number
    name: string
    status: string
    species: string
    gender: string
    origin: origen
    location: origen
    created: string
}
export type origen={
    name: string
    url: string
}