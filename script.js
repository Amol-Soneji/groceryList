// create a variable called groceryList that holds an array of the
// following strings:
// - Bananas
// - Bread
// - Eggs
// - Butter
// - Tomatoes
// - Spinach
// YOUR CODE HERE
let groceryList = ["Bananas", "Bread", "Eggs", "Butter", "Tomatoes", "Spinach"];
// using a template string, log the entire groceryList to the console
// YOUR CODE HERE
console.log(`I have the following items in the grocery list : ${groceryList}`);
// add "Rice" to the end of the list
// YOUR CODE HERE
console.log("Added rice to the list!");
groceryList.push("Rice");
// Remove "Bananas" from the beginning of the list
// YOUR CODE HERE
console.log("Removed bananas!");
groceryList.shift();
// locate the index of "Eggs" and remove it from the list based on its index
// YOUR CODE HERE
console.log("Removed eggs!");
groceryList.splice(groceryList.indexOf("Eggs"), 1);
// log the entire array to the console
// you should see:
// ["Bread", "Butter", "Tomatoes", "Spinach", "Rice"]
console.log("I still have some things in my list:");
// YOUR CODE HERE
console.log(`${groceryList}`);
