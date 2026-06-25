import CardProdutos from "./CardProdutos";
import { ProdutoDetalhado } from "../type";
import Link from "next/link";
interface ProdutosRelacionadosProps {
    produtos: ProdutoDetalhado[] ;
    categoria: string;
}
export default function ProdutosRelacionados({ produtos, categoria }: 
    ProdutosRelacionadosProps) {

    return(
        <section >
            <div className="flex justify-between">
                <h2 className="h2 col-span-3 mt-10">Produtos Relacionados</h2>
                <Link href={`/categoria/${categoria}`} 
                className="text-cor-primaria font- text-sm mt-10 inline-flex items-center gap-1 group">
                    <span className="group-hover:underline underline-offset-4">Ver toda galeria </span>
                    <span className="font-extrabold text-base leading-none"> &rarr;</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-5">
                {produtos.slice(0, 3).map((produto) => (
                    <Link key={produto.id} href={`/produto/${produto.id}`}>
                        <CardProdutos produto={produto} />
                    </Link>
                ))}

            </div>
        </section>
    )
}