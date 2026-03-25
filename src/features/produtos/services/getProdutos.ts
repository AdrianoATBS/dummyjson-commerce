import  fetcher  from "../../../lib/fetcher";
import { ProdutoResumo } from "../type";
interface ProdutoResponse {
    products: ProdutoResumo[];
    total: number;
}

export async function getProdutos(): Promise<ProdutoResumo[]> {
    const data = await fetcher<ProdutoResponse>("/products");
    return data.products;
}


