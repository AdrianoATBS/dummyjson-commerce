"use client";
import { Categoria } from "../type";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Link from "next/link";


interface ListaCategoriaProps{
    categorias: Categoria[]
}

export default function ListaCategoria({categorias}: ListaCategoriaProps) {
    return(
        <>
            <nav className="w-full max-w-5xl h-auto flex flex-col items-center justify-center gap-4 pt-4 
            relative py-4 ">
                

                <div className="pointer-events-none absolute left-0 top-0 h-full w-3
                bg-linear-to-r from-fundo-primario to-transparent z-10" />
                

                <div className="pointer-events-none absolute right-0 top-0  h-full w-3
                bg-linear-to-l from-fundo-primario to-transparent z-10" />
                
                <div className="flex items-center gap-1 text-xs text-zinc-400 animate-pulse mb-1">
                    <span>Deslize</span>
                     <span>&rarr;</span>
                </div>

                

                <Swiper className="w-full px-20 "
                modules={[FreeMode]}
                freeMode={true}
                slidesPerView="auto"
                spaceBetween={20}>
                    {categorias.map((categoria) => (
                        <SwiperSlide key={categoria.slug} style={{width: "auto"}}>
                            <Link href={`/categoria/${categoria.slug}`} className="
                            h3 inline-block text-fundo-secundario bg-violet-600
                             hover:bg-violet-700 py-[0.4rem] px-5 
                             rounded-full transition-all duration-200 
                             active:scale-95 cursor-pointerr">{categoria.name}</Link>         
                        </SwiperSlide>
                    ))}
                </Swiper>

            </nav>
        </>
    )
}