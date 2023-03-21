const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://young20057912:dlsdud121100@cluster0.wwflerq.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
