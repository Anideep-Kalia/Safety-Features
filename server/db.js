const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/easynotes"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo succeesfully");
    })
}

module.exports=connectToMongo;