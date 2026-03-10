import { fetcher } from "@/lib/fetcher";
import { ProdutoResumo } from "../type";

interface ProdutoResponse {
    products: ProdutoResumo[];
    total: number;
}

export async function getProdutosPaginacao(pagina: number, limite: number): Promise<ProdutoResponse> {
    const skip = (pagina - 1) * limite;
    const data = await fetcher<ProdutoResponse>
    (`/products?limit=${limite}&skip=${skip}`);
    return data;

}

