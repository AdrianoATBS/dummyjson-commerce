"use client"
import BotaoGenerico from "@/shared/components/BotaoGenerico";
import InputGenerico from "@/shared/components/InputGenerico";
import Link from "next/link";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { useState } from "react";
import { loginUser } from "../services/postLoginUser";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [visivelSenha, setVisivelSenha] = useState(false);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            const autenticacao = await loginUser(userName, password);
            localStorage.setItem("autenticacao", JSON.stringify(autenticacao));

            setUsername("");
            setPassword("");
            
            router.push("/");
        }catch(error){
            console.error("Erro ao fazer login:", error);

        }finally{
            console.log("Processo de login concluído.");
            
        }
    }


    return(
        <section className="w-full max-w-4xl mx-auto overflow-hidden rounded-2xl md:grid md:grid-cols-2 " >

           <div className="relative hidden md:block w-full h-full min-h-[550] ">
                
            <Image src="/Left Side_ Visual Narrative.png" 
                    alt="Imagem de Login" 
                    fill
                    className="rounded-bl-2xl rounded-tl-2xl" 
                    />
               
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-6 p-8 
            border border-borda shadow-lg  rounded-br-2xl rounded-tr-2xl">
                    <div className="flex flex-col justify-end items-start gap-2">

                    <h2 className="h1 font-bold bg-gradient-to-r
                     from-hover to-cor-primaria bg-clip-text text-transparent
                     leading-tight ">Bem vindo de volta
                    </h2>
                    <p className="texto-secundario break-word max-w-prose">Por favor, insira suas credenciais para continuar.</p>
                    
                    </div>

                    <div className="w-full flex flex-col  gap-1 relative">
                    <label className="self-start text-lg font-medium text-cor-primaria">E-mail ou nome do usuário </label>
                        
                            <FaRegUser className="absolute top-9 left-0 -translate-x-2/5 -translate-y-1/12
                             text-texto-secundario w-4 h-4 ml-3 mt-[0.6rem] pointer-events-none" />
                            
                            <InputGenerico type="text" placeholder="seuEmail@dominio.com"
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                            className="h3 bg-[#E8DFEE]/1120 border border-borda rounded-lg pl-6 px-3 py-2 shadow-sm
                            focus:outline-none focus:ring-2 focus:ring-cor-primaria "/>   
                                  
                    </div>
                    
                    <div className="w-full flex flex-col gap-1 relative">
                        <label className="self-start text-lg font-medium text-cor-primaria">Senha </label>
                       

                        <MdLockOutline className="absolute top-9 left-0 -translate-x-2/5 -translate-y-1/12
                             text-texto-secundario w-4 h-4 ml-3 mt-[0.6rem] pointer-events-none" />
                      
                        <InputGenerico type={visivelSenha ? "text" : "password"} placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h3 bg-[#E8DFEE]/1120 border border-borda rounded-lg pl-6 px-3 py-2 shadow-sm
                        focus:outline-none focus:ring-2 focus:ring-cor-primaria " />
                        {visivelSenha ? (
                            <FaEyeSlash className="absolute top-9 right-3 translate-x-2/5 -translate-y-1/12
                            text-texto-secundario w-4 h-4 mr-3 mt-[0.6rem] cursor-pointer"
                            onClick={() => setVisivelSenha(false)} />
                        ) : (
                            <FaEye className="absolute top-9 right-3 translate-x-2/5 -translate-y-1/12
                            text-texto-secundario w-4 h-4 mr-3 mt-[0.6rem] cursor-pointer"
                            onClick={() => setVisivelSenha(true)} />
                        )}
                      
                        
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <InputGenerico type="checkbox" id="rememberMe" 
                            className="mr-2 cursor-pointer border-2 
                            bg-[#E8DFEE]/1120 w-3 h-3" />
                            <label htmlFor="rememberMe" className="text-texto-secundario text-sm cursor-pointer">
                                Lembrar-me
                            </label>
                        </div>

                        <p className="text-cor-primaria text-sm cursor-pointer
                        hover:text-hover hover:underline">Esqueceu sua senha ?</p>
                    </div>

                    <BotaoGenerico texto="Entrar ->" 
                        className="w-full h3 border border-borda bg-cor-primaria
                         text-white rounded-lg px-3 py-2 shadow-sm font-bold
                        cursor-pointer active:scale-95 hover:bg-hover
                       " />
                    
                    <p className="text-texto-secundario text-center text-sm">
                        Não tem uma conta? 
                        <Link 
                        href="/register" className="text-sm
                         text-cor-primaria hover:text-hover hover:underline">Cadastre-se</Link>
                    </p>

                    <div className="w-full flex justify-between items-center
                    4">
                        <div className="border-b-2 border-borda w-24 h-1"></div>
                        <p className="text-texto-secundario">Conecte com sua conta</p>
                        <div className="border-b-2 border-borda w-24 h-1 "></div>
                    </div>

                    <div className="w-full flex flex-row gap-2 justify-center items-center">
                       
                        <FaGoogle className="w-full max-w-1/3 border border-borda
                        text-cor-primaria h-10 px-3 py-2 shadow-lg font-bold rounded-2xl
                        cursor-pointer active:scale-95 hover:bg-[#F3F4F6]" />
                        
                        <FaGithub className="w-full max-w-xs border border-borda
                        text-cor-primaria h-10 px-3 py-2 shadow-lg font-bold rounded-2xl
                        cursor-pointer active:scale-95 hover:bg-[#F3F4F6] " />
                       
                        <FaXTwitter className="w-full max-w-xs border border-borda
                        text-cor-primaria h-10 px-3 py-2 shadow-lg font-bold rounded-2xl
                        cursor-pointer active:scale-95 hover:bg-[#F3F4F6] " />
                    </div>

            </form>
        </section>
    )
}