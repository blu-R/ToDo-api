const {
    getAllToDos,
    getToDoById,
    createToDo,
    updateToDo,
    deleteToDo,
} = require("./todos.controllers");

//? Servicio donde servimos la petición que requiere todas las tareas
//? Aquí únicamente les pasamos el req y el res
const getAll = (req, res) => {
    const data = getAllToDos();
    res.status(200).json({
        items: data.length,
        response: data,
    });
};

const getById = (req, res) => {
    const id = Number(req.params.id);

    if (id) {
        const data = getToDoById(id);

        if (data) {
            res.status(200).json(data);
        } else {
            res.status(400).json({ message: "ToDo not found. Invalid Id." });
        }
    } else {
        res.status(400).json({ message: "Id is not a valid number." });
    }
};

const create = (req, res) => {
    const todoObj = req.body;
    if (todoObj.title && todoObj.description) {
        const data = createToDo(todoObj);
        res.status(201).json(data);
    } else {
        res.status(400).json({ message: "Missing data" });
    }
};

const update = (req, res) => {
    const id = Number(req.params.id);
    // console.log(id);
    const todoObj = req.body;
    if (id) {
        if (todoObj.title && todoObj.description && todoObj.completed) {
            const data = updateToDo(todoObj, id);
            // console.log(data);
            if (data?.id) {
                res.status(200).json(data);
            } else {
                res.status(400).json({
                    message: "ToDo not found. Invalid ID.",
                });
            }
        } else {
            res.status(400).json({ message: "Missing data." });
        }
    } else {
        res.status(400).json({ message: "ID is not a valid number." });
    }
};

const remove = (req, res) => {
    const id = Number(req.params.id);

    if (id) {
        const data = deleteToDo(id);
        if (data) {
            res.status(204).json();
        } else {
            res.status(400).json({
                message: "ToDo not found. Invalid ID.",
            });
        }
    } else {
        res.status(400).json({ message: "Id is not a valid number." });
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};
