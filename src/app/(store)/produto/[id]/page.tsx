import CardProdutoDetalhado from "@/features/produtos/components/CardProdutoDetalhado";
import { getProduto } from "@/features/produtos/services/getProduto";
import ProdutoDescricao from "@/features/produtos/components/ProdutoDescricao";
import ProdutosRelacionados from "@/features/produtos/components/ProdutosRelacionados";
import { getProdutosRelacionados } from "@/features/produtos/services/getProdutosRelacionados";
import { embaralharProdutos } from "@/shared/utils/shuffleProdutos";
import { notFound } from "next/navigation";

type Props = {
   params: {id: string}
}

export default async function ProdutoDetalhesPage({ params }: Props) {

    const {id} =  await params;

    
    const produto = await getProduto(Number(id));
    if(!produto){
        notFound();
    }

    const produtosRelacionados = await getProdutosRelacionados((produto.category));    
    

    const produtosAleatorios = embaralharProdutos(produtosRelacionados).filter(
        (produtoIguais) => produtoIguais.id !== produto.id
    ).slice(0, 6);

    
    return(
        <main className="max-w-full mx-auto py-8 px-5">
            <CardProdutoDetalhado produto={produto} />
            <ProdutosRelacionados produtos={produtosAleatorios } categoria={produto.category}/>
        </main>
    )
}