const db = require('mongoose');

const Schema = db.Schema;

const BookSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  owner: { type: String, required: true },
  description: { type: String, required: true },
  where: { type: String, required: true },
});

BookSchema
  .virtual('imageURL')
  .get(function () {
    return `/public/images/books/ ${this._id}`;
  });

module.exports = db.model('Book', BookSchema);
