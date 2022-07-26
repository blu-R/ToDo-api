# Orden

1. Definir las rutas
2. Definir los verbos de cada ruta

/todos

-   GET (obtener todos los todos)
-   POST (crear un nuevo todo)

/todos/:id

-   GET (obtener un todo en específico)
-   PUT (editar todo)
-   DELETE (eliminar todo)

3. Crear los controladores

```javascript
const getAllToDos = () => {
    return todosDB;
};
```

4. Crear los servicios
5. Crear las rutas
