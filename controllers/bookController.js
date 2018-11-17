const Book = require('../models/book');

exports.index = (req, res) => {
  res.send('NOT IMPLEMENTED: site home page');
};

exports.books = (req, res) => {
  res.send('NOT IMPLEMENTED: show all books');
};

exports.book_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: show detail of one book ${req.params.id}`);
};

exports.create_book_get = (req, res) => {
  res.send('NOT IMPLEMENTED: create book get');
};

exports.create_book_post = (req, res) => {
  res.send('NOT IMPLEMENTED: create book post');
};

exports.update_book_get = (req, res) => {
  res.send(`NOT IMPLEMENTED: update book get ${req.params.id}`);
};

exports.update_book_post = (req, res) => {
  res.send(`NOT IMPLEMENTED: update book post ${req.params.id}`);
};

exports.delete_book_get = (req, res) => {
  res.send(`NOT IMPLEMENTED: delete book get ${req.params.id}`);
};

exports.delete_book_post = (req, res) => {
  res.send(`NOT IMPLEMENTED: delete book post ${req.params.id}`);
};
