import { Estado } from "./estado";

export class Persona {
    id: number;
    nombre: string;
    apepat: string;
    apemat: string;
    correo: string;
    telefono: string;
    dni: string;
    estado: Estado;

    constructor(id: number=0, nombre: string ='', apepat: string='', apemat: string = '', correo: string='', 
        telefono: string='', dni: string='', estado: Estado = new Estado()){
        this.id = id;
        this.nombre = nombre;
        this.apepat = apepat;
        this.apemat = apemat;
        this.correo = correo;
        this.telefono = telefono;
        this.dni = dni;
        this.estado = estado;
    }
}
