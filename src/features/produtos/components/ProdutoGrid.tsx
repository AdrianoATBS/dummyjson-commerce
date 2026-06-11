"use client";

import CardProdutos from "./CardProdutos";
import Link from "next/link";
import { ProdutoDetalhado } from "../type";
import CardProdutoDestaque from "./CardProdutoDestaque";
interface ProdutoGridProps {
    products: ProdutoDetalhado[];
    produtoDestaque: ProdutoDetalhado;
    paginaAtual: number;
}

export default function ProdutoGrid({ products, produtoDestaque, paginaAtual }: ProdutoGridProps){ 

  const ehPrimeiraPagina = paginaAtual === 1;
  const produtosExibidos = ehPrimeiraPagina ? products.slice(1,9) : products.slice(0,8);
  
  return (
    <>
      <div className=" grid grid-cols-1 gap-4 pt-4 pb-4 sm:grid-cols-2 md:grid-cols-3">
        {produtoDestaque && ehPrimeiraPagina && (
            <Link href={`/produto/${produtoDestaque.id}`} key={produtoDestaque.id} 
            className=" col-span-2">
                <CardProdutoDestaque produtoDestaque={produtoDestaque} />
            </Link>
        )}
        {produtosExibidos.map((produto) => (
            <Link href={`/produto/${produto.id}`} key={produto.id}>
            <CardProdutos produto={produto} />
            </Link>
        ))}
    </div>
    
    </>
  );
}