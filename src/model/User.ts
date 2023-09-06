export class User{
    private nome: string

    constructor(nome: string){
        this.nome = nome
    }

    getNome(){
        return this.nome
    }

    setNome(nome: string){
        this.nome = nome
    }
}