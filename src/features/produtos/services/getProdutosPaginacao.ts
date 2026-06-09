import fetcher  from "@/lib/fetcher";

import { ProdutoDetalhado } from "../type";
import { Pagination } from "../type";
interface ProdutoResponse extends Pagination {
    products: ProdutoDetalhado[];
    total: number;
    skip: number;
    limit: number;
}

export async function getProdutosPaginacao(pagina: number, limite: number): Promise<ProdutoResponse> {
    const skip = (pagina - 1) * limite;
    const data = await fetcher<ProdutoResponse>
    (`/products?limit=${limite}&skip=${skip}`);

    if(!data || !data.products) {
        throw new Error("Dados de produtos inválidos");
    }
    if(data.total === undefined) {
        throw new Error("Total de produtos não encontrado");
    }

    return data;

}


