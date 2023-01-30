'use strict';

const Event = require('events');

const eventPool = new Event();

const driverHandler = require('./src/modules/drivers');

const vendorPickup = require('./src/modules/vendorPickup');
// Create client list
// create functions for clients

// function ....sending initial emit{vendor, function client, function driver
// const payload = {text: 'You have a message'})
// eventPool.emit('Name Event', payload); }

// eventPool.on('Send Message').....client subscribes with .on(), taking 2 args: event name as string and CB--code you want to fire
// setInterval( => {functionName()},2000)   .....proof of life node eventPool.js in terminal

/// Above set interval add the functions that will receive event function name(payload){ console.log('Message Received', payload)};..could have crud or rest operations, could emit also
module.exports = eventPool;