const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://young20057912:dlsdud121100@cluster0.wwflerq.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function main() {
  try {
    await client.connect();
    const test = client.db('kdt5').collection('test');

    await test.deleteMany({});

    await test.insertMany([
      { name: 'pororo', age: 5 },
      { name: 'crong', age: 4 },
      { name: 'loopy', age: 6 },
    ]);
    const findCursor = test.find({ age: { $gte: 5 } });
    const dateArr = await findCursor.toArray();

    console.log(dateArr);
  } catch (err) {
    console.log(err);
  }

  // const deleteManyResultSec = await test.deleteMany({ age: { $gte: 5 } });
  // console.log(deleteManyResultSec);

  // const updateManyResult = await test.updateMany(
  //   { age: { $gte: 5 } },
  //   { $set: { name: '5살 이상' } },
  // );
  // console.log(updateManyResult);
}

main();

// // insertOne
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');

//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertOne(
//       {
//         name: 'pororo',
//         age: 5,
//       },
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//       },
//     );
//   });
//   // perform actions on the collection object
//   // test.deleteMany({}, (deleteErr, deleteResult) => {
//   //   if (deleteErr) throw deleteErr;
//   //   console.log(deleteResult);
//   //   test.insertOne(
//   //     {
//   //       name: 'young',
//   //       nickName: 'young22',
//   //     },
//   //     (insertErr, insertResult) => {
//   //       console.log(insertResult);
//   //       // client.close();
//   //       const findCursor = test.find({});
//   //       findCursor.toArray((err, data) => {
//   //         console.log(data);
//   //       });
//   //     },
//   //   );
//   // });
// });

// // insertMany
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');

//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//       },
//     );
//   });
// });

// deleteOne 쿼리
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');

//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);

//         test.deleteOne({ name: 'crong' }, (deleteOneErr, deleteOneResult) => {
//           if (deleteOneErr) throw deleteOneErr;
//           console.log(deleteOneResult);
//         });

//         test.deleteMany({ age: 5 }, (deleteManyErr, deleteManyResult) => {
//           if (deleteManyErr) throw deleteManyErr;
//           console.log(deleteManyResult);
//         });
//         // client.close();
//       },
//     );
//   });
// });

// deleteMany 쿼리
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');

//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);

//         test.deleteMany(
//           { age: { $gte: 5 } },
//           (deleteManyErr, deleteManyResult) => {
//             if (deleteManyErr) throw deleteManyErr;
//             console.log(deleteManyResult);
//           },
//         );
//         // client.close();
//       },
//     );
//   });
// });

// update 쿼리
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         test.updateOne(
//           { name: 'loopy' },
//           { $set: { name: '루피' } },
//           (updateErr, updateResult) => {
//             if (updateErr) throw updateErr;
//             console.log(updateResult);
//           },
//         );
//       },
//     );
//   });
// });

// updateMany
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         test.updateMany(
//           { age: { $gte: 5 } },
//           { $set: { name: '5살 이상인 친구들' } },
//           (updateErr, updateResult) => {
//             if (updateErr) throw updateErr;
//             console.log(updateResult);
//           },
//         );
//       },
//     );
//   });
// });

// findOne
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         test.findOne({ name: 'loopy' }, (findErr, findData) => {
//           console.log(findData);
//         });
//       },
//     );
//   });
// });

// // find
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         const findCursor = test.find({ name: 'loopy' });
//         console.log(findCursor);
//       },
//     );
//   });
// });
