var customerName = "bob";

function customerName() {

}
console.log(customerName);

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";}

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = "not bob";
    leastFavoriteCustomer = "maybe bob"; 
}
