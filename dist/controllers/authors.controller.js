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
const author_model_1 = __importDefault(require("../models/author.model"));
function getAuthors(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const authors = yield author_model_1.default.find().populate('team');
        return res.json(authors);
    });
}
exports.getAuthors = getAuthors;
function createAuthor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { _id, name, books } = req.body;
        const newBook = { _id, name, books };
        const author = new author_model_1.default(newBook);
        yield author.save();
        return res.json({
            message: 'Book Saved Successfully',
            author,
        });
    });
}
exports.createAuthor = createAuthor;
function getAuthor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const author = yield author_model_1.default.findById(id);
        return res.json(author);
    });
}
exports.getAuthor = getAuthor;
function deleteAuthor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const author = (yield author_model_1.default.findByIdAndRemove(id));
        return res.json({ message: 'Author Deleted' });
    });
}
exports.deleteAuthor = deleteAuthor;
function updateAuthor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { name, author } = req.body;
        const updatedAuthor = yield author_model_1.default.findByIdAndUpdate(id, {
            name,
            author,
        });
        return res.json({
            message: 'Successfully updated',
            updatedAuthor,
        });
    });
}
exports.updateAuthor = updateAuthor;
