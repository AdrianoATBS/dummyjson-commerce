import { ProdutoResumo } from "../type";
import CardProdutos from "./CardProdutos";

interface ProdutoGridProps {
    produtos: ProdutoResumo[];
}

export default function ProdutoGrid({ produtos }: ProdutoGridProps){
    return(
        <section className="grid grid-cols-3 gap-4 pt-4 pb-4 ">
            {produtos.map(produto => (
                <CardProdutos produto={produto} key={produto.id} />
            ))}
        </section>
    )
}