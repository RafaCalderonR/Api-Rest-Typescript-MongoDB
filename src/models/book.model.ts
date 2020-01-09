import {Schema,model, Document} from 'mongoose';
import {IAuthor} from './author.model';

const schema = new Schema({
    name: String,
    author: {type: Schema.Types.ObjectId, ref: 'authors'},
    isbn: String
});
export interface IBook extends Document{
    readonly name: string;
    readonly author: IAuthor;
    readonly isbn: string
}

export default model<IBook>('books', schema)