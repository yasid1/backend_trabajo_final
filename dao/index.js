const { Sequelize, DataTypes } = require("sequelize");

// postgres://<USUARIO>:<PASSWORD>@<URL_HOST_BD>:<PUERTO_BD>/<NOMBRE_BD>

const CADENA_CONEXION = "postgresql://postgres:postgres@localhost:5432/postgres"

const sequelize = new Sequelize(CADENA_CONEXION)

const Reporte = sequelize.define("reporte", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    usuario_id : {
        type : DataTypes.UUID,
        allowNull : true
    },
    correo : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    nombre : {
        type : DataTypes.STRING(30),
        allowNull : false
    },
    telefono : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    asunto : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    descripcion : {
        type : DataTypes.STRING(200),
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

const Usuario = sequelize.define("usuario", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    nombre : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    apellido : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    correo : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    contrasenya : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    direccion : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    departamento: {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    ciudad : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    codigo_postal : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    telefono : {
        type : DataTypes.STRING(200),
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

const Reseña = sequelize.define("reseña", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    usuario_id : {
        type : DataTypes.UUID,
        allowNull : false
    },
    puntaje : {
        type : DataTypes.STRING(150),
        allowNull : false
    },
    comentario : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
   video_influencer : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
   link_influencer: {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    tipo_resenya: {
        type : DataTypes.STRING(200),
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

const Orden = sequelize.define("orden", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    usuario_id : {
        type : DataTypes.UUID,
        allowNull : false
    },
    monto : {
        type : DataTypes.STRING(10),
        allowNull : false
    },
    direccion : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
   fecha : {
        type : DataTypes.DATE,
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})
const Orden_producto = sequelize.define("orden-producto", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    orden_id : {
        type : DataTypes.UUID,
        allowNull : false
    },
    producto_id : {
        type : DataTypes.UUID,
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

const Producto = sequelize.define("producto", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    nombre : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    precio : {
        type : DataTypes.STRING(10),
        allowNull : false
    },
   descripcion : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
   categoria: {
        type : DataTypes.STRING(200),
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

const Pc_armado_producto = sequelize.define("pc_armado_producto", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    pc_armado_id : {
        type : DataTypes.UUID,
        allowNull : false        
    },
    producto_id : {
        type : DataTypes.UUID,
        allowNull : false
    }    
}, {
    timestamps : false,
    freezeTableName : true
})

const Pc_armado = sequelize.define("pc_armado", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    nombre : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    descripcion : {
        type : DataTypes.STRING(200),
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

const Imagenes =sequelize.define("imagenes",{
      id:{
        primaryKey: true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
        },
       nombre: {
       type : DataTypes.STRING(200),
       allowNull : false
        },
       link:{
       type : DataTypes.STRING(200),
       allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})


// Relaciones
// Reporte * <----> 1 Usuario
Reporte.belongsTo(Usuario, {
    foreignKey : "usuario_id"
})
Usuario.hasMany(Reporte, {
    foreignKey : "id"
})

// Reseña * <----> 1 Usuario
Reseña.belongsTo(Usuario, {
    foreignKey : "usuario_id"
})
Usuario.hasMany(Reseña, {
    foreignKey : "id"
})

// Orden * <----> 1 Usuario
Orden.belongsTo(Usuario, {
    foreignKey : "usuario_id"
})
Usuario.hasMany(Orden, {
    foreignKey : "id"
})

// Orden_producto * <----> 1 Orden
Orden_producto.belongsTo(Orden, {
    foreignKey : "orden_id"
})
Orden.hasMany(Orden_producto, {
    foreignKey : "id"
})

// Orden_producto * <----> 1 Producto
Orden_producto.belongsTo(Producto, {
    foreignKey : "producto_id"
})
Producto.hasMany(Orden_producto, {
    foreignKey : "id"
})

// Pc_armado_producto * <----> 1 Producto
Pc_armado_producto.belongsTo(Producto, {
    foreignKey : "producto_id"
})
Producto.hasMany(Pc_armado_producto, {
    foreignKey : "id"
})

// Pc_armado_producto * <----> 1 Pc_armado
Pc_armado_producto.belongsTo(Pc_armado, {
    foreignKey : "pc_armado_id"
})
Pc_armado.hasMany(Pc_armado_producto, {
    foreignKey : "id"
})


module.exports = {
    Reporte, Usuario, Reseña, Orden, Orden_producto, Producto, Pc_armado_producto, Pc_armado,Imagenes
}