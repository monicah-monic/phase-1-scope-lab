var customerName = "bob";
console.log(customerName)

function upperCaseCustomerName(){
     customerName=customerName.toUpperCase()
    console.log(upperCaseCustomerName)
 }

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "some customer";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "another customer";
}
