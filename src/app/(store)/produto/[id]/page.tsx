import CardProdutoDetalhado from "@/features/produtos/components/CardProdutoDetalhado";
import { getProduto } from "@/features/produtos/services/getProduto";
import ProdutoDescricao from "@/features/produtos/components/ProdutoDescricao";
import ProdutosRelacionados from "@/features/produtos/components/ProdutosRelacionados";
export default async function ProdutoDetalhesPage({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;

    const produto = await getProduto(Number(id));
    return(
        <main className="max-w-full mx-auto py-8 px-5">
            <CardProdutoDetalhado produto={produto} />
            <ProdutoDescricao produto={produto} />
            <ProdutosRelacionados />
        </main>
    )
}