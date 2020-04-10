// Business Logic -----------------------
function PizzaOrders() {
  this.toppingOnePrice = [],
  this.toppingTwoPrice = [],
  this.sizePrice =[],
  this.orderPrice = [],
  this.toppingOne = [],
  this.toppingTwo = [],
  this.size = [],
  this.id = 0
}


PizzaOrders.prototype.addOrder = function(toppingOne, toppingTwo, size) {
  this.id += 1;
  this.toppingOnePrice[this.id] = toppingOne;
  this.toppingTwoPrice[this.id] = toppingTwo;
  this.sizePrice[this.id] = size;
  this.orderPrice[this.id] = calculateOrder(this.sizePrice[this.id],this.toppingOnePrice[this.id], this.toppingTwoPrice[this.id]);
  if(toppingOne === 5){
    this.toppingOne[this.id] = "Mutton";
  } else if (toppingOne === 2)  {
      this.toppingOne[this.id] = "Beef";
    } else{
      this.toppingOne[this.id] = "Chicken";
    }
  if(toppingTwo === 5){
    this.toppingTwo[this.id] = "Olives And Artichoke";
  } else {
      this.toppingTwo[this.id] = "Mushrooms and Garden Salad";
    }
  if(size === 18){
    this.size[this.id] = "Family size";
  } else if (size === 15)  {
      this.size[this.id] = "Large";
    } else if (size === 12){
      this.size[this.id] = "medium";
      } else{
        this.size[this.id] = "small";
        }
 
}
var calculateOrder = function(size,toppingOne,toppingTwo){
  return size + toppingOne + toppingTwo;
}


/*function displayOrderDetails(pizzaOrder) {
  var ordersListt = $("ul#delivered");
  var htmlForOrderInfo = "";
  pizzaOrder.size.forEach(function(mySize) {
    htmlForOrderInfo += "<li id=" + idd + ">" + mySize  + " " + "</li>" ;
  ordersListt.html(htmlForOrderInfo);
});
ordersListt.html(htmlForOrderInfo);
};*/



function displayOrderDetails(pizzaOrder) {
  
  for (var i=1; i<(pizzaOrder.toppingOne.length +1); i =i+1){
  $("#delivered").html(pizzaOrder.size[i]  + "," + pizzaOrder.toppingOne[i] + "," + pizzaOrder.toppingTwo[i]);
  }
}

// user interface logic -------------------------------
var pizzaOrder = new PizzaOrders();
$(document).ready(function() {
  
  $("form").submit(function(event){
    displayOrderDetails(pizzaOrder);
    event.preventDefault();
    var pizzaSize = parseInt($("#size").val());
    var meatType  = parseInt($("#meat").val());
    var vegType   = parseInt($("#veg").val());
    pizzaOrder.addOrder(meatType,vegType,pizzaSize);
   $("#cost").html(pizzaOrder.orderPrice[pizzaOrder.id]);
  });
});