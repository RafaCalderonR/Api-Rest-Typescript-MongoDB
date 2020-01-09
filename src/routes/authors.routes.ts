import { Router } from 'express'
import { getAuthors, createAuthor, getAuthor, deleteAuthor } from '../controllers/authors.controller'


const router = Router();

router.route('/')
    .get(getAuthors)
    .post(createAuthor);

router.route('/:AuthorId')
    .get(getAuthor)
    .delete(deleteAuthor)
    .put();

export default router;