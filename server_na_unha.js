import http from "http"

const PORT = 3000

const rotas = {
    "/": "Rota principal",
    "/livros": "Rota dos livros",
    "/autores": "Rota dos autores"
}

const server = http.createServer((req, resp) => {
    resp.writeHead("200", { "Content-Type" : "text/plain" })
    resp.end(rotas[req.url])
})

server.listen(3000, () => {
    console.log("Eu estou aqui funcionando...")
})