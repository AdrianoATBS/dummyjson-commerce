import  fetcher  from "../../../lib/fetcher";
import { ProdutoResumo, ProdutoDetalhado} from "../type";
interface ProdutosRelacionadosResponse {
    products: ProdutoDetalhado[];
}

export async function getProdutosRelacionados(categoria: string): Promise<ProdutoDetalhado[]> {
    const data = await fetcher<ProdutosRelacionadosResponse>
    (`/products/category/${encodeURIComponent(categoria)}`);
    
    if(!data || !Array.isArray(data.products)) {
        throw new Error("Dados de produtos relacionados inválidos");
    }
    return data.products;
}