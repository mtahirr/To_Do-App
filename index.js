const app = require('./app');
const db = require('./config/db');
const UserModel = require('./models/userModel');
const port = 3000;
const logRequest = (req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] Reuest Made to:  ${req.originalUrl}`);
    next();
}
app.use(logRequest);
app.get('/',function(req,res){
    res.send('hello world!!!!....')

})
// app.get('/',(req,res)=>{
//     res.send('hello world!!!!....')
// });

app.listen(port,()=>{
console.log(`server listen http://localhost:${port}`); 
});
// run nodejs project 'npm run dev'