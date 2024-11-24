import { Estado } from "./estado";

export class Rol {
    id: number;
    nombre: string;
    estado: Estado;

    constructor(id: number = 0, nombre: string = '', estado: Estado = new Estado()) {
        this.id = id;
        this.nombre = nombre;
        this.estado = estado;
    }
}
