'use strict';

const eventPool = require('./eventPool');
const chance = require('./src/modules/chance');
const { driverHandler } = require('./src/handlers/driver');
const { deliveredHandler } = require('./src/handlers/vendor');
const { vendorPickup } = require('./src/modules/vendorPickup');
const { driverDelivered } = require('./src/handlers/driverDelivered')


class EventLog {
  constructor(event, payload) {
    this.event = event;
    this.date = new Date();
    this.time = new Date.toTimeString();
    this.payload = payload;
  }
  log() {
    console.log(this);
  }
}

eventPool.on('Vendor pickup', () => new EventLog('pickup', vendorPickup.payload).log());
eventPool.on(`Driver pickup`, driverHandler);
eventPool.on('in-transit', (payload) => new EventLog('in-transit', payload).log());
eventPool.on('driverDelivered', (payload) => new EventLog('driverDelivered', payload).log());
eventPool.on('delivered', deliveredHandler);

setInterval(() => {
  const vendorPickup = (chance.orderId())
  console.log(`Order has changed ${vendorPickup}`);
  eventPool.emit('Vendor pickup', { vendorPickup})
}, 5000)