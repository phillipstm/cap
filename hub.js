'use strict';

const eventPool = require('./eventPool');
const chance = require('./src/modules/chance');
const { driverHandler } = require('./src/modules/driver');
const { deliveredHandler, vendorPickup } = require('./src/modules/vendorPickup');

class EventLog {
  constructor(event, payload) {
    this.event = event;
    this.time = new Date.toTimeString();
    this.payload = payload;
  }
  log() {
    console.log(this);
  }
}

eventPool.on('pickup', (payload) => new EventLog('pickup', payload).log());
eventPool.on('pickup', driverHandler);
eventPool.on('in-transit', (payload) => new EventLog('in-transit', payload).log());
eventPool.on('delivered', (payload) => new EventLog('delivered', payload).log());
eventPool.on('delivered', deliveredHandler);

vendorPickup(chance.company());