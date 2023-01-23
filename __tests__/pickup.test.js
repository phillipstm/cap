'use strict';

const handlePickup = require('../src/handlers/pickup.js');
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

describe('Handle Pick Test', () => {
    console.log = jest.fn();

    test('log and emit Pick Handler event', () => {
        handlePickup({message: ready});
        expect(console.log).toHaveBeenCalledWith('Package: new order', {message: ready});
        expect(eventPool.emit).toHaveBeenCalledWith('Pickup', 'ready');
    });
})