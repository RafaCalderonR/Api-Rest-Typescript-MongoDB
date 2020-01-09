import { Request, Response } from 'express';
import Book, { IBook } from '../models/book.model';
import { getBookDB, insertBookDB, getBooksDB, deleteBookDB } from '../services/books.service';


export async function getBooks(req: Request, res: Response): Promise<Response> {
  const books = await getBooksDB();
  return res.json(books);
}

export async function createBook(req: Request,res: Response,): Promise<Response> {
  
  const newBook = await insertBookDB(req.body)
  return res.json({
    message: 'Book Saved Successfully',
    newBook,
  });
}

export async function getBook(req: Request, res: Response): Promise<Response> {  
  const book = await getBookDB(req.params.BookId)
  return res.json(book);
}

export async function deleteBook(req: Request,res: Response,): Promise<Response> {
  await deleteBookDB(req.params.BookId)
  
  return res.json({ message: 'Club Deleted' });
}

export async function updateBook(
  req: Request,
  res: Response,
): Promise<Response> {
  const { id } = req.params;
  const { name, author } = req.body;
  const updatedBook = await Book.findByIdAndUpdate(id, {
    name,
    author,
  });
  return res.json({
    message: 'Successfully updated',
    updatedBook,
  });
}