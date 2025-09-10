import express from "express"

const app = express()
app.use(express.json())

const livros = [
    {
        id: 1,
        titulo: "O senhor dos anéis"
    },

    {
        id: 2,
        titulo: "O Hobbit"
    }
]

app.get("/", (req, resp) => {
    resp.status(200).send("Estou usando Express no Node.js")
})

app.get("/livros", (req, resp) => {
    resp.status(200).json(livros)
})

app.post("/livros", (req, resp) => {
    livros.push(req.body)
    resp.status(201).send("livro cadastrado com sucesso")
})

export default app