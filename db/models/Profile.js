const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  username: String,
  results: String,
  friends: Array,
  incoming: Array,
  outgoing: Array,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
