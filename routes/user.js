const userController = require("../controllers/userController");

const router = require("express").Router();

//ADD USER
router.post("/", userController.addUser);

//GET ALL USER
router.get("/", userController.getAllUser);

// LOGIN (GET USER BY EMAIL AND PASSWORD)
router.get("/login", userController.login);

// FIND MY EMAIL
router.get("/findByEmail", userController.findByEmail);

//GET BY ID
router.get("/:id", userController.getUserById);

//DELETE USER
router.delete("/:id", userController.deleteAUser);

// Update USER
router.put("/:id", userController.updateUser) ;


module.exports = router;