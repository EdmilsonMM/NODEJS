 /*
 //importar 
 const frutero = require('./frutas')

 //ForEach = recorre todos los campos de un array
 //count = nos permite saber si los datos son repetitivos

 //Recorre todo los campos
 frutero.forEach(item =>
        //frutas2.push(item)
        console.count(item)
    )

//console.log(frutas)*/
/*
const {mascotas,dinero} = require('./frutas')


mascotas.forEach(item => console.log(item))
console.log(dinero)*/

//////////////////////////NPM I CONWSAY////////////////////////////////////
/*
const  cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moodule",
    e:"oO",
    t:"U"
}));*/

/////////////////////////NPM INSTALL -G NODEMON - Nodejs///////////////////////////////////////////////
/*
const http = require("http")
const server = http.createServer((req,res)=>{
    res.end('La segunda respuesta del servidor')
})

const puerto = 3000
server.listen(puerto,()=>{
    console.log("escuchando peticiones")
})*/

/////////////////////////////////NPM I EXPRESS/////////////////////////////////////////////////////

/*const express = require("express")
const app = express()
const puerto = 3000


app.use(express.static(__dirname+"/public"))

app.get('/',(req,res)=>{
    res.send("Toma tu respuesta kk")
})

app.get('/mangas',(req,res)=>{
    res.send("Lector")
})

app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname+"/public/404.html")
})

app.listen(puerto,()=>{
    console.log('Servidor conectado en el puerto ', puerto)
})*/

/*

const express = require("express")
const app = express()

const puerto = 3000

app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.send("Hola bienvenido a la pagina principal")
})

app.get('/mangas',(req,res)=>{
    res.send("Lector")
})

app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname+"/public/404.html")
})

app.listen(puerto,()=>{
    console.log("Conectado al puerto : ", puerto)
})

*/
/*
const express = require("express")
const app = express()

const port = 3000

app.use(express.static(__dirname+"/public"))

app.get('/',(req,res)=>{
    res.send("Hola te conectaste")
})


app.get('/mangas',(req,res)=>{
    res.send("Hola aqui esta la lista de mangas")
})


app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname+"/public/404.html")
})
app.listen(port,()=>{
    console.log("Servidor prendido en el puerto : ",port)
})*/

const express = require("express")
const app = express()

const port = process.env.PORT || 3000 ;
//indicando que vamos usar el view engine y eleigiendo una plantilla
app.set("view engine","ejs")
//indicando que voy a trabajar con las vistas que se encuentra en la carpeta views
app.set("views",__dirname+"/views")

app.use(express.static(__dirname+"/public"))

app.get('/',(req,res)=>{
    res.render("index", {
        Nombre : "Juan",
        Apellido : "Chavez",
        Edad: 20
    })
})

app.get('/mangas',(req,res)=>{
    res.render("mangas",{
        Manga1: "prueba1",
        Manga2: "prueba2",
        Manga3: "prueba3",
        Manga4: "prueba4"
    })
})

app.use((req,res,next)=>{
    res.status(404).render("404")
})

app.listen(port,()=>{
    console.log("servidor conectado en el puerto : ",port)
})