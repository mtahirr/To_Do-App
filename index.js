const app = require('./app');
const db = require('./config/db');
const UserModel = require('./models/userModel');
const port = 3000;
app.get('/',(req,res)=>{
    res.send('hello world!!!!....')
});
app.listen(port,()=>{
console.log(`server listen http://localhost:${port}`); 
});