const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Hotel = new Schema({
  name :String,
  starts:Number,
  price:Number,
  image:String,
  amenities:[
      "safety-box",
      "nightclub",
      "deep-soaking-bathtub",
      "beach",
      "bathtub",
      "bathrobes",
      "beach-pool-facilities",
      "business-center",
      "children-club",
      "coffe-maker",
      "deep-soaking-bathtub",
      "fitness-center",
      "garden",
      "kitchen-facilities",
      "newspaper",
      "restaurant",
      "safety-box",
      "separate-bredroom"
    ]


});

module.exports = mongoose.model('hoteles', Hotel);
