import express from "express"

const app = express()

app.get("/", (req, resp) => {
    resp.status(200).send("Estou usando Express no Node.js")
})

export default app