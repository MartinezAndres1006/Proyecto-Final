import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    email: String,
    numeroOrden: {
        type: mongoose.Schema.Types.ObjectId
    },
    products: [
        {
            nombre:String,
            precio:Number,
            imagen:String,
            cantidad:{
              type:Number,
              default:1
            }
          }
    ],
    direccion:String







})

export default orderSchema