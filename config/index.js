require('dotenv').config();

const { NODE_ENV } = process.env;

const config = {
  production: {
    MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cintanegra-shard-00-00-dcwza.mongodb.net:27017,cintanegra-shard-00-01-dcwza.mongodb.net:27017,cintanegra-shard-00-02-dcwza.mongodb.net:27017/production?ssl=true&replicaSet=CintaNegra-shard-0&authSource=admin&retryWrites=true&w=majority`,
    //
  },
  staging: {
    MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cintanegra-shard-00-00-dcwza.mongodb.net:27017,cintanegra-shard-00-01-dcwza.mongodb.net:27017,cintanegra-shard-00-02-dcwza.mongodb.net:27017/staging?ssl=true&replicaSet=CintaNegra-shard-0&authSource=admin&retryWrites=true&w=majority`,
  },
};

module.exports = config[NODE_ENV];
