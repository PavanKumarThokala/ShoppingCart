var mongoose = require('mongoose');
var schema = mongoose.Schema;
mongoose.Promise = global.Promise;
var product = new schema({
  price:{
    type: Number,
    required: true
  },
  imagepath:{
    type: String,
    required: true
  },
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  }
});

var product = mongoose.model('Product', product);

module.exports = product;
