const UserService = require('../services/user.services');
exports.register = async(req,res,next)=>{
    try{
      const {email,password} = req.body;
      const successRes = await UserService.registerUser(email,password);
      res.json({status:true,success:('User has been register Successfully')});
    }catch(e){
        throw e;
    }
}
exports.login = async(req,res,next)=>{
  try{
    const {email,password} = req.body;
    const user = await UserService.checkuser(email);
   if(!user){
    throw new Error ('User dont exit')
   }
   const isMatch = await user.comparePassword(password);
   if(isMatch === false){
    throw new Error ('Password is incorrect');
   }
   let tokenData = {_id: user._id,email:user.email};
   const token = await UserService.generateToken(tokenData,'secretkey','1hr');
   res.status(200).json({status:true,token:token});
  }catch(e){
      throw e;
  }
}