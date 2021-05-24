const mongoose = require('mongoose');

const credentialSchema = new mongoose.Schema({
  name: { type: String, index: true },
  password: String,
});

const Credential = mongoose.model('Credential', credentialSchema);

module.exports = Credential;
