import ListaCategoria from "@/features/categoria/components/ListaCategoria";
import { getCategoria } from "@/features/categoria/services/getCategoria";
import ProdutoGrid from "@/features/produtos/components/ProdutoGrid";
import getProdutosPorCategoria from "@/features/categoria/services/getProdutosPorCategoria";

export default async function Categoria({params}: {params: {slug: string}}) {
    const slug = await params;
    const categoria = await getCategoria();
    
    const produtos = await getProdutosPorCategoria(slug.slug);

    return(
       <>
            <ListaCategoria categorias={categoria} />
            <ProdutoGrid products={produtos} />
       </>
    )
}