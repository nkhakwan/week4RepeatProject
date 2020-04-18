function PizzaOrders(size, topping1, topping2) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.toppingOne = "";
  this.toppingTwo = "";
  this.sizeCat = "";
}

PizzaOrders.prototype.calculateOrder = function(){
  return this.size + this.topping1 + this.topping2;
}

PizzaOrders.prototype.details = function() {
  if(this.topping1 === 5){
    this.toppingOne = "Mutton";
  } else if (this.topping1 === 2)  {
      this.toppingOne = "Beef";
    } else{
      this.toppingOne = "Chicken";
    }
  if(this.topping2 === 5){
    this.toppingTwo = "Olives And Artichoke";
  } else {
      this.toppingTwo = "Mushrooms and Garden Salad";
    }
  if(this.size === 18){
    this.sizeCat = "Family size";
  } else if (this.size === 15)  {
      this.sizeCat = "Large";
    } else if (this.size === 12){
      this.sizeCat = "medium";
      } else{
        this.sizeCat = "small";
        }
}



// user interface logic -------------------------------
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var pizzaSize = parseInt($("#size").val());
    var meatType  = parseInt($("#meat").val());
    var vegType   = parseInt($("#veg").val());
    var pizzaOrder = new PizzaOrders(pizzaSize,meatType,vegType);
   $("#cost").html(pizzaOrder.calculateOrder());
   pizzaOrder.details();
   $("#det").html("You have order"+ " " +pizzaOrder.sizeCat + " pizza with meat topping of " + pizzaOrder.toppingOne + " and veggie topping of " + pizzaOrder.toppingTwo + " ");
  });
});