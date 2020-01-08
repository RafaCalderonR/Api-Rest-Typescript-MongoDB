import { Request, Response } from 'express';
import Book, { IBook } from '../models/book.model';

export async function getBooks(req: Request, res: Response): Promise<Response> {
  const books = await Book.find().populate('author').exec();
  return res.json(books);
}

export async function createBook(
  req: Request,
  res: Response,
): Promise<Response> {
  const { _id, name, author } = req.body;
  const newBook = { _id, name, author };
  const book = new Book(newBook);
  await book.save();
  return res.json({
    message: 'Book Saved Successfully',
    author,
  });
}

export async function getBook(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const book = await Book.findById(id);
  return res.json(book);
}

export async function deleteBook(
  req: Request,
  res: Response,
): Promise<Response> {
  const { id } = req.params;
  const book = (await Book.findByIdAndRemove(id)) as IBook;
  
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