var mongoose = require('mongoose');

var ContactoSchema = new mongoose.Schema({
  mail: String,
  pregunta: String,
  calendario: Date,
  
});

module.exports = mongoose.model('Contacto', ContactoSchema);