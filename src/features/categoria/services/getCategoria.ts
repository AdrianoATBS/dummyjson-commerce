import  fetcher  from "@/lib/fetcher";
import { Categoria } from "../type";



export async  function getCategoria(): Promise<Categoria[]> {
    return fetcher<Categoria[]>("/products/categories")
}