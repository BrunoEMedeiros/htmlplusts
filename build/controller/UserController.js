import { User } from "../model/User";
export function createUser(nome) {
    let usuario = new User(nome);
    console.log(usuario);
}
