'use strict';
var express = require("express");
var router = express.Router();
const Producto = require('./models/Producto');
const Usuario = require('./models/Usuario');
const Venta = require('./models/Venta');
const Settings = require('./models/Settings');

// -------------- PRODUCTOS ----------------------
// GET /api/productos
router.get("/productos", function(req, res, next){
	Producto.find(function (err, docs) {
        if (err) {
            return next(err);
        }
        return res.json(docs);
    });
});

// POST /api/productos
router.post("/productos", function(req, res, next){
    const { descripcion, precio, clasificacion, existencia = 9999 } = req.body;
    if (descripcion && precio && clasificacion) {
        const productoData = { descripcion, precio, clasificacion, existencia }
        Producto.create(productoData, (err, producto) => {
            if (err) {
                return next(err);
            }
            console.log(`${producto._id} added.`);
            Producto.find(function (err, docs) {
                if (err) {
                    return next(err);
                }
                return res.json(docs);
            });
        });
    }
});

// DELETE /api/productos/:id
router.delete("/productos", function(req, res, next){
    const { _id } = req.body;
    if (_id) {
        Producto.deleteOne({ _id }, (err) => { 
            if (err) {
                return next(err);
            }
            console.log(`${_id} deleted.`);
            return res.end(`${_id} deleted.`);
        })
    }
});

// PUT /api/productos/:id
router.put("/productos", function(req, res, next){
    const { type } = req.body;
    const { _id } = req.body.item;
    switch (type) {
        case 'Delete':
        Producto.findByIdAndUpdate({ _id }, { existencia: 0 }, (err) => {
            if (err) {
                return next(err);
            }
            Producto.find(function (err, docs) {
                if (err) {
                    return next(err);
                }
                return res.json(docs);
            });
        });
        break;
        case 'Update':
        const { descripcion, precio, clasificacion } = req.body.item;
        if (descripcion && precio && clasificacion) {
            const productoData = { descripcion, precio, clasificacion };
            Producto.findByIdAndUpdate({ _id }, productoData, (err) => {
                if (err) {
                    return next(err);
                }
                Producto.find(function (err, docs) {
                    if (err) {
                        return next(err);
                    }
                    return res.json(docs);
                });
            })
        }
        break;
    }
});

// -------------- USUARIOS ----------------------
// GET /api/usuarios
router.get("/usuarios", function(req, res, next){
	Usuario.find(function (err, docs) {
        if (err) {
            return next(err);
        }
        return res.json(docs);
    });
});

// POST /api/usuarios
router.post("/usuarios", function(req, res, next){
    const { username, password, rol, isActive } = req.body;
    if (username && password && rol) {
        const usuarioData = { username, password, rol, isActive }
        Usuario.create(usuarioData, (err, usuario) => {
            if (err) {
                return next(err);
            }
            console.log(`${usuario._id} added.`);
            return res.end(`${usuario._id} added.`);
        })
    }
});

// DELETE /api/usuarios/
router.delete("/usuarios", function(req, res, next){
    const { _id } = req.body;
    if (_id) {
        Usuario.deleteOne({ _id }, (err) => { 
            if (err) {
                return next(err);
            }
            console.log(`${_id} deleted.`);
            return res.end(`${_id} deleted.`);
        })
    }
});

// PUT /api/usuarios/
router.put("/usuarios", function(req, res, next){
    const { _id, username, password, rol, isActive } = req.body;
    if (_id && username && password && rol) {
        const usuarioData = { username, password, rol, isActive };
        Usuario.findByIdAndUpdate({ _id }, usuarioData, (err) => {
            if (err) {
                return next(err);
            }
            console.log(`${_id} updated.`);
            return res.end(`${_id} updated.`);
        })
    }
});

// -------------- SETTINGS ----------------------
// GET /api/settings
router.get("/settings", function(req, res, next){
	Settings.find(function (err, docs) {
        if (err) {
            return next(err);
        }
        return res.json(docs);
    });
});

// POST /api/settings
router.post("/settings", function(req, res, next){
    const { nombre, mesas } = req.body;
    if (nombre && mesas) {
        const settingsData = { nombre, mesas }
        Settings.create(settingsData, (err, settings) => {
            if (err) {
                return next(err);
            }
            console.log(`${settings._id} added.`);
            return res.end(`${settings._id} added.`);
        })
    }
});

// DELETE /api/settings/
router.delete("/settings", function(req, res, next){
    const { _id } = req.body;
    if (_id) {
        Settings.deleteOne({ _id }, (err) => { 
            if (err) {
                return next(err);
            }
            console.log(`${_id} deleted.`);
            return res.end(`${_id} deleted.`);
        })
    }
});

// PUT /api/settings/
router.put("/settings", function(req, res, next){
    const { _id, nombre, mesas } = req.body;
    if (_id && nombre && mesas) {
        const settingsData = { nombre, mesas };
        Settings.findByIdAndUpdate({ _id }, settingsData, (err) => {
            if (err) {
                return next(err);
            }
            console.log(`${_id} updated.`);
            return res.end(`${_id} updated.`);
        })
    }
});

// -------------- VENTAS ----------------------
// GET /api/ventas
router.get("/ventas", function(req, res, next){
	Venta.find(function (err, docs) {
        if (err) {
            return next(err);
        }
        return res.json(docs);
    });
});

// POST /api/ventas
router.post("/ventas", function(req, res, next){
    const { fecha, importe } = req.body;
    if (fecha && importe) {
        const ventaData = { fecha, importe }
        Venta.create(ventaData, (err, venta) => {
            if (err) {
                return next(err);
            }
            console.log(`${venta._id} added.`);
            return res.end(`${venta._id} added.`);
        })
    }
});

// DELETE /api/ventas/
router.delete("/ventas", function(req, res, next){
    const { _id } = req.body;
    if (_id) {
        Venta.deleteOne({ _id }, (err) => { 
            if (err) {
                return next(err);
            }
            console.log(`${_id} deleted.`);
            return res.end(`${_id} deleted.`);
        })
    }
});

// PUT /api/ventas/
router.put("/ventas", function(req, res, next){
    const { _id, fecha, importe } = req.body;
    if (_id && fecha && importe) {
        const ventaData = { fecha, importe };
        Venta.findByIdAndUpdate({ _id }, ventaData, (err) => {
            if (err) {
                return next(err);
            }
            console.log(`${_id} updated.`);
            return res.end(`${_id} updated.`);
        })
    }
});
module.exports = router;