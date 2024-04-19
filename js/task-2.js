"use strict";

const price = 1;
const deliveryFee = 1;
const country = 1;

function getShippingMessage(price, deliveryFee) {
  const totalPrice = price * deliveryFee;
  console.log(`Shipping to ${country} will cost ${totalPrice} credits`);
}
