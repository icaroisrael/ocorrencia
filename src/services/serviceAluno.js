import repoAluno from "../repositories/repositoryAluno.js";
async function Listar(){
    const alunos = await repoAluno.Listar();  
    return alunos;    
}

async function Inserir(nome, sobrenome){
    const aluno = await repoAluno.Inserir(nome, sobrenome);
    return aluno;
}

export default {Listar, Inserir}