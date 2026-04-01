import fetcher from "@/lib/fetcher";
import { AutenticacaoResumo } from "../type";


export async function loginUser (username: string, password: string, ): Promise<AutenticacaoResumo> {
    const data = await fetcher<AutenticacaoResumo>('/auth/login', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }

    );
    if(!data || !data.username){
        throw new Error('Resposta inválida do servidor');
    }
    return data;
}