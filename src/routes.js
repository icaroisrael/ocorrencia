import { Router } from "express";
import controllerAluno from "./controllers/alunoController.js";
const router = Router();
router.get("/", (req, res) =>{
    res.status(200).send("Pagina HOME")
})

router.post("/alunos", controllerAluno.Inserir)

router.get("/alunos", controllerAluno.Listar )
export default router;