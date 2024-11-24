import { Estado } from "./estado";

export class Privilegios {
    id: number;
    tipos: string;
    estado: Estado;

    constructor(id: number = 0, tipos: string = '', estado: Estado = new Estado()) {
        this.id = id;
        this.tipos = tipos;
        this.estado = estado;
    }
}
