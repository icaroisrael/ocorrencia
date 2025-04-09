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



export default {Listar, Inserir}