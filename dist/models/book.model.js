"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    name: String,
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: 'authors' }
});
exports.default = mongoose_1.model('books', schema);
