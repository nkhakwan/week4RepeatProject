// Business Logic -----------------------
function PizzaOrders() {
  this.toppingOnePrice = [],
  this.toppingTwoPrice = [],
  this.sizePrice =[],
  this.orderPrice = [],
  this.id = 0
}


PizzaOrders.prototype.addOrder = function(toppingOne, toppingTwo, size, orderPrice) {
  this.id += 1;
  this.toppingOnePrice[this.id] = toppingOne;
  this.toppingTwoPrice[this.id] = toppingTwo;
  this.sizePrice[this.id] = size;
  this.orderPrice[this.id] = orderPrice;
}
var calculateOrder = function(size, toppingOne, toppingTwo){
  var price = size + toppingOne +toppingTwo;
  return price;
}

// user interface logic -------------------------------
var pizzaOrder = new PizzaOrders();
$(document).ready(function() {
  $("form").submit(function(event){
    alert("inthesedconloop");
    event.preventDefault();
    var pizzaSize = parseInt($("#size").val());
    var meatType  = parseInt($("#meat").val());
    var vegType   = parseInt($("#veg").val());
    alert(pizzaSize + ","+ meatType +"," + vegType);
    pizzaOrder.addOrder(pizzaSize,meatType,vegType,calculateOrder(pizzaSize,meatType,vegType));
    $("#cost").html(calculateOrder(pizzaSize,meatType,vegType));
  });
});