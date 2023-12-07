import Express  from "express";
import mongoose  from "mongoose";
import Tasks from "./models/taskModel.js";
const app = Express();
app.use(Express.json())

const port= 5555;

app.get('/',async(req, res)=>{
    const tasks = await Tasks.find();
    res.json(tasks);
})
//comment code
app.post('/',async(req,res)=>{
    const{ title, date,isfinished} = req.body

    const task= new Tasks({
        title, date,isfinished
    })

    const newTask = await task.save()
    res.json(newTask)
    
})

// comment code
app.put('/:id',async(req, res)=>{
    const{ title, date,isfinished} = req.body;

    const task = await Tasks.findById(req.params.id);
    if(task){
        task.title= title;
        task.data= date;
        task.isfinished= isfinished;
        const updattedtask = await task.save();
        res.json(updattedtask);
    }
     
})

app.delete('/:id', async(req,res)=>{
    const task= await Tasks.findByIdAndDelete(req.params.id);
    res.json({message:"deleted"})
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

mongoose.connect('mongodb+srv://zubeyr:Zubeyrali@ecommerce.av0dd4v.mongodb.net/task?retryWrites=true&w=majority')
.then(()=>{
    console.log('Connected to DataBase')
}).catch( (e)=>{
    console.log(e)
})

