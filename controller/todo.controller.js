const TodoServices = require('../services/todo.services');
exports.createTodo = async (req,res,next)=>{
  try{
    const {userId,title,description} = await req.body;

    let todo = await TodoServices.createToDo(userId,title,description);
    res.json = ({
        status:true,success:todo});
    
  }catch(error){
next(error);
  }
}
