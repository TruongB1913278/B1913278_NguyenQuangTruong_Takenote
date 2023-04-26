const noteController = require("../controllers/noteController");

const router = require("express").Router();

//ADD NOTE
router.post("/", noteController.addNote);

//GET ALL NOTE
router.get("/", noteController.getAllNote);

//GET BY ID
router.get("/:id", noteController.getNoteById);

//DELETE NOTE
router.delete("/:id", noteController.deleteANote);

// UPDATE NOTE
router.put("/:id", noteController.updateNote) ;

//GET ALL NOTE OF USER
router.get("/getnotesbyuserid/:id", noteController.getAllNoteOfUser);

module.exports = router;