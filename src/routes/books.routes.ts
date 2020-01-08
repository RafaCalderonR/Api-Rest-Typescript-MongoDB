import { Router } from 'express'
import { getBooks, createBook, getBook, deleteBook, updateBook } from '../controllers/books.controller'


const router = Router();

router.route('/')
    .get(getBooks)
    .post(createBook);

router.route('/:BookId')
    .get(getBook)
    .delete(deleteBook)
    .put(updateBook);

export default router;