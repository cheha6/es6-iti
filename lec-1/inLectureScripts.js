// let vs const fel sari3

// let x = 5;
// var y = 'a'

// if (x == 5) {
//   let x = 10
//   var y = 'b'
// }

// console.log(x, y)

// let c = 5;

// c = 10;

// refrence to the array

const x = 5;

// x = 11;

const arr1 = ['shehab']

// Object.assign

// const myObj = {
//   name: 'Ahmed', 
//   age: 14
// }

// const myObj2 = myObj;

// const test = 4;
// let test2 = test;

// test2 = 10;

// console.log(test)


// const myObj2 = Object.assign({}, myObj);

// console.log(myObj2)

// console.log(Object.keys(myObj), 'keys')
// console.log(Object.entries(myObj), 'entries')




// const student = {
//   name: 'Ahmed',
//   age: 22,
//   grades: ['10', '20', '30'], 
//   l: '', 
//   d: ''
// }

// // without destructuring
// const name = student.name;
// const age = student.age;

// console.log(studentName, studentAge);

// //  with destructuring
// const {age, grades, name} = student;

// const [grade1, ,grade2 ] = grades;

// console.log(name)

// function getStudentInformation ({name, age}) {
//   return `Student name ${name} and student age ${age} `
// }

// console.log(getStudentInformation(student))

// rest parameter
// const shoppingCart = ['apples', 'bags', 'shoes'];

// const [food, ...clothes] = shoppingCart

// console.log(clothes)

// const shoppingCart = ['bags', 'shoes', 'apples',];

// const [...clothes, food] = shoppingCart

// console.log(clothes)


// spread operator

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];


// const allArrays = [...arr1, ...arr2];

// console.log(allArrays)

// function sum (a,b,c ) {
//  return a + b + c
// }

// function sum (myArgs) {
//   console.log(myArgs)
//  return a + b + c
// }

// sum(3,4,5) //12

// sum(...arr1);


// const arr = []; //133

// arr.push('shehab')

// console.log(arr)

// const arr2 = ["ahmed", "Ali"]

// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i])
// }

// for (arr2Item of arr2) {
//   console.log(arr2Item)
// }


// function greetUser (userName, msg=`hello ${userName}`) {
//   return msg
// }

// console.log(greetUser("Shehab"));

// function functionOne (a,b,c) {
//   return a + b + c
// }

// const functionOne =  (a, b, c) =>  a + b + c

// // function functionTwo (a,b,c) {
// //   console.log(a,b,c)
// // }

// const functionTwo = (a,b,c) => {
//   console.log(a,b,c)
//   console.log('test')
// }

// const functionThree = a => `${a} is great`

// const functionFour = () => `arrow functions are great`

// const functionFive = () => ({name: 'Ahmed', age: 45})

// const functionSix = () =>  ({name: 'Ahmed', age: 45})


// setTimeout(  () => {

// }, 2000)

// const newArray  = [1,2,3].map(item => item + 1)
// const newArray  = [1,2,3].map(function (item) {
//   return item + 1
// } ) 


// const object = {
//   x: 1,
//   y: 2,
//   arr:[2, 3, 4],
//   evenNumbers: [],
//   getX: function () {
//     console.log(this)
//     return this.x
//   },
//   getEvenNumbers: function () {
//     this.arr.forEach(function (item) {
//       console.log(this)
//       if (item %2 == 0) {
//         this.evenNumbers.push(item)
//       }
//     }, this)
//     return this.evenNumbers
//   }
// }

// const object = {
//   x: 1,
//   y: 2,
//   arr:[2, 3, 4],
//   evenNumbers: [],
//   getX: function () {
//     console.log(this)
//     return this.x
//   },
//   getEvenNumbers: function () {
//     this.arr.forEach( (item) =>  {
//       if (item %2 == 0) {
//         this.evenNumbers.push(item)
//       }
//     })
//     return this.evenNumbers
//   }
// }

// console.log(object.getEvenNumbers());
// // console.log(object.getEvenNumbers());


// const myFunc = () => 'Hello';


// const myGreeting = myFunc();

// const [firstItem, ...secondItem] = [1,2]


// const drinks = ['tea', 'coffee'];

// const filterDrinks = drinks => drinks.filter(drink => drink.includes('t'))

// console.log(filterDrinks(drinks))

// const names = ["Shehab", "Ahmed"];

// const filterNames = xs => xs.filter(x => name.startsWith('S'))

// console.log(filterNames(names))
