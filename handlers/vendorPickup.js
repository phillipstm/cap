'use strict';

const Chance = require('chance');
var chance = new Chance();
const eventPool = require('../eventPool');

//initiate new order
function vendorPickup(payload) {
  setTimeout(() => {
    console.log(`VENDOR: ready for pickup at ${payload.store}`);
    let orderPayload = {
      store: chance.company(),
      customer: chance.name(),
      orderId: chance.guid(),
      address: chance.address(),
      date: chance.date(),
      time: chance.timestamp(),
      payload: payload,
    };
    eventPool.emit('VENDOR_PICKUP', orderPayload);
  }, 1000);
}

module.exports = { vendorPickup };