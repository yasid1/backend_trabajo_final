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

app.get("/pc-armado", async(req,resp)=> {
    const listaPc_armados=await Pc_armado.findAll()
    resp.send(listaPc_armados)
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
    const tipoReseña = req.query.tipo
    const reseñasFiltradas   =  await Reseña.findAll({
        where : {
            tipo : tipoReseña
        }
    })
    resp.send(reseñasFiltradas)})

//Recibir reporte
app.post("/reporte", async (req, resp) => {
    const dataRequest = req.body
    const usuarioId = dataRequest.usuario_id
    const reporteEmail = dataRequest.reporte_email
    const reporteNombre = dataRequest.reporte_nombre
    const reporteTelefono = dataRequest.reporte_telefono
    const reporteAsunto = dataRequest.reporte_asunto
    const reporteDescripcion = dataRequest.reporte_descripcion

    if (usuarioId == null || usuarioId == undefined) resp.send({
        error : "ERROR. Debe enviar un reporte_id"
    })
    if (reporteEmail == null || reporteEmail == undefined) resp.send({
        error : "ERROR. Debe enviar un reporteEmail"
    })
    if (reporteNombre == null || reporteNombre == undefined) resp.send({
        error : "ERROR. Debe enviar un reporteNombre"
    })
    if (reporteTelefono == null || reporteTelefono == undefined) resp.send({
        error : "ERROR. Debe enviar un reporteTelefono"
    })
    if (reporteAsunto == null || reporteAsunto == undefined) resp.send({
        error : "ERROR. Debe enviar un reporteAsunto"
    })
    if (reporteDescripcion == null || reporteDescripcion == undefined) resp.send({
        error : "ERROR. Debe enviar un reporteDescripcion"
    })
    try {await Reporte.create({
        usuario_id :  usuarioId,
        nombre : reporteNombre,
        email : reporteEmail,
        telefono : reporteTelefono,
        asunto : reporteAsunto,
        descripcion : reporteDescripcion,
    })}
    catch (error) {
        resp.send ({
            error : `ERROR. ${error}`
        })
    }
    
})
//
app.listen(PUERTO, () => {
    console.log(`Servidor web iniciado en puerto ${PUERTO}`)
})