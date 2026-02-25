import { fetcher } from "@/lib/fetcher";
import { Categoria } from "../type";



export function getCategoria(): Promise<Categoria[]> {
    return fetcher("/products/categories")
}