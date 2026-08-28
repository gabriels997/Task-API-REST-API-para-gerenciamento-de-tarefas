import express from "express";

const app = express();

app.get("/health", (req, res) => {
    
    res.json({
        status: "ok",
        message: "Task API is running"
    });
});

const task = [
    {
        id: 1,
        title: "Estudar Node.js",
        completed: false
    },
    {
        id: 2,
        title: "Estudar Azure",
        completed: false
    }
];

app.get("/tasks", (req, res) => {
    res.json(task);
});


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});