const express = require('express')
const router = express.Router();
const Book = require('../model/BookModel');
const bookController = require('../controllers/books-controllers')

router.get("/",bookController.getAllBooks)
router.post("/",bookController.addBook)
//get product by id
router.get("/:id",bookController.getById)
//update request
router.put("/:id",bookController.updateBook)
//delete request
router.delete("/:id",bookController.deleteBook)


module.exports = router;