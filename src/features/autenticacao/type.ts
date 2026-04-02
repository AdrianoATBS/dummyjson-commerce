export interface RegisterUser {
    id: number,
    username: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
    accessToken: string
    refreshToken: string
}

export interface AutenticacaoResumo{
    username: string;
    password: string;
}


export interface RegisterUsers{
    id: number,
    firstName: string,
    lastName: string,
    age: number,
}