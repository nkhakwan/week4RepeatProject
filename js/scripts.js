// Business Logic -----------------------
function PizzaOrders() {
  this.toppingOne = [],
  this.toppingTwo = [],
  this.size =[],
  this.orderPrice = [],
  this.id = 0
}


PizzaOrders.prototype.addOrder = function(toppingOne, toppingTwo, size, orderPrice) {
  this.id += 1;
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
  this.orderPrice[this.id] = orderPrice;
}



/*PizzaOrders.prototype.addOrder = function(toppingOne, toppingTwo, size, orderPrice) {
  this.id += 1;
  this.toppingOnePrice[this.id] = toppingOne;
  this.toppingTwoPrice[this.id] = toppingTwo;
  this.sizePrice[this.id] = size;
  this.orderPrice[this.id] = orderPrice;
}*/
var calculateOrder = function(size, toppingOne, toppingTwo){
  var price = size + toppingOne +toppingTwo;
  return price;
}


/*function displayContactDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "  " + contact.email + " " + "</li>" ;
  contactsList.html(htmlForContactInfo);
});
contactsList.html(htmlForContactInfo);
};*/





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