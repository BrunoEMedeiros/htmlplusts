import { User } from "../model/User"

function createUser(nome: string){
    let usuario = new User(nome)
    console.log(usuario)
}