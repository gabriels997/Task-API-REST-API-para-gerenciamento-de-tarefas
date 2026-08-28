import express from "express";

const app = express();

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Task API is running"
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});