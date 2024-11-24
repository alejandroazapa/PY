import { Persona } from "./persona";

export class Usuario {
    id: number;
    nombre: string;
    contrasena: string;
    persona: Persona;

    constructor(id: number = 0, nombre: string = '', contrasena: string = '', persona: Persona = new Persona()) {
        this.id = id;
        this.nombre = nombre;
        this.contrasena = contrasena;
        this.persona = persona;
    }
}
