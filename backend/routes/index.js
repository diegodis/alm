const express = require("express");
const router = express.Router();
const Hotel = require("../models/hoteles");

router.get("/" , async (req, res) => {
  req.query = parseValues(req.query);
  if(req.query.name != undefined && req.query.name != ""){
      req.query.name = req.query.name.trim();
  }
  console.log(req.query);
  const hotel = await Hotel.find(req.query);
  res.send(hotel);
});

router.post("/add" , async (req, res) => {
  console.log(req)
  const hotel = new Hotel(req.body);
  console.log(hotel)
  await hotel.save();
  res.send(hotel._id);
});

router.delete("/delete/:id" , async (req , res) =>{
  const {id} = req.params;
  console.log({id});
  await Hotel.remove({_id:id });
  res.redirect("/");
});


router.put("/update/:id" , async (req , res) =>{
  const{id} = req.params;
  await Hotel.update({_id : id} , req.body);
  res.redirect("/");

});

//Preparación de query
function isInt(n){
	  n=parseInt(n);
    return Number(n) === n && n % 1 === 0;
}

function isFloat(n){
	  n=parseFloat(n);
    return Number(n) === n && n % 1 !== 0;
}

function parseValues(objectQuery){

  for (var i in objectQuery) {
     if (objectQuery.hasOwnProperty(i)) {

       if(isFloat( objectQuery[i])){
         objectQuery[i] = parseFloat(objectQuery[i]);
       }else if(isInt(objectQuery[i])){
         objectQuery[i] = parseInt(objectQuery[i]);
       }
     }
   }

//rango de precios (valor agregado)
  if(
      (objectQuery.priceStart != undefined  && objectQuery.priceEnd)
      && (isInt(objectQuery.priceStart) || isFloat(objectQuery.priceStart))
      && (isInt(objectQuery.priceEnd) || isFloat(objectQuery.priceEnd))
    ){
      objectQuery.price = {
        $gte: objectQuery.priceStart, $lte: objectQuery.priceEnd
      }
  }

  delete objectQuery.priceStart;
  delete objectQuery.priceEnd;

  return objectQuery;
}

module.exports =  router;
