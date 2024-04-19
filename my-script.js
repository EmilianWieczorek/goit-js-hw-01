"use strict";

const quantity = 1;
const pricePerDroid = 1;

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
}
