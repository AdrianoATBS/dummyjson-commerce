import BotaoGenerico from "@/shared/components/BotaoGenerico";
import { ProdutoResumo } from "../type";
import Image from "next/image";

interface ProdutoTopoProps {
    produto: ProdutoResumo[];
}

export default function ProdutoTopo({ produto }: ProdutoTopoProps) {
    return (
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 items-center gap-12 mb-8">
 
            <div className="md:col-span-5 flex flex-col justify-center">
                <p className="uppercase text-xs tracking-widest text-cor-primaria mb-2">
                    Coleção de primaria de 2026
                </p>
                <h1 className="text-5xl font-normal leading-tight mb-4">
                    A arte do <span className="text-cor-primaria block md:inline">Brilho Etéreo</span>
                </h1>
                <p className="text-[17px] text-[#4A4455] leading-relaxed mb-6">
                    Explore nossa seleção criteriosa de obras-primas de luxo em cuidados com a pele e fragrâncias, escolhidas a dedo para o apreciador moderno.
                </p>
                <div className="flex items-center gap-4">
                    <BotaoGenerico texto="Coleção da loja" 
                        className="bg-cor-primaria text-white px-6 py-3 rounded-lg hover:bg-cor-primaria-hover focus:outline-none duration-200 ease-in-out shadow-md cursor-pointer text-sm font-medium" />

                    <BotaoGenerico texto="Ver Lookbook" 
                        className="bg-[#EDE5F4] text-cor-primaria px-6 py-3 rounded-lg hover:bg-cor-primaria hover:text-white focus:outline-none transition-colors duration-200 ease-in-out cursor-pointer text-sm font-medium" />
                </div>
            </div>


            <div className="md:col-span-7 relative w-full flex justify-end pt-6 pb-12">
                
             
                <div className="w-[90%] h-[380] relative rounded-lg overflow-hidden ">
                    {produto && produto.length > 0 ? (
                        <Image 
                            src="/perfume.png" 
                            alt="Produto em destaque"
                            fill
                            priority
                            className="object-cover" 
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">Nenhum produto disponível</span>
                        </div>
                    )}
                </div>

                <div className="absolute -bottom-4 left-0 w-[42%] aspect-3/4 z-10
                 p-3 rounded-2xl  ">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                        {produto && produto.length > 0 ? (
                            <Image 
                                src="/perfume2.png" 
                                alt="Produto detalhe"
                                fill
                                className="object-cover" 
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-500">Vazio</span>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
