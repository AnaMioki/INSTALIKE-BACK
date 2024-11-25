import {getTodosPosts, criarPost} from "../models/postsModel.js";

export async function listarTodosPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
};

export async function postarNovoPost(req, res){
    const novoPost = req.body; 
    try{
        const postCriado = await criarPost(novoPost)
        res.status(200).json(postCriado);
    }catch(erro){
        console.error(erro.mensage);
        res.status(500).json({"erro":"Falha na requisição"})
    }
}

export async function uploadImagem(req, res){
    
}