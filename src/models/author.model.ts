import { Schema, model, Document } from 'mongoose';
import {IBook} from './book.model';


const schema = new Schema({
    name: String,
    books: [{type: Schema.Types.ObjectId, ref:'books'}],
    code: String
});
export interface IAuthor extends Document{
    readonly name:string;
    readonly books: IBook[];
    readonly code: string
}

export default model<IAuthor>('authors', schema);