import { Router } from 'express'
import { productosDao } from '../Services/daos/daosPadre.js';

const productRouter = Router()

productRouter.get('/', async (req, res) => {
    try{
        const productos = await productosDao.getAll();
        if (productos) {
            // res.render('products', { productos });
            res.json(productos)
        } else {
            res.status(404).json({ message: 'No hay productos disponibles' });
        }
    }catch (err){
        res.status(500).json({message: err.message});
    }
});



productRouter.get('/:id', async (req, res) => {
    try{
        const producto = await productosDao.getById(req.params.id);
        producto? res.status(200).json(producto) : res.status(404).json({message: 'Producto no encontrado'});
    }
    catch (err){
        res.status(500).json({message: err.message});
    }
});




productRouter.post('/', async (req, res) => {
    try{
        const nuevoProducto = await productosDao.create(req.body);
        res.status(200).json({
            message: 'Producto creado',
            producto:nuevoProducto});
    }catch (err){
        res.status(500).json({message: err.message});
    }
});


    productRouter.put('/:id', async (req, res) => {
        try{
            const productoActualizado = await productosDao.update(req.params.id, req.body);
            res.json({
                message: 'Producto actualizado',
                id: productoActualizado.id
                });
        }catch (err){
            res.status(500).json({message: err.message});
        }
    });





productRouter.delete('/:id', async (req, res) => {
    try{
        const productoBorrado = await productosDao.delete(req.params.id);
        res.json({
            message: 'Producto borrado correctamente',
            id: productoBorrado.id
            });
    }
    catch (err){
        res.status(500).json({message: err.message});
    }
});




export default  productRouter