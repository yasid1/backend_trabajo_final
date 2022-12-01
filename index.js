const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const { Reporte, Usuario, Reseña, Orden, Orden_producto, Producto, Pc_armado_producto, Pc_armado,Imagenes } = require("./dao")
const { response } = require("express")

const PUERTO = process.env.PORT || 4444

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(cors()) // politica CORS (cualquier origen) <---- TODO: cuidado!!!


app.get("/Usuarios", async (req, resp) => {
    const listaUsuarios = await Usuario.findAll()
    resp.send(listaUsuarios)
})

app.get("/imagenes", async (req, resp) => {
    const listaImagenes = await Imagenes.findAll()
    resp.send(listaImagenes)
})

app.get("/lista_productos", async (req, resp) => {
    const listaProductos = await Producto.findAll()
    resp.send(listaProductos)
})

app.get("/producto", async (req, resp) => {
    const productoId = req.query.producto
    const categoriaId = req.query.categoria

    if (categoriaId == undefined || categoriaId === "-1"){
        // Caso que no se seleccione ciclo
        const listadoProductos = await Producto.findAll({
            where : {
                id : productoId
            }
        })
        resp.send(listadoProductos)
    }else {
        // Caso que SI se seleccione ciclo
        const listadoProductos = await Evaluacion.findAll({
            where : {
                id : productoId,
                categoria : categoriaId
            }
        })
        resp.send(listadoProductos)
    }
})
//Peticiones Diego
app.get("/reseñas", async (req, resp) => {
    const listaReseñas = await Reseña.findAll()
    resp.send(listaReseñas)})
//
app.listen(PUERTO, () => {
    console.log(`Servidor web iniciado en puerto ${PUERTO}`)
})