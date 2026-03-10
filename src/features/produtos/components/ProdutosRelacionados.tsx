import CardProdutos from "./CardProdutos";
import { ProdutoResumo } from "../type";
import Link from "next/link";
interface ProdutosRelacionadosProps {
    produtos: ProdutoResumo[];
}
export default function ProdutosRelacionados({ produtos}: 
    ProdutosRelacionadosProps) {

    return(
        <section className=" grid grid-cols-3 gap-4 pt-8 pb-5 ">
        
            {produtos.map((produto) => (
                <Link key={produto.id} href={`/produto/${produto.id}`}>
                    <CardProdutos produto={produto} />
                </Link>
            ))}
        </section>
    )
}