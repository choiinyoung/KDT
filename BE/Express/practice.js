const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://young20057912:dlsdud121100@cluster0.wwflerq.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// CallBack 방식
// client.connect((err) => {
//   const test = client.db('kdt5').collection('member');

//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;

//     test.insertMany(
//       [
//         { name: '성희', age: 24 },
//         { name: '민영', age: 25 },
//         { name: '성희', age: 27 },
//         { name: '두루', age: 30 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;

//         test.insertOne(
//           {
//             name: '찬호',
//             age: 26,
//           },
//           (insertOneErr, insertOneResult) => {
//             if (insertOneErr) throw insertOneErr;

//             test.deleteOne(
//               { name: '민영' },
//               (deleteOneErr, deleteOneResult) => {
//                 if (deleteOneErr) throw deleteOneErr;

//                 test.updateOne(
//                   { name: '찬호' },
//                   { $set: { name: '민영', age: 25 } },
//                   (updateErr, updateResult) => {
//                     if (updateErr) throw updateErr;

//                     const findCursor = test.find({ age: { $gte: 25 } });

//                     findCursor.toArray((toArrErr, arrData) => {
//                       if (toArrErr) throw toArrErr;
//                       console.log(arrData);
//                     });
//                   },
//                 );
//               },
//             );
//           },
//         );
//       },
//     );
//   });
// });

// Async 방식
async function main() {
  try {
    await client.connect();
    const test = client.db('kdt5').collection('member');

    await test.deleteMany({});

    await test.insertMany([
      { name: '성희', age: 24 },
      { name: '민영', age: 25 },
      { name: '성희', age: 27 },
      { name: '두루', age: 31 },
    ]);

    await test.insertOne({ name: '찬호', age: 26 });

    await test.deleteOne({ name: '민영' });

    await test.updateOne({ name: '찬호' }, { $set: { name: '민영', age: 25 } });

    const findCursor = test.find({ age: { $gte: 25 } });
    const dateArr = await findCursor.toArray();

    console.log(dateArr);
  } catch (err) {
    console.log(err);
  }
}

main();
