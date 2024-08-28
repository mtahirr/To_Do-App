const todoModel = require('../models/todoModel');
class TodoServices{
    static async createToDo(userId,title,description){
       try{
        const createTodo = new todoModel({userId,title,description});
      const saveTodo =  await createTodo.save();
      console.log(saveTodo);
        return saveTodo;
       }catch(e){
        throw e;
       }

    }
    static async getToDoList(){
        try{
         const todoList = await todoModel.find();
      
       
         return todoList;
        }catch(e){
         throw e;
        }
 
     }
     static async updateResponse(userId, updateResponse){
      try{
       const updatedResponse = await todoModel.findByIdAndUpdate(userId,updateResponse, {
       new:true,
       runValidators:true
       });
    
     
       return updatedResponse;
      }catch(e){
       throw e;
      }

   }
}
module.exports = TodoServices;