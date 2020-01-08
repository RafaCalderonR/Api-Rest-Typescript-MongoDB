import {Schema,model, Document} from 'mongoose';
import {IAuthor} from './author.model';

const schema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    author: {type: Schema.Types.ObjectId, ref: 'authors'}
});
export interface IBook extends Document{
    readonly _id: string;
    readonly name: string;
    readonly author: IAuthor
}

export default model<IBook>('books', schema)