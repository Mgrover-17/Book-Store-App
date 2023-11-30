const mongoose=require("mongoose")
const config=require("config")
const url=config.get('db_string')
// console.log("url",url);
exports.connectToDb=()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("Database Connected"))
    .catch(()=>console.log("Error"))
}
