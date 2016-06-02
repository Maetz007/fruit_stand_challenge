
var bananaPrice;
var applePrice;
var orangePrice;
var grapePrice;

var startPrice = 0;
var minNum = 0.01;
var maxNum = 0.50;
var randomPrice = 0;

var endPrice = 0;

var priceChange = setInterval(fruitTimer, 15000);

function fruitTimer() {
   console.log("itWorks!");
 }

var getPrice = function(){

 var randomChange = Math.floor(Math.random() * 2);
 var randomPrice = ((Math.random() * 0.50) + 0.005);
console.log(randomPrice + " randomNumber");
 var changePrice = Math.floor(Math.random() * 10);
 var adjustPrice = 0;

// Looks to see if endPrice has been updated. Returns only on first time pass then falls through after each pass
 if (endPrice === 0)
   { if (randomChange === 0)
     { endPrice = Number((changePrice - randomPrice).toFixed(2)); }

       else { endPrice = Number((changePrice + randomPrice).toFixed(2)); }
       document.getElementById('randomDisplay').innerHTML = endPrice; }

// looks to adjust endPrice either plus or negative and makes sure endPrice stays with +/-0.50 ofr previous endPrice
 else
 { if (randomChange === 0)
   { endPrice = (endPrice - randomPrice).toFixed(2);
     endPrice = Number(endPrice - Math.floor(randomPrice)); }

       else { endPrice = (endPrice + randomPrice).toFixed(2);
       endPrice = Number(endPrice + Math.floor(randomPrice)); }

       document.getElementById('randomDisplay').innerHTML = endPrice; }
console.log("endPrice = " + endPrice);
 };
