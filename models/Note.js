const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
    title:{
        type : String,
        requried : true
    },
    description:{
        type : String,
        required : true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    }
    
})
module.exports = mongoose.model("Note",NoteSchema);