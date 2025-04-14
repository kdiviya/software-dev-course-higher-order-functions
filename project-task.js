/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

// ============================================
// 🔧 Tasks
// ============================================

/*
🔹 Task 1: Filter Products by Availability

Create a function `filterProducts` that accepts:
- an array of products
- a callback function

The callback should determine which products to include.
Example: filter by availability or price threshold.

Step-by-Step:
1. Define the `filterProducts` function with appropriate parameters.
2. Use the `filter()` method to apply the callback to the array.
3. Return the filtered result.
*/

// priceCondition is the callback which is a parameter to the filterProducts(), which filters the product with price >=500.
function filterProducts(product, priceCondition){ 
  console.log("Filtered products:");
  const filteredProducts = product.filter(priceCondition);
  return filteredProducts;
}

function filterPrice(productsParam){
   return productsParam.price >=500;
}

console.log(filterProducts(products,filterPrice));

/*
🔹 Task 2: Transform Product Names

Use `map()` to create a new array of product names in UPPERCASE.

Step-by-Step:
1. Use `map()` on the products array.
2. Extract and transform the `name` property to uppercase.
3. Store the result in a new variable.
*/

let upperCaseNames = products.map(nameParam => nameParam.name.toUpperCase()); // used map() to transform the product name in uppercase.
console.log("Uppercased names:");
console.log(upperCaseNames);

/*
🔹 Task 3: Generate Discounted Prices

Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage
- Returns a function that takes a product and returns a discounted price

Step-by-Step:
1. Define a function `applyDiscount` that takes `discountPercent`.
2. Return a new function that takes a product object.
3. Use this returned function inside a `map()` call to apply discounts to all products.
*/

// created  a higher order function applyDiscount() which accepts the parameter as function(product) to calculate the discounted product price.
function applyDiscount(discountParam){
  return (function(productParam){
    return{ 
      name: productParam.name,
      price: productParam.price - (productParam.price *(discountParam/100))};
  }
);}

const discountPercent = applyDiscount(10); // called applyDiscount() and assign the callback "function(product)" to the const variable "discountPercent".
console.log("Discounted products:");
console.log(products.map(discountPercent)); //This calls the callback function(product) inside the map() and display the product name and discount price.


/*
🔹 Task 4: Calculate Total Inventory Value

Use `reduce()` to calculate the total value of products that are currently in stock.

Step-by-Step:
1. Use the `reduce()` method on the products array.
2. Add only the prices of products where `inStock` is true.
3. Store the total in a new variable.
*/

let totalVal = products
  .filter((product) => product.inStock) //used filter() to list the instocked products.

  //used reduce() to calculate the total price of the instocked products.
  .reduce((total, prod) => {
  const priceConversion = Number(prod.price);
  return total + priceConversion; }, 0);
  console.log("Total value in stock: " +totalVal);

// ============================================
// 🧪 Console Test Your Work
// ============================================

// console.log("Filtered products:", ...);
// console.log("Uppercased names:", ...);
// console.log("Discounted products:", ...);
// console.log("Total value in stock:", ...);
/*output:
Filtered products:
[
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Phone', price: 500, inStock: false },
  { name: 'Tablet', price: 800, inStock: true }
]
Uppercased names:
[ 'LAPTOP', 'PHONE', 'TABLET', 'MONITOR', 'KEYBOARD' ]
Discounted products:
[
  { name: 'Laptop', price: 900 },
  { name: 'Phone', price: 450 },
  { name: 'Tablet', price: 720 },
  { name: 'Monitor', price: 270 },
  { name: 'Keyboard', price: 90 }
]
Total value in stock: 2100 */
