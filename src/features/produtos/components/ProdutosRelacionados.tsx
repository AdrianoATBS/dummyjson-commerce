import CardProdutos from "./CardProdutos";
import { ProdutoResumo } from "../type";
import Link from "next/link";
interface ProdutosRelacionadosProps {
    produtos: ProdutoResumo[];
}
export default function ProdutosRelacionados({ produtos}: 
    ProdutosRelacionadosProps) {

    return(
        <section >
            <h2 className="h2 col-span-3">Produtos Relacionados</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-5">
                {produtos.map((produto) => (
                    <Link key={produto.id} href={`/produto/${produto.id}`}>
                        <CardProdutos produto={produto} />
                    </Link>
                ))}

            </div>
        </section>
    )
}