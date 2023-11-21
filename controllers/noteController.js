const noteModel = require("../models/Note");


const createNote = async(req,res)=>{
    console.log(req.userId);
    const{title , description} = req.body;
    const newNote = new noteModel({
        title : title,
        description:description,
        userId : req.userId
    });
    try {
        await newNote.save();
        res.status(201).json(newNote);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
        
    }


}

const updateNote = (req,res)=>{


}

const deleteNote = (req,res)=>{


}

const getNotes = async(req,res)=>{
    try {
        const notes = await noteModel.find({userId:req.userId});    
        res.status(200).json(notes);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
        
    }


}

module.exports = {
    createNote,
    updateNote,
    deleteNote,
    getNotes
}