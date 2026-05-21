import Link from "next/link";

export default function HeaderLoginRegistro() {
    return(
        <header className="w-full flex flex-row justify-between items-center 
        gap-4 h-24 px-8 py-5  bg-gradient-to-r from-transparent via-[#E8DFEE]/15 to-[#E8DFEE]/30
        mb-4
        rounded-lg ">
            <h1 className="text-3xl font-bold text-cor-primaria pl-4">Viora</h1>
            <Link href="/" 
            className="text-texto-secundario text-base
            text-center cursor-pointer hover:underline pr-5">Voltar para home</Link>
        </header>
    )
}