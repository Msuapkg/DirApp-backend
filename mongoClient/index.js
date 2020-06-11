const mongoose = require('mongoose');
// process.env.MONGO_URI    VARIABLE DE ENTORNO => Así accedemos a una variable de entorno

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected'))
  .catch(() => console.log('Error connecting to database...'));
