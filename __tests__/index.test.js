'use strict';

describe('Are we working!!!', ()=>{
  test('True', ()=>{
    expect(true).toBeTruthy();
  });
});

it('should create a new order', () => {
  const payload = {
    store: 'ACME Inc.',
    customer: 'John Doe',
    orderID: 'C1234567890',
    address: '123 Main St.',
    date: '2023-02-14',
    time: '12:34:56',
    event: 'NEW_ORDER',
    payload: {
      // additional order details
    },
  };

  const orderInterval = setInterval(() => {
    // insert code from selected code here
  }, ORDER_INTERVAL);

  caps.emit('NEW_ORDER', payload, orderInterval);

  expect(logEvent).toHaveBeenCalledWith('NEW_ORDER', payload);
});