import { Router } from 'express';
const router = Router();
import carritosRouter from './carritos.js';
import productRouter from './productos.js';
import sendEmail from '../config/nodemailer.js';
import home from './home.js';
import perfil from './perfil.js';
import login from './login.js';
import logout from './logout.js';
import registro from './registro.js';
import ordersRouter from './ordenes.js';


router.use("/productos",productRouter)
router.use("/carrito",carritosRouter)
router.use("/home",home)
router.use("/perfil",perfil)
router.use("/login",login)
router.use("/logout",logout)
router.use("/registro",registro)
router.use("/ordenes",ordersRouter)

router.get('/', (req, res) => {
    res.redirect('login');
});

router.get('/errorRegistro', (req, res) => {
    
    res.render('errorRegistro');
});

router.get('/errorLogin', (req, res) => {
    res.render('errorLogin');
});

  router.use(function(req, res, next) {
    res.status(404).render('../views/rutaUndefined');
  });
  


export default router;