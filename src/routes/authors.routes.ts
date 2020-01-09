import { Router } from 'express'
import { getAuthors, createAuthor, getAuthor, deleteAuthor, updateAuthor } from '../controllers/authors.controller'


const router = Router();

router.route('/')
    .get(getAuthors)
    .post(createAuthor);

router.route('/:AuthorId')
    .get(getAuthor)
    .delete(deleteAuthor)
    .put(updateAuthor);

export default router;