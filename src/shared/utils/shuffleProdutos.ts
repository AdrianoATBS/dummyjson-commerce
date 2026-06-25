import { ProdutoDetalhado } from "@/features/produtos/type";

export function embaralharProdutos(produtos: ProdutoDetalhado[])
{
    return [...produtos].sort(() => Math.random() -0.5);
}
