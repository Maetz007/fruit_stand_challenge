//declare starting variables
var money = 100;

var bananaArray=[];
var haveOranges=0;
var orangeArray=[];
var haveApples=0;
var appleArray=[];
var haveGrapes=0;
var grapeArray=[];
var timeInterval = 1000;
var randomUpDown;
var randomIncrement;
var totalAvgPrice;
var getAvgPrice = function(array) {
  	var sum = 0;
  	for(var i = 0; i < array.length; i++){
  		sum += array[i];
  	}
  	sum = sum/array.length;
  	sum = (sum * 100) / 100;
  	for(i = 0; i < array.length; i++){
  		array[i] = sum;
  	}
    return sum.toFixed(2);


  };



// calculates and checks remaining money, updates inventory
$( document ).ready(function() {

//generates random prices between 0.50 and 9.99
  $('#bananaPrice').text(((Math.random() * 9.49) + 0.50).toFixed(2));
  var bananaPrice = $('#bananaPrice').text();
  $('#orangePrice').text(((Math.random() * 9.49) + 0.50).toFixed(2));
  var orangePrice = $('#orangePrice').text();
  $('#applePrice').text(((Math.random() * 9.49) + 0.50).toFixed(2));
  var applePrice = $('#applePrice').text();
  $('#grapePrice').text(((Math.random() * 9.49) + 0.50).toFixed(2));
  var grapePrice = ($('#grapePrice').text());
     $('.cash').text('YOUR CASH = $' + money);

//anonymous function that sets intervals to recalc the numbers
setInterval(function(){
  //random price increase/decrease in increments of 0.01-0.50 for each of the fruits
  //banana
  randomUpDown = Math.floor(Math.random() * 2);
  randomIncrement = ((Math.random() * 0.49) + 0.01).toFixed(2);
  if (randomUpDown === 0) {
        bananaPrice = (parseFloat(bananaPrice) + parseFloat(randomIncrement));
        if (bananaPrice>=10) {bananaPrice = 9.99;}
      }
      else {
        bananaPrice = (parseFloat(bananaPrice) - parseFloat(randomIncrement));
         if (bananaPrice <= 0.49) {bananaPrice = 0.50;}
      }
      bananaPrice=parseFloat(bananaPrice.toFixed(2));
$('#bananaPrice').text(bananaPrice);
//orange
randomUpDown = Math.floor(Math.random() * 2);
randomIncrement = ((Math.random() * 0.49) + 0.01).toFixed(2);
if (randomUpDown === 0) {
      orangePrice = ( parseFloat(orangePrice) + parseFloat(randomIncrement));
      if (orangePrice>=10) {orangePrice = 9.99;}
    }
    else {
      orangePrice = ( parseFloat(orangePrice) - parseFloat(randomIncrement));
      if (orangePrice <= 0.49) {orangePrice = 0.50;}
    }
    orangePrice=parseFloat(orangePrice.toFixed(2));
$('#orangePrice').text(orangePrice);
//apple
randomUpDown = Math.floor(Math.random() * 2);
randomIncrement = ((Math.random() * 0.49) + 0.01).toFixed(2);
if (randomUpDown === 0) {
      applePrice = ( parseFloat(applePrice) + parseFloat(randomIncrement));
      if (applePrice>=10) {applePrice = 9.99;}
    }
    else {
      applePrice = ( parseFloat(applePrice) - parseFloat(randomIncrement));
      if (applePrice <= 0.49) {applePrice = 0.50;}
    }
    applePrice=parseFloat(applePrice.toFixed(2));
$('#applePrice').text(applePrice);
//grape
randomUpDown = Math.floor(Math.random() * 2);
randomIncrement = ((Math.random() * 0.49) + 0.01).toFixed(2);
if (randomUpDown === 0) {
      grapePrice = ( parseFloat(grapePrice) + parseFloat(randomIncrement));
      if (grapePrice>=10) {bananaPrice = 9.99;}
    }
    else {
      grapePrice = ( parseFloat(grapePrice) - parseFloat(randomIncrement));
      if (grapePrice <= 0.49) {grapePrice = 0.50;}
    }
    grapePrice=parseFloat(grapePrice.toFixed(2));
$('#grapePrice').text(grapePrice);
//change the interval here:
}, timeInterval);

// Buy button functions
     $('#buyBananaBtn').click(function(){
       if ((money-bananaPrice)<0){
         alert('NOT ENOUGH CASH!');
       }
       else {
          bananaArray.push(bananaPrice);
          money = parseFloat(money - bananaPrice).toFixed(2);
          $('.cash').text('YOUR CASH = $' + money);
          $('.bananaInventory').text(bananaArray.length + ' Bananas:  ' + getAvgPrice(bananaArray) + " AVG price");
          console.log("banana array " + bananaArray);
          }
     });

     $('#buyOrangeBtn').click(function(){
       if ((money-orangePrice)<0){
         alert('NOT ENOUGH CASH!');
       }
       else {
         orangeArray.push(orangePrice);
         money = (money - orangePrice).toFixed(2);
         $('.cash').text('YOUR CASH = $' + money);
         $('.orangeInventory').text(orangeArray.length + ' Oranges: '  + getAvgPrice(orangeArray) + " AVG price");
         console.log("orange array " + orangeArray);
      }
     });

     $('#buyAppleBtn').click(function(){
       if ((money-applePrice)<0){
         alert('NOT ENOUGH CASH!');
       }
       else {
         appleArray.push(applePrice);
         money = (money - applePrice).toFixed(2);
         $('.cash').text('YOUR CASH = $' + money);
         $('.appleInventory').text(appleArray.length + ' Apples: ' + getAvgPrice(appleArray) + " AVG price");
       }
     });

     $('#buyGrapeBtn').click(function(){
       if ((money-grapePrice)<0){
         alert('NOT ENOUGH CASH!');
       }
       else {
         grapeArray.push(grapePrice);
         money = (money - grapePrice).toFixed(2);
         $('.cash').text('YOUR CASH = $' + money);
         $('.grapeInventory').text(grapeArray.length + ' Grapes: ' + getAvgPrice(grapeArray) + " AVG price");
       }
     });

     //sell button functions

     $('#sellBananaBtn').click(function(){
         if (haveBananas <= 0){
           alert('NOT ENOUGH INVENTORY!');
         } else {
         haveBananas -= 1;
         console.log(haveBananas);
         money = (money + bananaPrice).toFixed(2);
         console.log(money);
         $('.cash').text('YOUR CASH = $' + money);
         $('.bananaInventory').text(haveBananas + ' Bananas');
     }
   });

    $('#sellOrangeBtn').click(function(){
        if (haveOranges <= 0){
          alert('NOT ENOUGH INVENTORY!');
        } else {
        haveOranges -= 1;
        money = (money + orangePrice).toFixed(2);
        $('.cash').text('YOUR CASH = $' + money);
        $('.orangeInventory').text(haveOranges + ' Oranges');
    }
  });

    $('#sellAppleBtn').click(function(){
      if (haveApples <= 0){
        alert('NOT ENOUGH INVENTORY!');
      } else {
        haveApples -= 1;
        money = (money + applePrice).toFixed(2);
        $('.cash').text('YOUR CASH = $' + money);
        $('.appleInventory').text(haveApples + ' Apples');
    }
  });

    $('#sellGrapeBtn').click(function(){
      if (haveGrapes <= 0){
        alert('NOT ENOUGH INVENTORY!');
      } else {
        haveGrapes -= 1;
        money = (money + grapePrice).toFixed(2);
        $('.cash').text('YOUR CASH = $' + money);
        $('.grapeInventory').text(haveGrapes + ' Grapes');
      }
    });

  });
