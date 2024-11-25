import conectarAoBanco from "../config/dbconfig.js";

// conecta o banco de dados utilizando a string de conexão de ambiente 
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)
// foi criado pasta escondida no gitignore que armazena a variavel ambiente com a chave do banco de dados 

/*função assíncrona que busca(metodo get) todos os posts do banco de dados (que já foi conectado) */
export async function getTodosPosts(){
    //armaneza o o banco de dados (imersao-instabytes) na constante "db"
    const db = conexao.db("imersao-instabytes")
    // seleciona a coleção (que é uma função) "posts" do banco de dados
    const colecao = db.collection("posts")
    // retorna um array com todos os documentos da coleção 
    return colecao.find().toArray()
}

export async function criarPost(novoPost){
    const db = conexao.db("imersao-instabytes")
    const colecao = db.collection("posts")
    return colecao.insertOne(novoPost)

}
