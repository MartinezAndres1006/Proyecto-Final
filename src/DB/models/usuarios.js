import mongoose from "mongoose";
import bcrypt from 'bcrypt'
 const UserSchema = new mongoose.Schema({
    nombre:String,
    telefono:String,
    direccion:String,
    edad:String,
    correo:String,
    password:String,
    imagen:String
    
});

UserSchema.methods.encriptarContrasenia = async (contrasenia) => {
    return bcrypt.hashSync(contrasenia,bcrypt.genSaltSync(8));
}








export default mongoose.model("usuarios",UserSchema)