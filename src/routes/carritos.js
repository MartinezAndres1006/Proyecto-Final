import { Router } from "express";

import { carritosDao } from "../Services/daos/daosPadre.js";

const carritosRouter =Router()



carritosRouter.get('/', async (req, res) => {
    try {
        const carritos = await carritosDao.getAll();
        
        
        const {nombre,imagen}= req.user
        if (carritos) {
            res.status(200).render('carritoVista', { carritos,nombre,imagen });
        } else {
            res.status(404).json({ message: 'No hay carritos disponibles' });
        }



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





export default carritosRouter