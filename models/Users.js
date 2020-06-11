const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

const UsersSchema = mongoose.Schema({
  first_name: {
    type: String,
    require: true,
    trin: true,
  },
  last_name: {
    type: String,
    require: true,
    trin: true,
  },
  email: {
    type: String,
    require: true,
    trin: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    trin: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});

UsersSchema.pre('save', function (next) {
  const user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (errHash, salt) => {
    if (errHash) return next(errHash);
    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, (errHash, hash) => {
      // override the cleartext password with the hashed one
      user.password = hash;
      return next();
    });
  });
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;
