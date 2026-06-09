import ListaCategoria from "@/features/categoria/components/ListaCategoria";
import { getCategoria } from "@/features/categoria/services/getCategoria";
import ProdutosContainer from "@/features/produtos/components/ProdutosContainer";

export default async function Home() {
  const categorias = await getCategoria();
  

  return (
      <main className="w-full max-w-7xl mx-auto px-5 ">
        <ProdutosContainer categorias={categorias} />
        
       
      </main>

  )
}
