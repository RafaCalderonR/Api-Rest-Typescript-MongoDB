import { Router } from 'express'
import { getAuthors, createAuthor, getAuthor, deleteAuthor, updateAuthor } from '../controllers/authors.controller'
import upload from '../libs/multer'

const router = Router();

router.route('/')
    .get(getAuthors)
    .post(upload.single('image'), createAuthor);

router.route('/:AuthorId')
    .get(getAuthor)
    .delete(deleteAuthor)
    .put(updateAuthor);

export default router;