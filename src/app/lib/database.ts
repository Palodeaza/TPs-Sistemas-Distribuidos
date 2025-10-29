import fs from "fs/promises";
import path from "path";


const DB_PATH= path.join(process.cwd(),'database.json');

export interface Pokemon{
 id:number;
 name:string;
 base_experience:number;
 height:number;
 weight:number;
 order:number;
 isFavorite?: boolean;
 createdAt: string;
 type1_name: string; //por default esto es el nombre del primer tipo disponible
}

class Database{

private async readDB(): Promise<Pokemon[]>{
    try{
        const data=await fs.readFile(DB_PATH,"utf-8");
        return JSON.parse(data);
    }
    catch(error){
        //devuelvo el array vacio
        return [];
    }
}

private async writeDB(data: Pokemon[]): Promise<void>{
    console.log(data);
    await fs.writeFile(DB_PATH, JSON.stringify(data,null,2));
}

async getAll():Promise<Pokemon[]>{
    return await this.readDB();
}

async getById(id:number): Promise<Pokemon | undefined>{
 const data = await this.readDB();
 return data.find((item)=> item.id === id);
}

async create(pokemon: Omit<Pokemon, "createdAt">):Promise<Pokemon>{
    const data= await this.readDB();
    const newP:Pokemon={
       //id:data.length > 0? Math.max(...data.map((p)=>p.id)) +1:1,
        ...pokemon,
        createdAt: new Date().toISOString(),   
    };
    data.push(newP);
    await this.writeDB(data);
    return newP;
}

async delete(id: number): Promise<boolean> {
    const data = await this.readDB();
    const initialLength = data.length;
    const filtered = data.filter((item) => item.id !== id);
    
    if (filtered.length === initialLength) {
      return false; // No se encontró el elemento
    }
    
    await this.writeDB(filtered);
    return true;
}

 async update(id: number, updates: Partial<Omit<Pokemon, "id" | "createdAt">>): Promise<Pokemon | null> {
    const data = await this.readDB();
    const index = data.findIndex((item) => item.id === id);
    
    if (index === -1) {
      return null;
    }
    
    data[index] = { ...data[index], ...updates };
    await this.writeDB(data);
    return data[index];
  }
}

export const db=new Database();