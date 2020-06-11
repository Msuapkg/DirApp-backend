/* eslint-disable no-shadow */
/* eslint-disable func-names */
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
  /* // Ejemplo de manejar referenciada la cardinalidad de 1-1
  // Reforzar un historial (Solo actualiza los cambios señalados, inserta el objeto)
  address: {
    street_name: {},
    zip_code: {},
    city: {},
    country: {},
  },
  // Ejemplo de manejar referenciada la cardinalidad de 1-1
  // Reforzar la integridad referencial (Actualiza todos los cambios)
  address_ref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Adresses',
  }, */

});

// eslint-disable-next-line consistent-return
UsersSchema.pre('save', function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  // generate a salt
  // eslint-disable-next-line consistent-return
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
