// EXAMPLE 1 - Remove Duplicates from an Array of Objects in JavaScript

// ✅ If you need to check for uniqueness based on a single property
const arr = [
  {id: 1, name: 'Tom'},
  {id: 1, name: 'Tom'},
  {id: 2, name: 'Nick'},
  {id: 2, name: 'Nick'},
];

const uniqueIds = [];

const unique = arr.filter(element => {
  const isDuplicate = uniqueIds.includes(element.id);

  if (!isDuplicate) {
    uniqueIds.push(element.id);

    return true;
  }

  return false;
});

// 👇️ [{id: 1, name: 'Tom'}, {id: 2, name: 'Nick'}]
console.log(unique);

// ------------------------------------------------------------
// ------------------------------------------------------------
// ------------------------------------------------------------

// ✅ If you need to check for uniqueness based on multiple properties

const arr2 = [
  {id: 1, name: 'Tom'},
  {id: 1, name: 'Tom'},
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Nick'},
  {id: 2, name: 'Nick'},
  {id: 2, name: 'Bob'},
];

const unique2 = arr2.filter((obj, index) => {
  return (
    index ===
    arr2.findIndex(o => obj.id === o.id && obj.name === o.name)
  );
});

// [
//   { id: 1, name: 'Tom' },
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Nick' },
//   { id: 2, name: 'Bob' }
// ]
console.log(unique2);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Defining a reusable function to remove duplicates from array of objects

// const arr = [
//   {id: 1, name: 'Tom'},
//   {id: 1, name: 'Tom'},
//   {id: 1, name: 'Alice'},
//   {id: 2, name: 'Nick'},
//   {id: 2, name: 'James'},
// ];

// function removeDuplicateObjects(array, property) {
//   const uniqueIds = [];

//   const unique = array.filter(element => {
//     const isDuplicate = uniqueIds.includes(element[property]);

//     if (!isDuplicate) {
//       uniqueIds.push(element[property]);

//       return true;
//     }

//     return false;
//   });

//   return unique;
// }

// // [ { id: 1, name: 'Tom' }, { id: 2, name: 'Nick' } ]
// console.log(removeDuplicateObjects(arr, 'id'));

// // [
// //   { id: 1, name: 'Tom' },
// //   { id: 1, name: 'Alice' },
// //   { id: 2, name: 'Nick' },
// //   { id: 2, name: 'James' }
// // ]
// console.log(removeDuplicateObjects(arr, 'name'));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove Duplicates from an Array of Objects using `Set()`

// const arr = [
//   {id: 1, name: 'Tom'},
//   {id: 1, name: 'Tom'},
//   {id: 2, name: 'Nick'},
//   {id: 2, name: 'Nick'},
// ];

// const uniqueIds = new Set();

// const unique = arr.filter(element => {
//   const isDuplicate = uniqueIds.has(element.id);

//   uniqueIds.add(element.id);

//   if (!isDuplicate) {
//     return true;
//   }

//   return false;
// });

// // 👇️ [{id: 1, name: 'Tom'}, {id: 2, name: 'Nick'}]
// console.log(unique);
