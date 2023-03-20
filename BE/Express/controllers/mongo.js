const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://young20057912:dlsdud121100@cluster0.wwflerq.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const test = client.db('kdt5').collection('test');
  // perform actions on the collection object
  test.deleteMany({}, (deleteErr, deleteResult) => {
    if (deleteErr) throw deleteErr;
    console.log(deleteResult);
    test.insertOne(
      {
        name: 'young',
        nickName: 'young22',
      },
      (insertErr, insertResult) => {
        console.log(insertResult);
        // client.close();
        const findCursor = test.find({});
        findCursor.toArray((err, data) => {
          console.log(data);
        });
      },
    );
  });
});
