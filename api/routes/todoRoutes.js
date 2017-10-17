'use strict';

module.exports = (app) => {
    let todo = require('../controllers/todoController');

    app.route('/tasks')
        .get(todo.allTasks)
        .post(todo.createTask);
        
    app.route('/tasks/:taskId')
        .get(todo.getTask)
        .put(todo.updateTask)
        .delete(todo.deleteTask);
};
