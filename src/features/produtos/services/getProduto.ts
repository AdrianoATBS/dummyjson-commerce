import { fetcher } from "@/lib/fetcher";
import { ProdutoDetalhado } from "../type";


export async function getProduto(id: number): Promise<ProdutoDetalhado> {

    const data = await fetcher<ProdutoDetalhado>(`/products/${id}`);
    return data;
}