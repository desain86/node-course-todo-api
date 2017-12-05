const {MongoClient, ObjectID} = require("mongodb");

var obj = new ObjectID();
console.log(obj);

MongoClient.connect(`mongodb://${process.env.IP}:27017/TodoApp`, (err, db) => {
    if(err){
        return console.log(err);
    }
    console.log('connected to MongoDB server!');
    
    for (var i = 0; i < 2; i++) {
        db.collection('Todos').insertOne({
        text:'Eat lunch',
        completed:false
    },(err, result) => {
        if(err){
            return console.log("Unable to insert in collection");
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    }
    
    db.close();
});