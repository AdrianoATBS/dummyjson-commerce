"use client";
import { useState, useEffect } from "react";
import { ProdutoResumo } from "../type";
import { getProdutosPaginacao } from "../services/getProdutosPaginacao";
import CardProdutos from "./CardProdutos";
import BotaoGenerico from "@/shared/components/botaoGenerico";
import Link from "next/link";


export default function ProdutoGrid(){ 
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [produtos, setProdutos] = useState<ProdutoResumo[]>([]);
    const [totalProdutos, setTotalProdutos] = useState(0);
    const TAMANHO_DA_PAGINA = 9;

    useEffect(() => {
        const fetchProdutos = async () => {
            try{
                const data = await getProdutosPaginacao(paginaAtual, TAMANHO_DA_PAGINA);
                setProdutos(data.products);
                setTotalProdutos(data.total);
            }
            catch(error){
                console.error("Erro ao buscar produtos:", error);
            
            }
            finally{
                console.log("Busca de produtos finalizada");
            }
        };
        fetchProdutos();
    }, [paginaAtual]);

    const totalPaginas = Math.ceil(totalProdutos / TAMANHO_DA_PAGINA);
    const handlePaginaAnterior = () => {
        if(paginaAtual > 1){
            setPaginaAtual(paginaAtual - 1);
        }
    };

    const handlePaginaProxima = () => {
        if(paginaAtual < totalPaginas){
            setPaginaAtual(paginaAtual + 1);
        }
    };

  return (
    <>
      <section className="grid grid-cols-3 gap-4 pt-4 pb-4">
        {produtos.map((produto) => (
            <Link href={`/produto/${produto.id}`} key={produto.id} 
                className="w-full">
                    <CardProdutos produto={produto} />
            </Link>
        ))}
      </section>

    
      <div className="flex items-center justify-between pt-4 pb-2">
        <BotaoGenerico texto="Anterior" onClick={handlePaginaAnterior} disabled={paginaAtual === 1} 
        className="px-4 py-2 h3 text-white border border-borda bg-cor-primaria rounded-2xl  
         hover:bg-hover transition-all duration-300 ease-in-out active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed" />

        <span className="text-texto-secundario">Página <span className="text-destaque-suave">{paginaAtual}</span> de {totalPaginas}</span>
        <BotaoGenerico texto="Próxima" onClick={handlePaginaProxima} disabled={paginaAtual === totalPaginas} 
         className="px-4 py-2 h3 text-white border border-borda bg-cor-primaria rounded-2xl 
         hover:bg-hover transition-all duration-300 ease-in-out
            active:scale-95 active:shadow-sm  disabled:opacity-50 disabled:cursor-not-allowed" />
      </div>
    </>
  );
}