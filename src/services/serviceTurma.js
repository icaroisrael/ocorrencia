import repoTurma from "../repositories/repositoryTurma.js";
async function Listar(){
    const turmas = await repoTurma.Listar();  
    return turmas;    
}

export default {Listar}