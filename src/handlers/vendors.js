'use strict';

import { emit } from '../../eventPool';
import { guid, name, address as _address } from './chance';

let pickupHandler = (store) => {
  let payload = {
    store,
    orderID: guid(),
    customer: name(),
    address: _address(),
  };
  console.log(`VENDOR: ready for pickup ${payload.orderID}`);
  emit('pickup', payload);
};

let deliveredHandler = (payload) => {
  console.log(`VENDOR: Thank you, ${payload.customer}`);
};

export default { pickupHandler, deliveredHandler };