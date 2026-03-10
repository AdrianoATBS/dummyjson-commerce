import CardProdutoDetalhado from "@/features/produtos/components/CardProdutoDetalhado";
import { getProduto } from "@/features/produtos/services/getProduto";
import ProdutoDescricao from "@/features/produtos/components/ProdutoDescricao";
import ProdutosRelacionados from "@/features/produtos/components/ProdutosRelacionados";
import { getProdutosRelacionados } from "@/features/produtos/services/getProdutosRelacionados";
import { embaralharProdutos } from "@/shared/utils/mbaralharProdutos";
export default async function ProdutoDetalhesPage({ params }: { params: Promise<{ id: string }> }) {

    const {id} = await params;

    const produto = await getProduto(Number(id));
    const produtosRelacionados = await getProdutosRelacionados((produto.category));    
    

    const produtosAleatorios = embaralharProdutos(produtosRelacionados).slice(0, 6).filter(
        (produtoIguais) => produtoIguais.id !== produto.id
    );
   
    
    return(
        <main className="max-w-full mx-auto py-8 px-5">
            <CardProdutoDetalhado produto={produto} />
            <ProdutoDescricao produto={produto} />
            <ProdutosRelacionados produtos={produtosAleatorios}/>
        </main>
    )
}