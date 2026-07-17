import Image from "next/image";
export default function ProdutoCategoriaBanner() {
    return(
        <section className="w-full h-72 items-center gap-2 p-4
            overflow-hidden relative shadow-xl rounded-lg border-2 border-black" >
                <Image src="/Banner.png" alt="Banner promocional da coleção Spring 2026" fill
                    className=" object-cover " />

                <div className="w-full max-w-xl flex flex-col items-start gap-1 absolute bottom-4 left-4 p-2">
                    <h2 className="h2 text-white">SPRING 2026</h2>
                    <h1 className="text-[3.5rem] text-white font-medium">A edição da beleza</h1>
                    <p className="text-white font-medium">
                    Uma seleção exclusiva de produtos de vanguarda para cuidados com a pele e cosméticos artesanais
                    criada para elevar seu ritual diário.</p>
                </div>           
        </section>
    )
}