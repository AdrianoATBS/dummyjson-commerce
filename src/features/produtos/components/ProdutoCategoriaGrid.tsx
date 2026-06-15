import Link from "next/link";
import CardProdutos from "./CardProdutos";
import { ProdutoDetalhado } from "../type";
interface ProdutoCategoriaGridProps {
    products: ProdutoDetalhado[];
}
export default function ProdutoCategoriaGrid({ products }: ProdutoCategoriaGridProps) {
        const produtosExibidos = products.slice(1, 8);
    return(

        <section className="flex flex-col items-center justify-center">

            <div className="grid grid-cols-1 gap-4 pt-4 pb-4 sm:grid-cols-2 md:grid-cols-3" >
            {produtosExibidos.map((produto) => (
                <Link href={`/produto/${produto.id}`} key={produto.id}>
                    <CardProdutos produto={produto} />
                </Link>
            ))}
            </div>
        </section>
    )
}