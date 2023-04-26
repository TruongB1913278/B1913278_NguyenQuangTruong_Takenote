const { response } = require("express");
const {Note, User} = require("../model/model");

const noteController = {
    // ADD note
    addNote: async(req, res) => {
        try {
            const newNote = new Note(req.body);
            const saveNote = await newNote.save();
            if(req.body.user){
                const user = User.findById(req.body.user);
                await user.updateOne({$push: {notes: saveNote._id}});
            }

            res.status(200).json(saveNote);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //GET ALL NOTE
    getAllNote: async(req, res) => {
        console.log("get all note");
        try {
            const notes = await Note.find();
            res.status(200).json(notes);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //GET NOTE BY ID
    getNoteById: async(req, res) => {
        try {
            const notes = await Note.findById(req.params.id);
            res.status(200).json(notes);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //update note
    updateNote: async(req, res) =>{
        try{
            const rs = await Note.updateOne({_id: req.params.id},{$set: {
                title: req.body.title,
                content: req.body.content,
                skin: req.body.skin,
                listImage: req.body.listImage
            }})
            res.status(200).json(rs);
        }
        catch (error){
            res.status(500).json(error);
        }
    },

    //DELETE A NOTE
    deleteANote: async(req, res) => {
        console.log("delete note");
        try {
            await User.updateMany(
                {notes: req.params.id}, 
                {$pull:{notes: req.params.id}}
            );
            await Note.findByIdAndDelete(req.params.id);
            
            res.status(200).json("delete successfully <3");
        } catch (error) {
            res.status(500).json(error);
        }
    },


    //get All Note Of User
    getAllNoteOfUser: async(req, res) => {
        var user = await Note.find({user: req.params.id});
        res.status(200).json(user);
    }
}

module.exports = noteController;