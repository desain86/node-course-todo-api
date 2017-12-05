var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.IP}:27017/TodoApp`,{
    useMongoClient : true
});

var Todo = mongoose.model('Todo', {
    text:{type:String}, completed:{type:Boolean},completedAt:{type:Number}
});

var newTodo = Todo({
    text: 'Wash Car',
    completed : true,
    completedAt : 500
});

newTodo.save().then((doc) => {
    console.log('Saved: ', doc);
},(e)=>{
    console.log('error: ', e);
});