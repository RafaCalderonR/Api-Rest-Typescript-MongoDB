import Author, { IAuthor } from '../models/author.model';

   export async function getAuthorsDB():Promise<IAuthor[]>{
        return await Author.find().populate('books');
        
    }

    export async function insertAuthorDB(author: IAuthor):Promise<IAuthor>{
        const newAuthor = new Author(author);
        await newAuthor.save();
        return newAuthor;
    }


    export async function getAuthorDB(authorID: string):Promise<IAuthor | null>{
         return await Author.findById(authorID);
         
    }

    export async function deleteAuthorDB(authorID: string):Promise<any>{
        return await Author.findOneAndDelete(authorID);
    }

    export async function updateAuthorDB(code: any ,author: IAuthor){
        
       return await Author.findOneAndUpdate({code}, author,{new:true} )
    }


