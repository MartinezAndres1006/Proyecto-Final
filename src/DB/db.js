import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config({path:'./.env'})
export const AtlasMongo= process.env.mongoUrl

mongoose.set('strictQuery', false)

mongoose.connect(AtlasMongo, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("🔥 Conectado a la base de datos de mongo");
    }
  });