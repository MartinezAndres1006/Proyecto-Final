import { Router } from "express";

import { carritosDao } from "../Services/daos/daosPadre.js";

const carritosRouter =Router()



carritosRouter.get('/', async (req, res) => {
    try {
        const carritos = await carritosDao.getAll();
        
        
        const {nombre,image}= req.user
        if (carritos) {
            res.status(200).render('carritoVista', { carritos,nombre,image });
        } else {
            res.status(404).json({ message: 'No hay carritos disponibles' });
        }



    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

carritosRouter.get('/:id', async (req, res) => {
    try {
        const carrito = await carritosDao.getById(req.params.id);
        carrito? res.status(200).json(carrito) : res.status(404).json({message: 'Carrito no encontrado. id: ' + req.params.id});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


carritosRouter.get('/:id/productos', async (req, res) => {
    try {
        const carrito = await carritosDao.getById(req.params.id);
        carrito? res.status(200).json(carrito.products) : res.status(404).json({message: 'Carrito no encontrado. id: ' + req.params.id});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});




carritosRouter.post('/', async (req, res) => {
    try {
        const newCart = await carritosDao.create(req.body);
        res.status(201).json({
            message: 'Carrito creado con éxito',
            carrito: newCart});
        }catch (err) {
        res.status(500).json({message: err.message});
    }
});

carritosRouter.post('/:id/productos', async (req, res) => {
    try {
        const carrito = await carritosDao.getById(req.params.id); 
        const productos = req.body; // array de objetos 
        if (carrito && productos) {
            const carritoUpdated = await carritosDao.addProductos(carrito, productos);
            const newCarrito = await carritosDao.getById(carritoUpdated._id);
            res.status(201).json({
                message: 'Productos agregados con éxito',
                carrito: newCarrito});
        }
        if(!carrito) {
            res.status(404).json({message: 'Carrito no encontrado. id: ' + req.params.id});
        }
        if(!productos) {
            res.status(404).json({message: 'La lista de productos está vacía'});
        }
    } catch (err) {
        res.status(500).json({message: err.message, line: err.line});
    }
});


carritosRouter.delete('/:id', async (req, res) => {
    try{
        const CarritoBorrado = await carritosDao.delete(req.params.id);
        res.json({
            message: ' borrado correctamente',
            id: CarritoBorrado.id
            });
    }
    catch (err){
        res.status(500).json({message: err.message});
    }
})




export default carritosRouter