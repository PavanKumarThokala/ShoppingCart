var product = require('../models/product');
var mongoose = require('mongoose');
var mongodb = require('mongodb');
mongoose.connect('mongodb://localhost:27017/shoppingcart');
var products = [
  new product({
  price: 40,
  imagepath: 'http://www.posterparty.com/images/fp4276.jpg',
  title: 'Overwatch',
  description: 'Very nice game'
  }),
  new product({
  price: 20,
  imagepath: 'http://www.mobygames.com/images/covers/l/305109-the-witcher-3-wild-hunt-xbox-one-front-cover.png',
  title: 'WitcherIII',
  description: 'Very nice game'
  }),
  new product({
  price: 12,
  imagepath: 'https://s-media-cache-ak0.pinimg.com/736x/25/ce/55/25ce55dc0c0415ed4d02871b1f27b270--tom-clancys-rainbow-six-ps-console.jpg',
  title: 'Rainbow Six Seige',
  description: 'Very nice game'
  }),
  new product({
  price: 5,
  imagepath: 'https://d2y7xuvh99w6jl.cloudfront.net/wp-content/uploads/sites/3/2016/07/rocket-league-cover.jpg',
  title: 'Rocket league',
  description: 'Very nice game'
  }),
  new product({
  price: 10,
  imagepath: 'https://www.licente-jocuri.ro/image/data/covers/600x.jpg',
  title: 'Minecraft',
  description: 'Very nice game'
  })
];

var done = 0;
for (var i=0;i<products.length;i++){
  products[i].save(function(err, result){
    done++;
    if (done === products.length){
      exit();
    }
  });
}
function exit(){
  mongoose.disconnect();
}
