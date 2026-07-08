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
                        <Image src="/logoH.png" alt="Logo" width={58} height={58} />
                    </Link>
                </div>
                
                <div className="flex items-center gap-4  relative">
                    <div className="flex items-center gap-2 bg-fundo-secundario px-4 py-1 ">
                        <CiSearch className="text-[#1D1A24] cursor-pointer hover:scale-105 
                            active:scale-95 transition-all duration-200 absolute left-5 " size={24} />
                       
                        <input type="text" placeholder="Pesquisar produtos..."
                        className="w-64 h-10 pl-7 pr-9 rounded-full bg- border
                         border-borda focus:outline-none  bg-[#E8DFEE]/60
                        " />
                    
                    </div>
                
                </div>
                

                <div className="flex items-center gap-6 pr-6">
                    <div className="relative group flex justify-center">

                        <Link href="/carrinho" title="Carrinho de Compras">
                            <IoCartOutline className="text-cor-primaria  cursor-pointer
                            hover:scale-105 active:scale-95 transition-all duration-200" size={24} />
                        </Link>
                        <span className="absolute top-8 scale-0 transition-all rounded
                         bg-gray-800 p-2 text-xs text-white group-hover:scale-100 
                         whitespace-nowrap z-50 shadow-lg">
                            Carrinho
                        </span>
                    </div>
                    <div className="relative group flex justify-center">
                        <Link href="/login" title="Login">
                            <FiUser className="text-cor-primaria  cursor-pointer hover:scale-105 
                            active:scale-95 transition-all duration-200"  size={24} />
                        </Link>
                        <span className="absolute top-8 scale-0 transition-all rounded bg-gray-800 p-2 text-xs
                        text-white group-hover:scale-100 whitespace-nowrap z-50 shadow-lg">
                            Login
                        </span>
                    </div>
                </div>  

            </div>
        </header>
    )
}