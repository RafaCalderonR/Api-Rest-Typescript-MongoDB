"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = require("../controllers/books.controller");
const router = express_1.Router();
router.route('/')
    .get(books_controller_1.getBooks)
    .post(books_controller_1.createBook);
router.route('/:BookId')
    .get(books_controller_1.getBook)
    .delete(books_controller_1.deleteBook)
    .put(books_controller_1.updateBook);
exports.default = router;
