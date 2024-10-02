// 1. Declare a global variable 'customerName' using 'var'
var customerName = 'bob';

// 2. Function to uppercase 'customerName'
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Modifies the global 'customerName'
}

// 3. Function to set 'bestCustomer' to 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob'; // Declares 'bestCustomer' in global scope
}

// 4. Function to overwrite 'bestCustomer'
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Changes the global 'bestCustomer' variable
}

// 5. Declare 'leastFavoriteCustomer' as a constant and attempt to change it
const leastFavoriteCustomer = 'some initial value';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'another value'; // This will throw an error because constants cannot be reassigned
}
