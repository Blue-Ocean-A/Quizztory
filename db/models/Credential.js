const mongoose = require('mongoose');

const credentialSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const Credential = mongoose.model('Credential', credentialSchema);

module.exports = Credential;
