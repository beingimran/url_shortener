const mongoose = require("mongoose");

async function handleMongoConnect(url) {
  return mongoose.connect(url);
}

module.exports = { handleMongoConnect };
