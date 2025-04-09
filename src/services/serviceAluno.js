import repoAluno from "../repositories/repositoryAluno.js";
async function Listar(){
    const alunos = await repoAluno.Listar();  
    return alunos;    
}

async function Inserir(nome, sobrenome){
    const aluno = await repoAluno.Inserir(nome, sobrenome);
    return aluno;
}

async function Editar(id, nome, sobrenome){
    const aluno = await repoAluno.Editar(id, nome, sobrenome);
    return aluno;
}
async function Excluir(id){
    const aluno = await repoAluno.Excluir(id);
    return aluno;
}

export default {Listar, Inserir, Editar, Excluir}