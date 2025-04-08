import serviceTurma from "../services/serviceTurma.js";
async function Listar(req, res){
    const turmas = await serviceTurma.Listar();
    res.status(200).json({turmas});        
}
export default {Listar}