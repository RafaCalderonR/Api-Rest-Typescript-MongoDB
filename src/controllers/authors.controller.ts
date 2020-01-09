import { Request, Response } from 'express';
import Author, { IAuthor } from '../models/author.model';
import { getAuthorDB, insertAuthorDB, getAuthorsDB, deleteAuthorDB, updateAuthorDB } from '../services/authors.service';


export async function getAuthors(req: Request, res: Response): Promise<Response> {
  const authors = await getAuthorsDB();
  return res.json(authors);;
}

export async function getAuthor(req: Request, res: Response): Promise<Response>{
  const author = await getAuthorDB(req.params.AuthorId)
  return res.json(author);
}

  export async function createAuthor(req: Request, res: Response): Promise<Response> {
  const newAuthor = await insertAuthorDB(req.body);    
  return res.json({
    message: 'Author Saved Successfully',
    newAuthor,
  });
}


  export async function  deleteAuthor(req: Request,res: Response ): Promise<Response> {
  await deleteAuthorDB(req.params.AuthorId);
  return res.json({ message: 'Author Deleted' });
  }
  

export async function updateAuthor( req: Request,res: Response,): Promise<Response> {
  const  { code } = req.body;
  const updatedAuthor = await updateAuthorDB(code, req.body)
  return res.json({
    message: 'Successfully updated',
    updateAuthor
  });
}
  




