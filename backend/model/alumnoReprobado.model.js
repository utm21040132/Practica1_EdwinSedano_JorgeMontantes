import { Schema, model } from "mongoose"; 

const EsquemaAlumnos = new Schema({
    Nombre: {
        type:String
    },
    Apepat:{
        type:String
    },
    Apemat:{
        type:String
    },
    Edad:{
        type:Number
    },
    Carrera:{
        type:String
    }
})


export const ModeloAlumnos = new model("Alumnos Reprobados", EsquemaAlumnos);



