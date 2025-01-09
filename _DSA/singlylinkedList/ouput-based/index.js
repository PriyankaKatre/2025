// function Person(firstName, lastName) {
//   this.firstName = firstName;
//     this.lastName = lastName;
//     this.getFullName = function () {
//       return `${this.firstName} ${this.lastName}`;
//     };
// }

// const member = new Person("Lydia", "Hallie");
// // Person.getFullName = function () {
// //   return `${this.firstName} ${this.lastName}`;
// // };

// console.log(member.getFullName());


(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
