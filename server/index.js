'use strict';


const PORT = process.env.PORT || 3002;


function start() {
  listening(PORT, () => console.log(`listening on port ${PORT}`));
}
module.exports = { PORT, start };