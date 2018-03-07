var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  titulo: String,
  foto: String,
  contenido: String,
  fecha: String
});

module.exports = mongoose.model('Book', BlogSchema);