const mongoose = require('mongoose');

const credentialSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Credential = mongoose.model('Credential', credentialSchema);

module.exports = Credential;
