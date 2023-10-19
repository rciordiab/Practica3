import { GetChar } from "./getchar.ts";
import { GetPag } from "./getpage.ts";
import express, { Request, Response} from "npm:express@4.18.2"

const api1  = express()
api1
.get("/getchar/:id", async (req: Request, res: Response): Promise<void> => {
try{
const id = Number(req.params.id)
const cha = await GetChar(id);
res.json(cha);
} catch(e){
 res.send(e)
}
})

.get("/getpag/names/:pagina1", async (req: Request, res: Response): Promise<void> => {
  try{
    const pagina1 = Number(req.params.pagina1)
    const cha = await GetPag(pagina1);
    const nombres = cha.results.map(personaje => personaje.name);

    res.json(nombres);
    } catch(e){
     res.send(e)
    }
})
.get("/getpag/locations/:pagina1", async (req: Request, res: Response): Promise<void> => {
  try{
    const pagina1 = Number(req.params.pagina1)
    const cha = await GetPag(pagina1);
    const nombres = cha.results.map(personaje => personaje.location);

    res.json(nombres);
    } catch(e){
     res.send(e)
    }
});

const port = 3000;
api1.listen(port);

console.log("Fin del programa")