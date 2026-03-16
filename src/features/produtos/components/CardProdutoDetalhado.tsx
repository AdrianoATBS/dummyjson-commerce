"use client";
import BotaoGenerico from "@/shared/components/botaoGenerico";
import { ProdutoDetalhado } from "../type";
import Image from "next/image";
import { GoStarFill } from "react-icons/go";

interface CardProdutoDetalhadoProps {
    produto: ProdutoDetalhado;
}
export default function CardProdutoDetalhado({ produto }: CardProdutoDetalhadoProps) {

    const precoFinal = produto.price * (1 - produto.discountPercentage / 100);
    return(
        <>
        <section className="max-w-6xl mx-auto gap-5 p-4
         bg-white rounded-lg shadow-md grid grid-cols-2">

            <div className="flex justify-center items-center">
                <Image src={produto.images[0] ?? produto.thumbnail} alt={produto.title} width={350} height={400} 
                className="object-contain"/>
            </div>

            <div className="flex flex-col gap-4">

            <h2 className="h2">{produto.title}</h2>
            <p className="text-texto-secundario">{produto.brand}</p>
            <p className="text-texto-secundario flex items-center">
                {produto.rating} <span className="ml-1 text-yellow-400 "> <GoStarFill /> </span>
            </p>
            
            {produto.discountPercentage > 0 ? (
                <>
                <p className="text-texto-secundario line-through">R$ {produto.price.toFixed(2)}</p>
                <p className="destaque-preco">R$ {precoFinal.toFixed(2)}</p>
                <p className="text-green-600 font-semibold">
                    {produto.discountPercentage}% de desconto
                </p>
                <p></p>

                </>
                ) : (
                    <p className="h3">R$ {precoFinal.toFixed(2)}</p>
                )}

            <p className="texto-secundario">{produto.stock} unidades em estoque</p>
            <BotaoGenerico texto="Adicionar ao Carrinho" onClick={() => alert("Produto adicionado ao carrinho!")} 
                className="border border-cor-primaria text-cor-primaria hover:bg-cor-primaria
                 hover:text-white active:scale-95 max-w-2xs shadow-lg"/>

            <p className="texto-secundario">Categoria: {produto.category}</p>
            </div>
        </section>
        </>
    )
}