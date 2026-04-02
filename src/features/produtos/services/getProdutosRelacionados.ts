import  fetcher  from "../../../lib/fetcher";
import { ProdutoResumo } from "../type";
interface ProdutosRelacionadosResponse {
    products: ProdutoResumo[];
}

export async function getProdutosRelacionados(categoria: string): Promise<ProdutoResumo[]> {
    const data = await fetcher<ProdutosRelacionadosResponse>
    (`/products/category/${encodeURIComponent(categoria)}`);
    
    if(!data || !Array.isArray(data.products)) {
        throw new Error("Dados de produtos relacionados inválidos");
    }
    return data.products;
}