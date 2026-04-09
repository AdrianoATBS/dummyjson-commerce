import ListaCategoria from "@/features/categoria/components/ListaCategoria";
import { getCategoria } from "@/features/categoria/services/getCategoria";
import ProdutoGrid from "@/features/produtos/components/ProdutoGrid";
import ProdutosContainer from "@/features/produtos/components/ProdutosContainer";

export default async function Home() {
  const categorias = await getCategoria();
  

  return (
      <main className="max-w-7xl mx-auto px-5 ">
        <ListaCategoria categorias={categorias} />
        <ProdutosContainer />
        
      </main>

  )
}
