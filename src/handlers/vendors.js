'use strict';

import { emit } from '../../eventPool';
import { guid, name, address as _address } from '../modules/chance';

let pickupHandler = (payload) => {
  let payload = {
    store: company(),
    orderID: guid(),
    customer: name(),
    address: _address(({short_suffix: true})),
  };
  console.log(`VENDOR: ready for pickup ${payload.company}`);
  emit('Vendor pickup', payload.orderID);
};

// let deliveredHandler = (payload) => {
//   console.log(`VENDOR: Thank you, ${payload.customer}`);
// };

export default { pickupHandler };