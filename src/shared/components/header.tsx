import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
export default function Header() {
    return (
        <header className="w-full border-b border-borda bg-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">

                <div className="flex items-center gap-8 cursor-pointer">
                    <Link href="/">
                     <Image src="/logoH.png" alt="Logo" width={58} height={40} />
                    </Link>
                </div>
                
                <div className="relative w-full max-w-md">
                    <input 
                    className="w-full h-10 p-4 pl-2 pr-10 rounded-lg border border-borda texto-secundario
                    focus:outline-none focus:ring-1 focus:ring-destaque-suave  " 
                    type="text" placeholder="Buscar produtos..." />

                    <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2
                     text-cor-primaria cursor-pointer" />    
                </div>

                <div className="flex items-center gap-6 pr-4">
                    <Link href="/login">
                        <FiUser className="text-cor-primaria text-2xl cursor-pointer" />
                    </Link>
                    <Link href="/carrinho">
                        <IoCartOutline className="text-cor-primaria text-2xl cursor-pointer" />
                    </Link>
                </div>  

            </div>
        </header>
    )
}