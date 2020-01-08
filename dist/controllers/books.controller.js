"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_model_1 = __importDefault(require("../models/book.model"));
function getBooks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const books = yield book_model_1.default.find().populate('team');
        return res.json(books);
    });
}
exports.getBooks = getBooks;
function createBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { _id, name, author } = req.body;
        const newBook = { _id, name, author };
        const book = new book_model_1.default(newBook);
        yield book.save();
        return res.json({
            message: 'Book Saved Successfully',
            author,
        });
    });
}
exports.createBook = createBook;
function getBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const book = yield book_model_1.default.findById(id);
        return res.json(book);
    });
}
exports.getBook = getBook;
function deleteBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const book = (yield book_model_1.default.findByIdAndRemove(id));
        return res.json({ message: 'Club Deleted' });
    });
}
exports.deleteBook = deleteBook;
function updateBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { name, author } = req.body;
        const updatedBook = yield book_model_1.default.findByIdAndUpdate(id, {
            name,
            author,
        });
        return res.json({
            message: 'Successfully updated',
            updatedBook,
        });
    });
}
exports.updateBook = updateBook;
