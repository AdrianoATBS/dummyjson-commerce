"use client";
import BotaoGenerico from "@/shared/components/BotaoGenerico";
import { ProdutoDetalhado } from "../type";
import Image from "next/image";
import { GoStarFill } from "react-icons/go";
import { useCarrinho } from "@/shared/hooks/useCarrinho";
import { useState} from "react";
import ProdutoDescricao from "./ProdutoDescricao";
import { useRouter } from "next/navigation";
import { PiTruckLight } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";
import { FiRotateCcw } from "react-icons/fi";

interface CardProdutoDetalhadoProps {
    produto: ProdutoDetalhado;
}
export default function CardProdutoDetalhado({ produto }: CardProdutoDetalhadoProps) {
    const { adicionarAoCarrinho } = useCarrinho();
    const [estoque, setEstoque] = useState(produto.stock);
    const router = useRouter();

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
    const handleComprarAgora = () => {
        handleAdicionarAoCarrinho();
        router.push("/carrinho");
    }
   
    const avaliacoesAleatorias = ((produto.id * 143) % 999) + 10;
  
    return(    
        <article className="max-w-6xl mx-auto gap-5 p-4
            bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2">

            <div className="flex justify-center items-center bg-black/5 rounded-lg p-4">
                <Image src={produto.images?.[0] ?? produto.thumbnail} alt={produto.title} width={350} height={400} 
                className="object-contain"/>
            </div>

            <div className="flex flex-col gap-4">
            {produto.brand ?(
                <p className="text-cor-primaria text-sm font-light tracking-widest ">{produto.brand} / {produto.category}</p>

            ) : (
                <p className="text-cor-primaria text-sm font-light tracking-widest ">{produto.category}</p>
            )}
            
            <h2 className="h1">{produto.title}</h2>
            
            <div className="flex items-center gap-1">
                <span className="ml-1 text-yellow-400 "> <GoStarFill /> </span>
                <p className="text-texto-secundario text-xs">
                    ({produto.rating} / { avaliacoesAleatorias} avaliações)
                </p>
            </div>
            
            
            {produto.discountPercentage > 0 ? (
                <div className="flex items-center justify-between gap-2 border-t border-b border-[#CCC3D8]/25 p-2">
                    <div className="flex items-center gap-2">
                        <p className="text-3xl font-bold">R$ {precoFinal.toLocaleString('pt-BR', 
                            {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                        <p className="text-[#4A4455] line-through">R$ {produto.price.toFixed(2)}</p>
                    </div>

                    <p className="text-[#7D3D00] ">
                        {produto.discountPercentage}% de desconto
                    </p>
                </div>
                ) : (
                    <p className="text-3xl font-bold">R$ {precoFinal.toFixed(2)}</p>
                )}
            <ProdutoDescricao produto={produto} />

            <div className="h-full flex flex-col justify-center items-center gap-2 ">
                <BotaoGenerico texto="Adicionar ao Carrinho" onClick={handleAdicionarAoCarrinho} 
                    className="w-full p-3 rounded-2xl  bg-cor-primaria text-white hover:bg-hover cursor-pointer
                    hover:text-white active:scale-95 max-w-2xs shadow-lg"/>
              
                <BotaoGenerico texto="Comprar Agora" onClick={handleComprarAgora} 
                className="w-full p-3 rounded-2xl  bg-[#EDE5F4]
                text-cor-primaria hover:bg-[#D9C9F1]/15 cursor-pointer
                hover:text-cor-primaria active:scale-95 max-w-2xs shadow-lg"/>    
            </div>
            
            <div className="w-full max-w-sm mx-auto flex items-center justify-between gap-5 mt-4">
                <div className="flex flex-col items-center gap-2 flex-1">
                    <PiTruckLight className="text-cor-primaria "  strokeWidth={10}/>
                    <p className="text-[#4A4455] text-[0.625rem]">Frete Grátis</p>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                    <GoShieldCheck className="text-cor-primaria " strokeWidth={1} />
                    <p className="text-[#4A4455] text-[0.625rem]">Garantia em 2 anos</p>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 ">
                    <FiRotateCcw className="text-cor-primaria "  strokeWidth={2}/>
                    <p className="text-[#4A4455] text-[0.625rem]">Devolução em 30 dias</p>
                </div>
            </div>
                
            </div>
        </article>
    )
}