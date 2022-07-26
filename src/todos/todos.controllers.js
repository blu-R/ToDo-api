const todosDB = [
    {
        id: 1,
        title: "Cat food",
        description: "Buy cat food at supermarket",
        completed: false,
    },
];

// const todosDB = [];

//? El controlador para retornar todos los ToDos
const getAllToDos = () => {
    return todosDB;
};

const getToDoById = id => {
    const toDo = todosDB.filter(item => item.id === id);
    return toDo[0];
};

const createToDo = todoObj => {
    if (todosDB.length) {
        const newToDo = {
            id: todosDB[todosDB.length - 1].id + 1,
            title: todoObj.title,
            description: todoObj.description,
            completed: false,
        };
        todosDB.push(newToDo);
        return newToDo;
    } else {
        const newToDo = {
            id: 1,
            title: todoObj.title,
            description: todoObj.description,
            completed: false,
        };
        todosDB.push(newToDo);
        return newToDo;
    }
};

const updateToDo = (todoObj, id) => {
    const index = todosDB.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todosDB[index] = {
            id,
            title: todoObj.title,
            description: todoObj.description,
            completed: todoObj.completed,
        };
        return todosDB[index];
    } else {
        return null;
    }
};

const deleteToDo = id => {
    const index = todosDB.findIndex(todo => todo.id === id);

    if (index !== -1) {
        return todosDB.splice(index, 1);
    } else {
        return null;
    }
};

module.exports = {
    getAllToDos,
    getToDoById,
    createToDo,
    updateToDo,
    deleteToDo,
};
