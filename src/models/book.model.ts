import {Schema,model, Document} from 'mongoose';
import {Author} from './author.model';

const schema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    author: {type: Schema.Types.ObjectId, ref: 'authors'}
});
export interface Book extends Document{
    readonly _id: string;
    readonly name: string;
    readonly author: Author
}

export default model<Book>('books', schema)