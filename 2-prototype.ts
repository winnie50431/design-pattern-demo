/** 不斷的繼承會導致結構變複雜 */

// const zombie = {
//   eatBrains() {
//     return 'yum 🧠';
//   },
// };

// const winnie = Object.create(zombie, {
//   name: {
//     value: 'winnie',
//   },
// });

// winnie.__proto__;
// Object.getPrototypeOf(winnie);

// console.log(winnie);
// /**
//  * JS will go up to prototype chain
//  * until it reaches the root */

// winnie.eatBrains();
