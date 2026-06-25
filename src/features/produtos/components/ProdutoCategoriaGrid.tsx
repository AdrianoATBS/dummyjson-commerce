"use client";
import Link from "next/link";
import CardProdutos from "./CardProdutos";
import { ProdutoDetalhado } from "../type";
import { useState, useEffect } from "react";
import BotaoGenerico from "@/shared/components/BotaoGenerico";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface ProdutoCategoriaGridProps {
    produtos: ProdutoDetalhado[];
}
export default function ProdutoCategoriaGrid({ produtos }: ProdutoCategoriaGridProps) {
    const [avaliacao, setAvaliacao] = useState<number>(3);
    const [avalicaoFlutuante, setAvaliacaoFlutuante] = useState<number |null>(null);
    
    const [paginaAtual, setPaginaAtual] = useState(1);
    const produtosPorPagina = 8;
    const totalPaginas = Math.ceil(produtos.length / produtosPorPagina);
    
    const categoriaQuantidade = produtos.length;
  
    
    const produtosExibidos = paginaAtual === 1 ? produtos.slice(0, produtosPorPagina) : 
    produtos.slice((paginaAtual - 1) * produtosPorPagina, paginaAtual * produtosPorPagina);
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [paginaAtual]);

    return(

        <section className="flex items-start justify-center gap-10">
            <div className="flex flex-col w-1/4 h-full mt-4 p-4 bg-fundo-secundario rounded-lg">
               
                <p className="text-xs text-[#1D1A24]">Refinar por</p>
                <p className="text-sm text-[#1D1A24]">Faixa de preço</p>
                <div className="flex gap-2 lg:flex-col lg:w-42">
                    <label className="flex items-center gap-1 bg-[#F9F6FC] rounded-lg px-4 py-3 w-full border 
                     border-transparent focus-within:border-purple-300 transition lg:">
                        <span>Min:</span>
                        <input type="number" placeholder="$5"
                        className="w-full bg-transparent text-sm text-gray-800 outline-none 
                        [appearance:textfield] 
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
                <p className="text-sm text-[#1D1A24] pl-4">{categoriaQuantidade}
                     <span className="text-[#4A4455]"> artefatos descobertos</span></p>
               
                <div className="grid grid-cols-1  pt-4 pb-4 gap-4 sm:grid-cols-2 md:grid-cols-2 
                xl:grid-cols-3" >
                {produtosExibidos.map((produto) => (
                    <Link href={`/produto/${produto.id}`} key={produto.id} className="w-full">
                        <CardProdutos produto={produto} />
                    </Link>
                ))}
            </div>
            {totalPaginas > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                    <BotaoGenerico texto={<IoIosArrowBack />} onClick={() =>
                     setPaginaAtual((prev) => Math.max(prev - 1, 1))}
                    className={`px-3 py-1 text-[#4A4455] ${paginaAtual === 1 ?
                     "opacity-50 cursor-not-allowed" : "cursor-pointer hover:text-cor-primaria"}`} />
                    {Array.from({ length: totalPaginas}, (_, index) => {
                        const pagina = index + 1;
                        const ehPrimeiraOuUltima = pagina === 1 || pagina === totalPaginas;
                        const ehVizinha = Math.abs(pagina - paginaAtual) <= 1;
                        if(ehPrimeiraOuUltima || ehVizinha){
                            return(
                                <button key={index} onClick={() => setPaginaAtual(pagina)}
                                className={`px-3 py-1 rounded-full cursor-pointer
                                ${paginaAtual === pagina ? "bg-cor-primaria text-white" :
                                "text-gray-700 hover:bg-gray-300"}`}>
                                    {pagina}
                                </button>
                            );
                        }
                        if(pagina === 2 && paginaAtual > 3){
                            return <span key="reticencias-inicio" className="px-3 py-1">...</span>
                        }
                        if(pagina === totalPaginas - 1 && paginaAtual < totalPaginas - 3){
                            return <span key="reticencias-fim" className="px-3 py-1">...</span>

                        }
                        return null
                      
                    })}
                    <BotaoGenerico texto={<IoIosArrowForward />} onClick={() => setPaginaAtual((prev) => 
                    Math.min(prev + 1, totalPaginas))}
                    className={`px-3 py-1 text-[#4A4455] ${paginaAtual === totalPaginas ?
                        "opacity-50 cursor-not-allowed" : "cursor-pointer hover:text-cor-primaria"}`} />
                </div>
            )}
        </div>

        </section>
    )
}
            

