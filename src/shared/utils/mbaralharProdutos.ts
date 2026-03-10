import { ProdutoResumo } from "@/features/produtos/type";

export function embaralharProdutos(produtos: ProdutoResumo[])
{
    return [...produtos].sort(() => Math.random() -0.5);
}
