// TODO: complete dao here.
const Book = require('../models/book');

const bookDao = {
  addBooks: (books) => {
    console.log(`NOT IMPLEMENTED: add Books${books}`);
  },
  deleteBooks: (bookIds) => {
    console.log(`NOT IMPLEMENTED: deletebooks${bookIds}`);
  },
  setBook: (book) => {
    console.log(`NOT IMPLEMENTED: setBook${book}`);
  },
  getBook: (id) => {
    console.log(`NOT IMPLEMENTED: getBook${id}`);
  },
  getAllBooks: () => {
    console.log('NOT IMPLEMENTED: getAllBooks');
  },
};

module.exports = bookDao;
