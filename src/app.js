const express = require("express");
const todosRouter = require("./todos/todos.router").router;
require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.use(express.json());

//? Aquí se encuentran las rutas de mis usuarios
app.use("/api/v1", todosRouter);

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
