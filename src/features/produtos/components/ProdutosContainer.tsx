"use client";

import { useState, useEffect } from "react";
import { ProdutoResumo } from "../type";
import { getProdutosPaginacao } from "../services/getProdutosPaginacao";
import ProdutoGrid from "./ProdutoGrid";
import BotaoGenerico from "../../../shared/components/BotaoGenerico";

export default function ProdutosContainer() {
   const [paginaAtual, setPaginaAtual] = useState(1);
    const [produtos, setProdutos] = useState<ProdutoResumo[]>([]);
    const [totalProdutos, setTotalProdutos] = useState(0);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState<string | null>(null);
    const TAMANHHO_DA_PAGINA = 9;

    useEffect(() => {
        const fetchProdutos = async () => {
            try{
                setErro(null);
                setCarregando(true);
                const data = await getProdutosPaginacao(paginaAtual, TAMANHHO_DA_PAGINA);
                setProdutos(data.products);
                setTotalProdutos(data.total);
            }
            catch(error){
                setErro("Erro ao buscar produtos.");  
                
            }
            finally{
                window.scrollTo({ top: 0, behavior: "smooth" });
                setCarregando(false);
            }
        }

        fetchProdutos();
    }, [paginaAtual]);

    if(erro){
        return <div className="flex items-center justify-center h-64">
            <span className="text-lg text-red-500">{erro}</span>
        </div>
    }
    
    if(carregando){
        return <div className="flex items-center justify-center h-64">
            <span className="text-lg text-texto-secundario">Carregando produtos...</span>
        </div>
    }

  
    const totalPaginas = Math.ceil(totalProdutos / TAMANHHO_DA_PAGINA);

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
      <ProdutoGrid products={produtos} />

       <div className="flex items-center justify-between pt-4 pb-2"> 
        <BotaoGenerico texto="Anterior" onClick={handlePaginaAnterior} 
            disabled={paginaAtual === 1} className="px-4 py-2 h3
            text-white border border-borda bg-cor-primaria rounded-2xl
            hover:bg-hover transition-all duration-300 ease-in-out 
            active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed" /> 
          
            <span className="text-texto-secundario">Página 
            <span className="text-destaque-suave"> {paginaAtual}</span> de {totalPaginas}</span> 

        <BotaoGenerico texto="Próxima" onClick={handlePaginaProxima} 
            disabled={paginaAtual === totalPaginas} className="px-4 py-2 h3
            text-white border border-borda bg-cor-primaria rounded-2xl
            hover:bg-hover transition-all duration-300 ease-in-out active:scale-95 
            active:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed" /> 
        </div>
   
    </>
  );
}