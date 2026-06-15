"use client";
import Link from "next/link";
import CardProdutos from "./CardProdutos";
import { ProdutoDetalhado } from "../type";
import { useState } from "react";

interface ProdutoCategoriaGridProps {
    products: ProdutoDetalhado[];
}
export default function ProdutoCategoriaGrid({ products }: ProdutoCategoriaGridProps) {
        const produtosExibidos = products.slice(1, 8);
        const [avaliacao, setAvaliacao] = useState<number>(3);
        const [avalicaoFlutuante, setAvaliacaoFlutuante] = useState<number |null>(null);

        const categoriaQuantidade = products.length;
    return(

        <section className="flex items-start justify-center">
            <div className="flex flex-col w-1/4 h-full mt-4 p-4 bg-fundo-secundario rounded-lg">
               
                <p className="text-xs text-[#1D1A24]">Refinar por</p>
                <p className="text-sm text-[#1D1A24]">Faixa de preço</p>
                <div className="flex gap-2">
                    <label className="flex items-center gap-1 bg-[#F9F6FC] rounded-lg px-4 py-3 w-full border 
                     border-transparent focus-within:border-purple-300 transition">
                        <span>Min:</span>
                        <input type="number" placeholder="$5"
                        className="w-full bg-transparent text-sm text-gray-800 outline-none [appearance:textfield] 
                        [&::-webkit-outer-spin-button]:appearance-none 
                        [&::-webkit-inner-spin-button]:appearance-none" />
                    </label>

                    <label className="flex items-center gap-1 bg-[#F9F6FC] rounded-lg px-4 py-3 w-full border 
                     border-transparent focus-within:border-purple-300 transition">
                        <span className="text-sm text-gray-800 whitespace-nowrap">Max:</span>
                        <input type="number" placeholder="$200"
                        className="w-full bg-transparent text-sm text-gray-800 outline-none [appearance:textfield] 
                        [&::-webkit-outer-spin-button]:appearance-none 
                        [&::-webkit-inner-spin-button]:appearance-none" />
                    </label>
                </div>
                <p>Experiência do cliente</p>
                <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((estrela) => (
                        <button key={estrela} onClick={() => setAvaliacao(estrela)}
                        onMouseEnter={() => setAvaliacaoFlutuante(estrela)
                        } onMouseLeave={() => setAvaliacaoFlutuante(null)}
                        className={`text-2xl cursor-pointer 
                        ${estrela <= (avalicaoFlutuante || avaliacao) ? 
                        'text-cor-primaria' : 'text-gray-300'}`}>
                            &#9733;
                        </button>
                     ))
                    }
                </div>
            </div>
            <div className="flex flex-col flex-1 pt-4">
                <p className="text-sm text-[#1D1A24] pl-4">{categoriaQuantidade} <span className="text-[#4A4455]"> artefatos descobertos</span></p>
               
                <div className="grid grid-cols-1 gap-4 pt-4 pb-4 sm:grid-cols-2 md:grid-cols-3" >
                {produtosExibidos.map((produto) => (
                    <Link href={`/produto/${produto.id}`} key={produto.id} className="w-full">
                        <CardProdutos produto={produto} />
                    </Link>
                ))}
                </div>
            </div>

            
        </section>
    )
}