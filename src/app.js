import express from "express"

const app = express()

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

export default app