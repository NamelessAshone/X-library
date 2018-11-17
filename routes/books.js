const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

/**
 * BOOK ROUTERS
 */

// GET index
router.get('/', bookController.index);

// GET all books
router.get('/books', bookController.books);

// GET show one book by id
router.get('/book/:id', bookController.book_detail);

// GET create one book
router.get('/book/create', bookController.create_book_get);

// POST create one book
router.post('/book/create', bookController.create_book_post);

// GET update one book
router.get('/book/:id/update', bookController.update_book_get);

// POST update one book
router.post('/book/:id/update', bookController.update_book_post);

// GET delete one book
router.get('/book/:id/delete', bookController.delete_book_get);

// POST delete one book
router.get('/book/:id/delete', bookController.delete_book_post);

module.exports = router;
