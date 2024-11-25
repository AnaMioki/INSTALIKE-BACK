import express from "express";
import routes from "./src/routes/postRoutes.js";
// aqui ele está importando um arquivo que tem um script padrão de mensagens para sabermos o funcionamento do servidor

const app = express();
routes(app)

/*inicia o servidor com o numero 3000 que é uma porta, é a "chave" para a requisição do servidor. 
é uma porta padrão. e então envia uma mensagem no console para mostrar que está rodando*/
app.listen(3000, () => {
    console.log("Servidor escutando...");
});
