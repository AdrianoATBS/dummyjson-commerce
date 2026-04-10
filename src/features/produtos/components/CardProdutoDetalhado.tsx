"use client";
import BotaoGenerico from "@/shared/components/BotaoGenerico";
import { ProdutoDetalhado } from "../type";
import Image from "next/image";
import { GoStarFill } from "react-icons/go";
import { useCarrinho } from "@/shared/hooks/useCarrinho";
import { useState } from "react";
interface CardProdutoDetalhadoProps {
    produto: ProdutoDetalhado;
}
export default function CardProdutoDetalhado({ produto }: CardProdutoDetalhadoProps) {
    const { adicionarAoCarrinho } = useCarrinho();
    const [estoque, setEstoque] = useState(produto.stock);

    const precoFinal = produto.price * (1 - produto.discountPercentage / 100);
    
    const handleDiminuirEstoque = () => {
        if(estoque > 0){
            setEstoque(prevEstoque => prevEstoque - 1);
        }
    }
    const handleAdicionarAoCarrinho = () => {
        if(estoque == 0){
            alert("Produto sem estoque disponível.");
            return;
        }

        adicionarAoCarrinho({
            id: produto.id,
            title: produto.title,
            price: precoFinal,
            thumbnail: produto.thumbnail,
            quantity: 1,
        });
        handleDiminuirEstoque();
    }

    

    return(
        <>
        <article className="max-w-6xl mx-auto gap-5 p-4
         bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2">

            <div className="flex justify-center items-center">
                <Image src={produto.images?.[0] ?? produto.thumbnail} alt={produto.title} width={350} height={400} 
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
                <p className="destaque-preco">R$ {precoFinal.toLocaleString('pt-BR', 
                    {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                <p className="text-green-600 font-semibold">
                    {produto.discountPercentage}% de desconto
                </p>
                <p></p>

                </>
                ) : (
                    <p className="h3">R$ {precoFinal.toFixed(2)}</p>
                )}

            <p className="texto-secundario ">{estoque} unidades em estoque</p>
            <BotaoGenerico texto="Adicionar ao Carrinho" onClick={handleAdicionarAoCarrinho} 
                className="border border-cor-primaria text-cor-primaria hover:bg-cor-primaria
                 hover:text-white active:scale-95 max-w-2xs shadow-lg"/>

            <p className="texto-secundario">Categoria: {produto.category}</p>
            </div>
        </article>
        </>
    )
}