"use strict";

function getShippingMessage(country, price, deliveryFee) {
  country = "Australia";
  const totalPrice = price * deliveryFee;
  console.log(`Shipping to ${country} will cost ${totalPrice} credits`);
}
