import con from "../database/connection.js";
async function Listar(){
    let sql = "SELECT * FROM ALUNO";
    const [turmas] = await (con.connection).execute(sql);
    return turmas;
}
export default {Listar}