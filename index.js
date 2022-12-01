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

app.get("/pc_armado", async (req, resp) => {
    const listaPcarmado = await Pc_armado.findAll()
    resp.send(listaPcarmado)
})

app.get("/producto", async (req, resp) => {
    const productoId = req.query.productoId

    if (productoId == undefined || productoId === "-1"){
        // Caso que no se seleccione ciclo
        const listadoProductos = await Producto.findAll()
        resp.send(listadoProductos)
    }else {
        // Caso que SI se seleccione ciclo
        const listadoProductos = await Producto.findAll({
            where : {
                id : productoId,
            }
        })
        resp.send(listadoProductos)
    }
})

app.get("/recomendacion", async (req, resp) => {
    const pcarmadoid = req.query.pcarmadoID
    const productoid = req.query.producto

    if (productoid == undefined || productoid === "-1"){
        // Caso que no se seleccione ciclo
        const listadoArpr = await Pc_armado_producto.findAll({
            where:{
                pc_armado_id : pcarmadoid
            }
        })
        resp.send(listadoArpr)
    }else {
        // Caso que SI se seleccione ciclo
        const listadoArpr = await Pc_armado_producto.findAll({
            where : {
                pc_armado_id : pcarmadoid,
                producto_id :productoid
            }
        })
        resp.send(listadoArpr)
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
app.get("/datosperfil", async (req, resp) => {
    const idUsuario = req.query.id;
    const perfilFiltrado = await Usuario.findAll({
        where : {
            id : idUsuario,
        },
    });
    resp.send(perfilFiltrado)
})
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
        correo : reporteEmail,
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
app.post("/perfil", async (req, resp) => {
    const dataRequest = req.body
    const usuarioId = dataRequest.usuario_id
    const perfilNombre = dataRequest.perfil_nombre
    const perfilApellido = dataRequest.perfil_apellido
    const perfilCorreo = dataRequest.perfil_correo
    const perfilDireccion = dataRequest.perfil_direccion
    const perfilDepartamento = dataRequest.perfil_Departamento
    const perfilCiudad = dataRequest.perfil_Ciudad
    const perfilZip = dataRequest.perfil_Zip
    const perfilTelefono = dataRequest.perfil_Telefono

    if (usuarioId == null || usuarioId == undefined) resp.send({
        error : "ERROR."
    })
    if (perfilNombre == null || perfilNombre == undefined) resp.send({
        error : "ERROR. "
    })
    if (perfilApellido == null || perfilApellido == undefined) resp.send({
        error : "ERROR. "
    })
    if (perfilCorreo == null || perfilCorreo == undefined) resp.send({
        error : "ERROR. "
    })
    if (perfilDireccion == null || perfilDireccion == undefined) resp.send({
        error : "ERROR."
    })
    if (perfilDepartamento == null || perfilDepartamento == undefined) resp.send({
        error : "ERROR."
    })
    if (perfilCiudad == null || perfilCiudad == undefined) resp.send({
        error : "ERROR."
    })
    if (perfilZip == null || perfilZip == undefined) resp.send({
        error : "ERROR."
    })
    if (perfilTelefono == null || perfilTelefono == undefined) resp.send({
        error : "ERROR."
    })
    try {await Usuario.update({
        nombre :  perfilNombre,
        apellido : perfilApellido,
        correo : perfilCorreo,
        direccion : perfilDireccion,
        departamento : perfilDepartamento,
        ciudad : perfilCiudad,
        codigo_postal : perfilZip,
        telefono : perfilTelefono,
    },
    {where: {id : usuarioId},})}
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