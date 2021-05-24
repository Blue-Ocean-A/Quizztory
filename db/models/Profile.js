const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, index: true },
  results: Array,
  friends: Array,
  incoming: Array,
  outgoing: Array,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
