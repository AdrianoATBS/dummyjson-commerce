import { ProdutoDetalhado } from "../type"

interface ProdutoDescricaoProps {
    produto: ProdutoDetalhado;
}

export default function ProdutoDescricao({produto}: ProdutoDescricaoProps) {
    return(
        <section className="max-w-2xl mt-10 ">
            <h2 className="h2">Descrição do produto</h2>
            <p className="text-texto-secundario leading-relaxed">{produto.description}</p>
        </section> 
    )
}