const {MongoClient, ObjectID} = require("mongodb");

var obj = new ObjectID();
console.log(obj);

MongoClient.connect(`mongodb://${process.env.IP}:27017/TodoApp`, (err, db) => {
    if(err){
        return console.log(err);
    }
    console.log('connected to MongoDB server!');
    
    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false
    // },(err, result) => {
    //     if(err){
    //         return console.log("Unable to insert in collection");
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    
    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log(err);
    });
    
    db.close();
});