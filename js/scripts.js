// Business Logic -----------------------
function PizzaOrders() {
  this.toppingOne = [],
  this.toppingTwo = [],
  this.size =[],
  this.currentId = 0
}

// user interface logic -------------------------------

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    //var pizzaSize = parseInt($("#size").val());
    var pizzaSize = parseInt($("#size").val());
    var meatType  = parseInt($("#meat").val());
    var vegType   = parseInt($("#veg").val());
    alert(pizzaSize + ","+ meatType +"," + vegType);
    //var newTicket = new Ticket (agePrice, moviePrice, showTimePrice);
    
    //newTicket.addPrices();
  });
});