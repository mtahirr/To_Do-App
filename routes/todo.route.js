const router = require('express').Router();
const TodoController = require('../controller/todo.controller');


router.post('/createTodo',TodoController.createTodo);
router.get('/getTodoList',TodoController.getTodoList);
module.exports = router;