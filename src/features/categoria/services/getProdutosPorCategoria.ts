import fetcher from "@/lib/fetcher";
import { ProdutoResumo } from "@/features/produtos/type";
interface ProdutosCategoriaAPIResponse {
    products: ProdutoResumo[];
}

export default async function getProdutosPorCategoria(slug: string){

    const data = await fetcher<ProdutosCategoriaAPIResponse>
    (`/products/category/${slug}`);

  
    return data.products;

}