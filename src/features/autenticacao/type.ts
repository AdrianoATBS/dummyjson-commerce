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