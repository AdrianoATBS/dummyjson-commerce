import { fetcher } from "../../../lib/fetcher";

export async function getProdutos() {
    return fetcher("/products")
}
    
