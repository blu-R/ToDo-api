const router = require("express").Router();
const httpToDos = require("./todos.http");

router.route("/todos").get(httpToDos.getAll).post(httpToDos.create);

router
    .route("/todos/:id")
    .get(httpToDos.getById)
    .put(httpToDos.update)
    .delete(httpToDos.remove);

module.exports = {
    router,
};
