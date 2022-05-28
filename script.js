/*
	WEB 303 Assignment 1 - jQuery
	Aayushi Patel
*/

$(document).ready(function(){
	$("#price").keyup(function(){
	  calculateTax();
	});
	$("#add-price").click(function(){
		addToList();
	  });
	
  });
  
  
  function calculateTax(){
	  let price = $("#price").val();
	  let tax = price * 0.13 ;
	  let printTax = tax.toFixed(2); 
	  $("#tax").text('$'+printTax);
  }

  function addToList(){
	let price = $("#price").val();
	let tax = price * 0.13 ;
	let total = Number(price) + Number(tax);
	$("#price-list").append('<li>$'+total+'</li>');
	console.log(total);
  }