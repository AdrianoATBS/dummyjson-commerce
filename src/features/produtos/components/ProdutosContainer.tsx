"use client";
import { useState, useEffect } from "react";
import { getProdutosPaginacao } from "../services/getProdutosPaginacao";
import ProdutoGrid from "./ProdutoGrid";
import BotaoGenerico from "../../../shared/components/BotaoGenerico";
import ProdutoTopo from "./ProdutoTopo";
import ListaCategoria from "@/features/categoria/components/ListaCategoria";
import { Categoria } from "@/features/categoria/type";
import { ProdutoDetalhado } from "../type";
interface ProdutosContainerProps {
    categorias: Categoria[]
}
export default function ProdutosContainer({categorias}: ProdutosContainerProps) {
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [produtos, setProdutos] = useState<ProdutoDetalhado[]>([]);
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
   

  return (
    <section className="w-full max-w-7xl mx-auto px-5 py-8">
        <ProdutoTopo produto={produtos} />
        <ListaCategoria categorias={categorias} />
        
        <ProdutoGrid products={produtos} />
        
       
        {totalPaginas > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
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
                return null;
            })}
        </div>
        )}
    </section>
  );
}