'use strict';

const Chance = require('chance');

const chance = new Chance();

let customer = {
    name: chance.name,
    orderId: chance.guid,
    address: chance.address,
    date: chance.date,
    time: chance.timestamp,
};

let store = {
   store: chance.company,
   orderId: chance 
}

module.exports = chance;