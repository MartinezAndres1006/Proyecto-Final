import Mongodb from '../MongoClass.js'
import cartSchema from '../../DB/models/carts.js'

export default class MongoCarts extends Mongodb {
    constructor() {
        super("Carritos", cartSchema);
    }
   
    async addProductos(carrito, productos) {
        Object.entries(productos).forEach(producto => {
            // chequear si el producto ya esta en el carrito
           const productoEnCarrito = carrito.products.find(p => p._id == producto._id);
              if (productoEnCarrito) {
                    productoEnCarrito.cantidad ++;
            }else { 
              carrito.products.push(producto);
            }
        });
        const carritoUpdated = await this.collection.findByIdAndUpdate(carrito._id, {productos: carrito.productos});
        return carritoUpdated;
    }



}