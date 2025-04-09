import con from "../database/connection.js";
async function Listar(){
    let sql = "SELECT * FROM ALUNO";
    const [alunos] = await (con.connection).execute(sql);
    return alunos;
}

async function Inserir(nome, sobrenome){
    let sql = "INSERT INTO ALUNO(NOME, SOBRENOME) VALUES (?,?)";
    const [alunos] = await (con.connection).query(sql, [nome, sobrenome]);
    return alunos;
}
async function Editar(id, nome, sobrenome){
    let sql = "UPDATE ALUNO SET NOME=?, SOBRENOME=? WHERE MATRICULA=?";
    const [alunos] = await (con.connection).query(sql, [nome, sobrenome, id]);
    return {id};
}

async function Excluir(id){
    let sql = "DELETE FROM  ALUNO WHERE MATRICULA=?";
    const [alunos] = await (con.connection).query(sql, [id]);
    return {mensagem:"aluno excluído"};
}


export default {Listar, Inserir, Editar, Excluir}