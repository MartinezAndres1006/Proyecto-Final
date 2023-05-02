import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  products: [
    {
        nombre:String,
        precio:Number,
        imagen:String,
        cantidad:{
          type:Number,
          default:1
        }
      },
    
  ],
});

export default cartSchema

