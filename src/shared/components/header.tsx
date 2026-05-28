import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
export default function Header() {
    return (
        <header className="w-full border-b border-borda bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-14">

                <div className="w-full flex items-center gap-8 cursor-pointer">
                    <Link href="/">
                     <Image src="/logoH.png" alt="Logo" width={58} height={58} 
                      />
                    </Link>
                </div>
                
                <div className="relative w-full max-w-56 mr-5">
                    <input 
                    className="w-full h-7 p-4 pl-3 pr-10 rounded-full border border-borda texto-secundario
                    focus:outline-none bg-texto-secundario/25 " 
                    type="text" placeholder="Buscar produtos..." />

                    <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2
                     text-[#1D1A24] cursor-pointer" />    
                </div>

                <div className="flex items-center gap-6 pr-6">

                    <Link href="/carrinho">
                        <IoCartOutline className="text-[#1D1A24]  cursor-pointer
                         hover:scale-105 active:scale-95 transition-all duration-200" />
                    </Link>
                    <Link href="/login">
                        <FiUser className="text-[#1D1A24]  cursor-pointer hover:scale-105 
                        active:scale-95 transition-all duration-200" />
                    </Link>
                </div>  

            </div>
        </header>
    )
}