import  MongoCarts  from './carritosDaos.js';
import  MongoProducts  from './productsDaos.js';
import MongoOrders from './order.js';


let orderDao= new MongoOrders()
let productosDao = new MongoProducts();            
 let carritosDao = new MongoCarts();
export {productosDao, carritosDao,orderDao};