import Mongodb from '../MongoClass.js'
import cartSchema from '../../DB/models/carts.js'

export default class MongoCarts extends Mongodb {
    constructor() {
        super("Carritos", cartSchema);
    }
   
    async addProductos(carrito, productos) {
        productos.find(producto => {
            // chequear si el producto ya esta en el carrito
           const productoEnCarrito = carrito.productos.find(p => p._id == producto._id);
              if (productoEnCarrito) {
                    productoEnCarrito.cantidad ++;
            }else { 
              carrito.productos.push(producto);
            }
        });
        const carritoUpdated = await this.collection.findByIdAndUpdate(carrito._id, {productos: carrito.productos});
        return carritoUpdated;
    }



}