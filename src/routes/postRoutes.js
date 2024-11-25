import express from "express";
import multer from "multer";
import { listarTodosPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    app.use(express.json()) //usa a funcionalidade de converter para JSON
    // rota para buscar os posts
    app.get("/posts", listarTodosPosts);
    app.post("/posts", postarNovoPost); 
    app.post("/posts/upload", upload.single("imagem"), uploadImagem)
}

export default routes;