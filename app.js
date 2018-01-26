'use strict';

//Declearing multiple variables
var namesA = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

// var itemList = document.getElementById('itemList');
var storeForm = document.getElementById('Buy');

var allPrice = [29,49,9,7,6,9,9,9,23,7,9,8,9,34,9,9,9,23,24,4];
Products.allproduct = [];

function Products(fileP, name){
  this.fileP = fileP;
  this.alt = name;
  this.price = 0;
  this.quantity1 = 0;
  Products.allproduct.push(this);
}



function generate(){
  for(var i = 0; i < namesA.length; i++){
    new Products('img/' + namesA[i] + '.jpg', namesA[i]);
  }
  for(var i = 0; i < namesA.length; i++){
    var optionList = document.createElement('option');
    optionList.textContent = namesA[i];
    itemList.appendChild(optionList);
  }
};

storeForm.addEventListener('submit', addToCart);



//takes items and stores them into local storage
// function localStorage(){

function addToCart(event){
  event.preventDefault();
  var product = event.target.product.value;
  var quantity = event.target.quantity.value;
  for(var i = 0; i < Products.allproduct.length; i++){
    if(product === Products.allproduct[i].alt){
      Products.allproduct[i].quantity1 = quantity;
    } 
  }
 console.log(Products.allproduct)
}


generate();