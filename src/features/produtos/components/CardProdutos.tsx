import { ProdutoResumo } from "../type"
import Image from "next/image";

interface CardProdutosProps {
    produto: ProdutoResumo;
    
}


export default function CardProdutos({ produto }: CardProdutosProps){
    return(
        <section className="flex flex-col justify-center items-center 
        border border-borda rounded-lg p-4 gap-2
        hover:shadow-md transition-shadow duration-300
        cursor-pointer">
            <Image src={produto.thumbnail} alt={produto.title} width={200} height={200} 
            className="rounded-lg object-cover" />
            <h2 className="h3 line-clamp-2">{produto.title}</h2>
            <p className="text-texto-secundario">⭐ Avaliação: {produto.rating}</p>
            <p className="text-destaque-suave">Preço: ${produto.price}</p>
            {produto.discountPercentage > 0 && 
            <p className="text-texto-secundario">Desconto: {produto.discountPercentage}%</p>}
        </section>
    )
}