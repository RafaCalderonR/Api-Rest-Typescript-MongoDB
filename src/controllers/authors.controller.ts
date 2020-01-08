import { Request, Response } from 'express';
import Author, { IAuthor } from '../models/author.model';

export async function getAuthors(req: Request, res: Response): Promise<Response> {
  const authors = await Author.find().populate('books');
  return res.json(authors);
}

export async function createAuthor(
  req: Request,
  res: Response,
): Promise<Response> {
  const { _id, name, books } = req.body;
  const newBook = { _id, name, books };
  const author = new Author(newBook);
  await author.save();
  return res.json({
    message: 'Book Saved Successfully',
    author,
  });
}

export async function getAuthor(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const author = await Author.findById(id);
  return res.json(author);
}

export async function deleteAuthor(
  req: Request,
  res: Response,
): Promise<Response> {
  const { id } = req.params;
  const author = (await Author.findByIdAndRemove(id)) as IAuthor;
  
  return res.json({ message: 'Author Deleted' });
}

export async function updateAuthor(
  req: Request,
  res: Response,
): Promise<Response> {
  const { id } = req.params;
  const { name, author } = req.body;
  const updatedAuthor = await Author.findByIdAndUpdate(id, {
    name,
    author,
  });
  return res.json({
    message: 'Successfully updated',
    updatedAuthor,
  });
}