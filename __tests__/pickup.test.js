'use strict';

const { log } = require("console");
const vendorPickup = require("../handlers/vendorPickup");

const socket = io('http://localhost:3001/caps');
const logEvent = (message, data) => {
  console.log(`VENDOR PICKUP: ${message}`, data);
socket.emit = ('VENDOR_PICKUP', message, data);
};

/* 2 params to mock
1. module / object to mock (or path to module)
2. callback that returns an object, because the event is an object ( with 2 methods)*/

jest.mock( socket, () => {
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
        expect(socket.emit).toHaveBeenCalledWith('VENDOR PICKUP', 'ready');
    });
})