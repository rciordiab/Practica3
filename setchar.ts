import mongoose from "npm:mongoose@7.6.3";
import { Character } from "./types.ts";
import { CharModel } from "./mongoosedata.ts";
import {load} from "https://deno.land/std@0.204.0/dotenv/mod.ts"

export async function addPersonaje(character: Character) {
    const env = await load();
    const URL_MONGO = env.MONGO_URL || Deno.env.get("MONGO_URL")

    if(!URL_MONGO){
        console.error("Debes definir la variable URL_MONGO")
        Deno.exit(1)
    }
    console.info(URL_MONGO)
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(URL_MONGO);
    }

    const newCharacter = new CharModel({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      gender: character.gender,
      origin: character.origin,
      location: character.location,
      created: character.created,
    });

    await newCharacter.save();

    console.log("Personaje añadido a la base de datos.");
  } catch (error) {
    console.error("Error al agregar el personaje a la base de datos:", error);
  }
}

export async function addLocation(character: Character) {
  const env = await load();
  const URL_MONGO = env.MONGO_URL || Deno.env.get("MONGO_URL")

  if(!URL_MONGO){
      console.error("Debes definir la variable URL_MONGO")
      Deno.exit(1)
  }
  console.info(URL_MONGO)
try {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(URL_MONGO);
  }

  const newCharacter = new CharModel({
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    gender: character.gender,
    origin: character.origin,
    location: character.location,
    created: character.created,
  });

  await newCharacter.save();

  console.log("Personaje añadido a la base de datos.");
} catch (error) {
  console.error("Error al agregar el personaje a la base de datos:", error);
}
}

export async function getCharFromDB(id: number): Promise<Character | null> {
    const env = await load();
    const URL_MONGO = env.MONGO_URL || Deno.env.get("MONGO_URL");
  
    if (!URL_MONGO) {
      console.error("Debes definir la variable URL_MONGO");
      Deno.exit(1);
    }
    console.info(URL_MONGO);
  
    try {
      if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(URL_MONGO);
      }
  
      const character = await CharModel.findOne({ id: id }).exec();
  
      if (character) {
        return character.toObject();
      } else {
        console.log(`Personaje con ID ${id} no encontrado en la base de datos.`);
        return null;
      }
    } catch (error) {
      console.error("Error al obtener el personaje de la base de datos:", error);
      return null;
    }
  }

export async function deleteChar(id: number) {
    try {
      const deletedCharacter = await CharModel.findOneAndRemove({ id }).exec();
  
      if (deletedCharacter) {
        console.log(`Personaje con ID ${id} eliminado con éxito.`);
        return true;  
      } else {
        console.log(`Personaje con ID ${id} no encontrado en la base de datos.`);
        return false; 
      }
    } catch (error) {
      console.error(`Error al eliminar el personaje con ID ${id}:`, error);
      return false; 
    }
  }

  export async function deleteAllCharFromDB(): Promise<boolean> {
    try {
      const deleteResult = await CharModel.deleteMany({}).exec();
  
      if (deleteResult.deletedCount > 0) {
        console.log("Todos los personajes han sido eliminados de la base de datos.");
        return true;
      } else {
        console.log("No había personajes en la base de datos para eliminar.");
        return false;
      }
    } catch (error) {
      console.error("Error al eliminar personajes de la base de datos:", error);
      return false;
    }
  }