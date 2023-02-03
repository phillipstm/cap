'use strict';

const Chance = require('chance');

const chance = new Chance();

let payload = {
    store: chance.company,
    customer: chance.name,
    orderId: chance.guid,
    address: chance.address,
    date: chance.date,
    time: chance.timestamp,
};

module.exports = payload;