'use strict';

const eventPool = require('../eventPool');

let deliveredHandler = (payload) => {
    console.log(`VENDOR: Thank you, ${payload.customer}`);
    eventPool.emit('order delivered', payload);

};
module.exports = { deliveredHandler };