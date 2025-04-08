import { Router } from "express";
import controllerTurma from "./controllers/turmaController.js";
const router = Router();
router.get("/", (req, res) =>{
    res.status(200).send("Pagina HOME")
})

router.get("/turmas", controllerTurma.Listar )
export default router;