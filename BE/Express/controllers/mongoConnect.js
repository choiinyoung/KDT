const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri =
//   'mongodb+srv://young20057912:dlsdud121100@cluster0.wwflerq.mongodb.net/?retryWrites=true&w=majority';

const { MONGO_DB_URI } = process.env;
console.log(MONGO_DB_URI);
const client = new MongoClient(MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
