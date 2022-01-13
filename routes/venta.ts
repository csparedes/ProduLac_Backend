import { Router } from "express";
import { deleteVenta, getVenta, getVentas, postVenta, putVenta } from "../controllers/venta";
import validarJWT from "../helpers/validarJWT";
import validarCampos from "../middlewares/validar_campos";

const router = Router();
router.get('/', [validarJWT, validarCampos], getVentas);
router.get('/:ven_id', [validarJWT, validarCampos], getVenta);
router.post('/', [validarJWT, validarCampos], postVenta);
router.put('/:ven_id', [validarJWT, validarCampos], putVenta);
router.delete('/:ven_id', [validarJWT, validarCampos], deleteVenta);
export default router;