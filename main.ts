import { GetChar } from "./getchar.ts";
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

});
const port = 3000;
api1.listen(port);

console.log("Fin del programa")