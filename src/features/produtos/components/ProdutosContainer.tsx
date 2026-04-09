"use client";

import { useState, useEffect } from "react";
import { ProdutoResumo } from "../type";
import { getProdutosPaginacao } from "../services/getProdutosPaginacao";
import ProdutoGrid from "./ProdutoGrid";


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

       
   
    </>
  );
}