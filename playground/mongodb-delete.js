const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect(`mongodb://${process.env.IP}:27017/TodoApp`, (err, db) => {
    if(err){
        return console.log(err);
    }
    console.log('connected to MongoDB server!');
    
    
    // db.collection('Todos').deleteMany({
    //     text:'Eat lunch'
    // },(err, result) => {
    //     if(err){
    //         return console.log("Unable to delete from collection");
    //     }
    //     console.log(result);
    // });
    
    // db.collection('Todos').deleteOne({
    //     text:'Eat lunch'
    // },(err, result) => {
    //     if(err){
    //         return console.log("Unable to delete from collection");
    //     }
    //     console.log(result);
    // });
    
    db.collection('Todos').findOneAndDelete({
        _id: new ObjectID('5a1662298b73bd117820ae90')
    },(err, result) => {
        if(err){
            return console.log("Unable to delete from collection");
        }
        console.log(result);
    });
    
    db.close();
});