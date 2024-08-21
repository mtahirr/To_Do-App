const todoModel = require('../models/todoModel');
class TodoServices{
    static async createToDo(userId,title,description){
       try{
        const createTodo = new todoModel({userId,title,description});
        return await createTodo.save();
       }catch(e){
        throw e;
       }

    }
   

}
module.exports = TodoServices;