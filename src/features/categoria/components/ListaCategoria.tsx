"use client";
import { Categoria } from "../type";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";


interface ListaCategoriaProps{
    categorias: Categoria[]
}

export default function ListaCategoria({categorias}: ListaCategoriaProps) {
    return(
        <>
            <nav className="w-full h-auto flex flex-col items-center justify-center gap-4 pt-4 
            relative py-4 border-b border-borda">
                

                <div className="pointer-events-none absolute left-0 top-0 h-full w-16
                bg-linear-to-r from-fundo-primario to-transparent z-10" />

           
                <div className="pointer-events-none absolute right-0 top-0 h-full w-16 
                bg-linear-to-l from-fundo-primario to-transparent z-10" />
    

                <Swiper className="w-full px-20"
                modules={[FreeMode]}
                freeMode={true}
                slidesPerView="auto"
                spaceBetween={20}>
                    {categorias.map((categoria) => (
                        <SwiperSlide key={categoria.slug} style={{width: "auto"}}>
                            <Link href={`/categoria/${categoria.slug}`} className="h3 text-texto-secundario p-2 px-5 rounded-full hover:bg-fundo-secundario 
                            hover:text-destaque-suave transition-all 
                            duration-200 active:scale-95 cursor-pointer">{categoria.name}</Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </nav>
        </>
    )
}