import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { test } from "./backend/controller/alumnoReprobado.controller.js";

dotenv.config();

mongoose.connect(process.env.urlbd)
.then(() =>{
    console.log("La conexión funciona");
})
.catch((error)=>{
    console.log("Ha ocurrido un error al conectar", error);
})

const app=express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se esta escuchando");
})

test();