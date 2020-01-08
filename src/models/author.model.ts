import { Schema, model, Document } from 'mongoose';
import {Book} from './book.model';


const schema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    books: [{type: Schema.Types.ObjectId, ref:'books'}]
});
export interface Author extends Document{
    readonly _id:string;
    readonly name:string;
    readonly books: Book[];
}

export default model<Author>('authors', schema);