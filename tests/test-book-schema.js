const assert = require('assert');

const db = require('../db');
const Book = require('../models/book');

const book = new Book({
  name: 'scip',
  author: 'H.A',
  owner: 'ssx',
  description: 'sfasfdfafdfsfafdafd',
  where: 'home',
});

Book.deleteMany({ name: book.name }, (err) => {});

book.save((err) => {
  if (err) {
    console.log('ERROR: faided to save date.', err.stack);
  }
});

Book
  .findOne({ name: 'scip' })
  .exec((err, res) => {
    if (err) {
      console.log('ERROR: failed to query datas.', err.stack);
    }
    console.log(typeof res, typeof book);
    assert(typeof res === typeof book, `res: ${typeof res} != book: ${typeof book}`);
    assert.deepStrictEqual(res, book, `result don't equal to origin data\nresult: ${res}\norigin: ${book}`);
  });
