import { ProdutoResumo } from "../type";
import CardProdutos from "./CardProdutos";

interface ProdutoGridProps {
    produtos: ProdutoResumo[];
}

export default function ProdutoGrid({ produtos }: ProdutoGridProps){
    return(
        <section className="grid grid-cols-3 gap-4 pt-2 ">
            {produtos.map(produto => (
                <CardProdutos produto={produto} key={produto.id} />
            ))}
        </section>
    )
}