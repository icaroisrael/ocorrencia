import { Router } from "express";
import controllerAluno from "./controllers/alunoController.js";
import usuarioController from "./controllers/usuarioController.js";
const router = Router();
router.get("/", (req, res) =>{
    res.status(200).send("Pagina HOME")
})

router.post("/alunos", controllerAluno.Inserir)
router.get("/alunos", controllerAluno.Listar)
router.put("/alunos/:id", controllerAluno.Editar)
router.delete("/alunos/:id", controllerAluno.Excluir)
router.post("/usuario", usuarioController.Inserir)
router.post("/login", usuarioController.Login)
export default router;