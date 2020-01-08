"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    name: String,
    books: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'books' }]
});
exports.default = mongoose_1.model('authors', schema);
