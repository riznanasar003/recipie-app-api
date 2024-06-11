const mongoose = require ("mongoose")
const schema = mongoose.Schema(
    {
        "recid":{type:String,required:true},
        "recname":{type:String,required:true},
        "description":{type:String,required:true},
        "image":{type:String,required:true}
    }
)

let recipiemodel = mongoose.model("recipies",schema);
module.exports = {recipiemodel}