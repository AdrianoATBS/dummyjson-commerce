"use client";

import CardProdutos from "./CardProdutos";
import Link from "next/link";
import { ProdutoDetalhado } from "../type";
import CardProdutoDestaque from "./CardProdutoDestaque";
interface ProdutoGridProps {
    products: ProdutoDetalhado[];
    paginaAtual?: number;
}

export default function ProdutoGrid({ products,  paginaAtual }: ProdutoGridProps){ 

  const ehPrimeiraPagina = paginaAtual === 1;
  const QUANTIDADE_PRODUTOS_POR_PAGINA = 8;
  const indiceInicial = ehPrimeiraPagina ? 1 : 0;
  const produtosExibidos = products.slice(indiceInicial, indiceInicial + QUANTIDADE_PRODUTOS_POR_PAGINA);
  const produtoDestaque = ehPrimeiraPagina ? products[0] : undefined;
  return (
    <section>
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
    
    </section>
  );
}