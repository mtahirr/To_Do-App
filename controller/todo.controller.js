const TodoServices = require('../services/todo.services');  
exports.createTodo = async (req,res,next)=>{
  try{
    const {userId,title,description} =  req.body;

    let todo = await TodoServices.createToDo(userId,title,description);
    console.log('rrerrttyy');
    res.status(200).json  ({
       todo});
    
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
 next(err);
  }
}
exports.getTodoList = async (req,res,next)=>{
  try{
    const toDoList =  await TodoServices.getToDoList();

  
    console.log('getTodoList');
    res.status(200).json  ({
      toDoList});
    
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
 next(err);
  }
}