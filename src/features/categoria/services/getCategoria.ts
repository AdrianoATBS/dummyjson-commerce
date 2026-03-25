import  fetcher  from "@/lib/fetcher";
import { Categoria } from "../type";



export async  function getCategoria(): Promise<Categoria[]> {
    return await fetcher("/products/categories")
}