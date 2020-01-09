import Book, { IBook } from '../models/book.model';

   export async function getBooksDB():Promise<IBook[]>{
        return await Book.find().populate('books');
        
    }

    export async function insertBookDB(book: IBook):Promise<IBook>{
        const newBook = new Book(book);
        await newBook.save();
        return newBook;
    }


    export async function getBookDB(bookID: string):Promise<IBook | null>{
         return await Book.findById(bookID);
         
    }

    export async function deleteBookDB(bookID: string):Promise<any>{
        return await Book.findOneAndDelete(bookID);
    }

    export async function updateBookDB(isbn: any ,book: IBook){
        
        return await Book.findOneAndUpdate({isbn}, book,{new:true} )
     }
 

