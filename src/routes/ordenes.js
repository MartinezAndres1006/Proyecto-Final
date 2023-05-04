import { Router } from "express";
import { orderDao } from "../Services/daos/daosPadre.js";
const ordersRouter= Router()
import transporter from '../config/nodemailer.js'

import dotenv from 'dotenv'
dotenv.config({path:'./.env'})












ordersRouter.get('/allorders',async(req,res)=>{
    const ordenes= await orderDao.getAll()
try{
res.status(200).json(ordenes)

}
catch(err){
    res.status(500).json({message:err.message})
}

})




ordersRouter.post('/', async (req,res)=>{
    const newOrder = await orderDao.create(req.body);
    const articulos = newOrder.products.map(producto => producto.articulo);
    console.log(articulos);
    
    const total = newOrder.products.reduce((accumulator, producto) => {
        return accumulator + producto.precio;
      }, 0);
    
      


    
    try {
        const mailOptions = {
            from: process.env.email,
            to: req.body.email,
            subject: 'Comprobante de compra',
            html: `Su orden fue creada con exito \n <h1>Productos</h1>\n
            <p><b>${articulos}</b></p>\n
            <p><b>El subtotal es: $${total}</b></p>
            <p>Su direccion de envio es ${newOrder.direccion}</p>
            
            
            
            
            `}

            const info = await transporter.sendMail(mailOptions)
  console.log(info)

        res.status(201).json({
            message: 'orden creada con éxito',
            orden:newOrder});
        }catch (err) {
        res.status(500).json({message: err.message});
    }


    





})

ordersRouter.delete("/:id",async(req,res)=>{    

    try{
        const ordenborrada = await orderDao.delete(req.params.id);
        res.json({
            message: 'Producto borrado correctamente',
            id: ordenborrada.id
            });
    }
    catch (err){
        res.status(500).json({message: err.message});
    }








})


export default ordersRouter