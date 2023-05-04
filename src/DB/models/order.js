import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    email: String,
    numeroOrden: {
        type: mongoose.Schema.Types.ObjectId
    },
    products: [
        {
            articulo:String,
            precio:Number,
            imagen:String,
            cantidad:{
              type:Number,
              default:1
            },
            estado:{
              type:String,
              default:"generada"
            }
          }
    ],
    direccion:String







})

export default orderSchema