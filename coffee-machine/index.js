const { EventEmitter } = require("events");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const eventEmitter = new EventEmitter();

/**
 * makeCoffee logs out a message with chosen coffee.
 * @param {string} coffeeName The name of the coffee.
 */
const makeCoffee = coffeeName => {
  console.log(`\n${coffeeName} coffee has created!`);
};

/**
 * makeBill logs out a message with the amount of the bill.
 * @param {number} price The price of the coffee.
 */
const makeBill = price => {
  console.log(`$${price} bill has been made!`);
};

/**
 * onCoffeeOrderedListener handles all process on "coffee-order" event.
 * @param {object} The object of the coffee.
 */
const onCoffeeOrderedListener = ({ name, price }) => {
  makeCoffee(name);
  makeBill(price);
};

eventEmitter.on("coffee-order", onCoffeeOrderedListener);

readline.question("Which coffee do you choose? ", coffee => {
  eventEmitter.emit("coffee-order", { name: coffee, price: 15 });
  readline.close();
});
