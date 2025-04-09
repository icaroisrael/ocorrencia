import serviceAluno from "../services/serviceAluno.js";
async function Listar(req, res){
    const alunos = await serviceAluno.Listar();
    res.status(200).json({alunos});        
}

async function Inserir(req, res) {
    const {nome, sobrenome} = req.body;     
    const aluno = await serviceAluno.Inserir(nome, sobrenome) 
    res.status(201).json({"mensagem":"sucesso"}) 
}

export default {Listar, Inserir}