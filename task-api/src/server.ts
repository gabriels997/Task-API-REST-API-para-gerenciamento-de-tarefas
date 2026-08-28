import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
    
    res.json({
        status: "ok",
        message: "Task API is running"
    });
});

const tasks = [
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
    res.json(tasks);
});

app.post("/tasks", (req, res) => {
    const { title } = req.body;

    const newTask = {
        id: tasks.length + 1,
        title: title,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});