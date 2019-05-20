console.log("Entered payment.js");

var principal;

function calcTax() {
  console.log("Entered calcTax()");
  var price = parseInt(document.querySelector("#price").value);
  var tax = parseInt(document.querySelector("#tax").value) / 100;
  var taxresult;
  var pricetax;

  taxresult = price * tax;
  pricetax = price + taxresult;

  console.log("The tax amount is " + taxresult);
  document.getElementById("taxresult").value = taxresult;
  document.getElementById("pricetax").value = pricetax;
} // end of function

function calcPrinc() {
  console.log("Entered calcPrinc()");
  var cost = parseInt(document.querySelector("#pricetax").value);
  var down = parseInt(document.querySelector("#down").value);

  principal = cost - down;

  console.log("The principal is " + principal);
  document.getElementById("princ").value = principal;
} // end of function

function calcResult() {
  console.log("Entered calcResult()");
  var apr = (parseInt(document.querySelector("#apr").value)) / 100;
  var payments = parseInt(document.querySelector("#payments").value);
  var monthrate = apr/12;
  var numerator;
  var denominator;
  var result;

  numerator = principal * monthrate * ((1+monthrate)**payments);
  denominator = ((1+monthrate)**payments) - 1;
  result = (numerator / denominator).toFixed(2);
  console.log("The result is " + result);
  document.getElementById("result").value = result;
} // end of function