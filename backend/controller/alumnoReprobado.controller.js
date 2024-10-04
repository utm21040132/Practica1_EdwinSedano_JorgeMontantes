import { ModeloAlumnos } from "../model/alumnoReprobado.model.js"; 

ModeloAlumnos.create({
    Nombre : "Jorge",
    Apepat : "Montantes",
    Apemat : "Muñoz",
    Edad : 21,
    Carrera : "Ing Gestion de Software"
},{
    Nombre : "Edwin",
    Apepat : "Sedano",
    Apemat : "Ruiz",
    Edad : 21,
    Carrera : "Ing Gestion de Software"
},{
    Nombre : "Daniel",
    Apepat : "Lopez",
    Apemat : "Garcia",
    Edad : 21,
    Carrera : "Ing Gestion de Software"
},{
    Nombre : "Leslie",
    Apepat : "Arjona",
    Apemat : "Aguilar",
    Edad : 21,
    Carrera : "Ing Gestion de Software"
},{
    Nombre : "Diego",
    Apepat : "Salvador",
    Apemat : "Ramirez",
    Edad : 21,
    Carrera : "Ing Gestion de Software"
})



export const test= ()=>{
    console.log("Funciona el controlador");
    
}