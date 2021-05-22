const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  results: Array,
  friends: Array,
  incoming: Array,
  outgoing: Array,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
