import  fetcher  from "../../../lib/fetcher";
import { ProdutoResumo } from "../type";


export async function getProdutosRelacionados(categoria: string): Promise<ProdutoResumo[]> {
    const data = await fetcher<{ products: ProdutoResumo[] }>(`/products/category/${encodeURIComponent(categoria)}`);
    return data.products;
}