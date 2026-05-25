"use client"
import BotaoGenerico from "@/shared/components/BotaoGenerico";
import InputGenerico from "@/shared/components/InputGenerico";
import { useState } from "react";
import { registerUser } from "../services/postRegisterUser";
import { useRouter } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { FaAt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";
export  default function RegisterForm() {

    const router = useRouter();

    const [nomeTodo, setNomeTodo] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const [visivelSenha, setVisivelSenha] = useState(false);
    const [visivelConfirmarSenha, setVisivelConfirmarSenha] = useState(false);
    const handleSubmit  = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const ageNumber = Number(senha);
            if(isNaN(ageNumber) || ageNumber <= 0){
                throw new Error("Informe uma senha válida.");
            }
            const autenticacao = await registerUser(nomeTodo, email, ageNumber);
            localStorage.setItem("autenticacao", JSON.stringify(autenticacao));


            setNomeTodo("");
            setEmail("");
            setSenha("");
            setConfirmarSenha("");
            router.push("/");
        } catch (error) {
            console.error("Erro ao registrar usuário:", error); 
        }
        finally{
            console.log("Processo de registro concluído.");
        }
    }

    return(
        <section className="w-full max-w-4xl mx-auto 
        overflow-hidden rounded-2xl md:grid md:grid-cols-2 " >
            <div className=" w-full h-full 
             " >
               <div className="bg-linear-to-br from-[#630ED4] via-[#630ED4]/90 to-cor-primaria/80 w-full rounded-tl-2xl h-[380] flex-col
                items-start justify-start p-8 gap-3  relative hidden md:flex ">
                    <h2 className="h2 text-[#EDE0FF]">Viora</h2>
                    <h3 className="h1 text-[#EDE0FF]">Bem-vindo!</h3>
                    <p className="text-[#EDE0FF]">   
                    Vivencie uma experiência de compras inspirada em galerias de arte
                    onde cada detalhe é cuidadosamente selecionado para o seu
                    gosto.</p>
                    <Image src="/Container.png" 
                    alt="Imagem de Registro" width={400} height={300} 
                    />
                    <p className="text-[#EDE0FF]">
                        Junte-se a mais de 12.000 curadores do mundo todo.
                    </p>
               </div>
               <div className="bg-[#F9F1FF] h-full w-full rounded-bl-2xl"></div>
            </div>

            <form onSubmit={handleSubmit}
            className="flex flex-col w-full 
            justify-center items-start border border-borda rounded-tr-2xl rounded-br-2xl
            p-8 shadow-md gap-4  ">
                
                <h1 className="h1 font-bold bg-linear-to-r from-hover
                 to-cor-primaria bg-clip-text text-transparent">Crie sua conta</h1>
                <p className="texto-secundario break-word max-w-prose">
                    Insira seus dados para começar sua experiência personalizada.
                </p>

                <div className="w-full flex flex-col gap-1 relative">
                <label className="self-start text-lg font-medium text-cor-primaria">Nome Todo: </label>
                    
                    <FaRegUser className="absolute top-9 left-0 -translate-x-2/5 -translate-y-1/12
                    text-texto-secundario w-4 h-4 ml-3 mt-[0.6rem] pointer-events-none" />
                    <InputGenerico value={nomeTodo} onChange={(e) => setNomeTodo(e.target.value)}
                    type="text" placeholder="John Doe" 
                    className="h3 bg-[#EDE5F4] border border-borda rounded-md px-3 py-2 shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-cor-primaria pl-7" />
                </div>

                <div className="w-full flex flex-col gap-1 relative">
                <label className="self-start text-lg font-medium text-cor-primaria">Email:</label>
                    <FaAt className="absolute top-9 left-0 -translate-x-2/5 -translate-y-1/12
                    text-texto-secundario w-4 h-4 ml-3 mt-[0.6rem] pointer-events-none" />
                    <InputGenerico value={email} onChange={(e) => setEmail(e.target.value)} 
                    type="email" placeholder="john.doe@example.com" 
                    className="h3 bg-[#EDE5F4] border border-borda rounded-md px-3 py-2 shadow-sm
                        focus:outline-none focus:ring-2 focus:ring-cor-primaria pl-7" />
                </div>

                <div className="w-full flex flex-row justify-between gap-4 ">
                    <div className="flex flex-1 flex-col gap-1 relative">
                        <label className="self-start text-lg font-medium text-cor-primaria">Senha </label> 
                            
                            <MdLockOutline className="absolute top-9 left-0 -translate-x-2/5 -translate-y-1/12
                            text-texto-secundario w-4 h-4 ml-3 mt-[0.6rem] pointer-events-none" />
                            <InputGenerico value={senha} onChange={(e) => setSenha(e.target.value)} 
                            type={visivelSenha ? "text" : "password"}  placeholder="••••••••"
                            className="w-full h-10 border bg-[#EDE5F4] border-borda rounded-md px-3 py-2 shadow-sm 
                            focus:outline-none focus:ring-2 focus:ring-cor-primaria pl-7" />
                            
                            {visivelSenha ? (
                                <FaEyeSlash className="absolute top-9 right-3 translate-x-2/5 -translate-y-1/12
                                text-texto-secundario w-4 h-4 mr-3 mt-[0.6rem] cursor-pointer"
                                onClick={() => setVisivelSenha(false)} />
                            ): (
                                <FaEye className="absolute top-9 right-3 translate-x-2/5 -translate-y-1/12
                                text-texto-secundario w-4 h-4 mr-3 mt-[0.6rem] cursor-pointer"
                                onClick={() => setVisivelSenha(true)} />
                            )}

                    </div>
                    
                    <div className="flex flex-1 flex-col gap-1 relative">
                        <label className="self-start text-lg font-medium text-cor-primaria">Confirmar Senha </label>        
                            <MdLockOutline className="absolute top-9 left-0 -translate-x-2/5 -translate-y-1/12
                            text-texto-secundario w-4 h-4 ml-3 mt-[0.6rem] pointer-events-none" />
                            <InputGenerico value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} 
                            type={visivelConfirmarSenha ? "text" : "password"} placeholder="••••••••"
                            className="w-full h-10 border bg-[#EDE5F4] border-borda rounded-md px-3 py-2 shadow-sm
                            focus:outline-none focus:ring-2 focus:ring-cor-primaria pl-7" />
                            
                            {visivelConfirmarSenha ? (
                                <FaEyeSlash className="absolute top-9 right-3 translate-x-2/5 -translate-y-1/12
                                text-texto-secundario w-4 h-4 mr-3 mt-[0.6rem] cursor-pointer"
                                onClick={() => setVisivelConfirmarSenha(false)} />
                            ):(
                                <FaEye className="absolute top-9 right-3 translate-x-2/5 -translate-y-1/12
                                text-texto-secundario w-4 h-4 mr-3 mt-[0.6rem] cursor-pointer"
                                onClick={() => setVisivelConfirmarSenha(true)} />
                            )}
                        
                    </div>
                </div>

                <div className="w-full flex justify-start items-center gap-4">
                    <InputGenerico type="checkbox" id="Relembre-me"
                    className="w-4 h-4 border-2 border-borda
                    bg-[#E8DFEE]/1120 rounded-sm cursor-pointer" />
                    <label htmlFor="Relembre-me" className="text-sm text-texto-secundario">
                        Eu concordo com o
                        <Link href="/termos" className="text-cor-primaria hover:text-hover hover:underline"> Termos de Serviço</Link> 
                        e a 
                        <Link href="/privacidade" className="text-cor-primaria hover:text-hover hover:underline"> Política de Privacidade</Link>.
                    </label>
                </div>

                <div className="w-full flex flex-col justify-center items-center gap-4">

                <BotaoGenerico texto="Registrar conta ->" type="submit"
                    className="w-full h-10  bg-cor-primaria
                    text-white rounded-lg px-3 py-2 font-bold shadow-xl
                    cursor-pointer active:scale-95
                    hover:bg-hover" />

                    <p className="text-sm text-[#4A4455]">Já tem uma conta? 
                        <Link href="/login" className="text-cor-primaria
                         hover:text-hover hover:underline"> Faça login</Link></p>
                </div>
                <div className="w-full flex justify-center items-center gap-5">
                    <FaGoogle className="w-6 h-6 text-[#1D1A24] cursor-pointer" />
                    <FaGithub className="w-6 h-6 text-[#1D1A24] cursor-pointer" />
                    <FaXTwitter className="w-6 h-6 text-[#1D1A24] cursor-pointer" />
                </div>                   
            </form>
        </section>
    )
}