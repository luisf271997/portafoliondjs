//importacion de modulos
import express from "express";
import {dirname, join} from  'path';
import {fileURLToPath} from 'url';
import indexRoutes from "./routes/index.js"
//configuracion de express y escucha del puerto
const app =  express()

const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000
/*console.log(join(__dirname,'views'))*/


app.set( 'views', join(__dirname, "views"))

app.set('view engine', 'ejs')

app.use(indexRoutes)
app.use(express.static(join(__dirname, 'public')))

app.listen(process.env.PORT || port)
console.log("el servidpor esta activo en el puerto", 3000);