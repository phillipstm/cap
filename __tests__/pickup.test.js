'use strict';

const vendorPickup = require('../src/handlers/vendorPickup.js');
const eventPool = require('../eventPool');

/* 2 params to mock
1. module / object to mock (or path to module)
2. callback that returns an object, because the eventPool is an object ( with 2 methods)*/

jest.mock(eventPool, () => {
    return {
        on: jest.fn(),
        emit: jest.fn(),
    }
});

describe('VENDOR PICKUP Test', () => {
    console.log = jest.fn();

    test('log and emit VENDOR PICKUP Handler event', () => {
        vendorPickup({message: ready});
        expect(console.log).toHaveBeenCalledWith('VENDOR PICKUP: new order', {message: ready});
        expect(eventPool.emit).toHaveBeenCalledWith('VENDOR PICKUP', 'ready');
    });
})