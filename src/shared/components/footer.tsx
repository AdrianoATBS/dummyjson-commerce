import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
export default function Footer() {
    return(
        <footer className="w-full border-t border-borda bg-fundo-secundario">
            <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-3">

                <Image src="/logoF.png" alt="Logo" width={58} height={40} />
   
                <div className="flex flex-col items-center gap-3">
                    <h2 className="h2 text-center py-4 text-cor-primaria">
                        Conecte-se com a Viora
                    </h2>
                </div>

                <div className="flex gap-5">
                    <FaInstagram className="text-cor-primaria text-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200" />
                    <BsTwitterX className="text-cor-primaria text-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200" />
                    <FaFacebook className="text-cor-primaria text-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200" />

                </div>
            </div>
            <div className="p-2"> 
                <p className="text-center texto-secundario">
                    &copy; {new Date().getFullYear()} Viora. Todos os direitos reservados.
                </p>
                
           
            </div>
        </footer>
    )
}