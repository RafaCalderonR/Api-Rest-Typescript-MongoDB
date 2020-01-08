"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authors_controller_1 = require("../controllers/authors.controller");
const router = express_1.Router();
router.route('/')
    .get(authors_controller_1.getAuthors)
    .post(authors_controller_1.createAuthor);
router.route('/:AuthorId')
    .get(authors_controller_1.getAuthor)
    .delete(authors_controller_1.deleteAuthor)
    .put(authors_controller_1.updateAuthor);
exports.default = router;
