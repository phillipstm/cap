'use strict';

const Event = require('events');

const eventPool = new Event();
// const pickupHandler = require('./src/handlers/vendors');
// const driverHandler = require('./src/handlers/drivers');

// const vendorPickup = require('./src/modules/vendorPickup');


// // Create client list
// // create functions for clients

// function pickupHandler(payload){
// const payload = {text: 'Order ready for pickup'}
// eventPool.emit('Vendor pickup', payload); }
// console.log('vendor transmitting!!!!');

// //    .....proof of life node eventPool.js in terminal .....client subscribes with .on(), taking 2 args: event name as string and CB--code you want to fire
// eventPool.on('Vendor pickup')
// setInterval( () => {
//     pickupHandler()},2000)

// function driverHandler(payload){
//     console.log('Driver pickup', payload);
// }

/// Above set interval add the functions that will receive event function name(payload){ console.log('Message Received', payload)};..could have crud or rest operations, could emit also
module.exports = eventPool;