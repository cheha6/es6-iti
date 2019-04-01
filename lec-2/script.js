// // const type = 'anything'
// // const color= 'red'

// // const newobj = {
// //   type,
// //   color
// // }

// // console.log(newobj)

// const obj= {
//   prop1: 'sad',
//   fun1 () {
//     return this.prop1
//   }
// }

// obj.fun1()

// const mySet = new Set([1,2,3,4, 1,2,3]);

// mySet.add(12)

// console.log(mySet)

// mySet.delete(4)
// console.log(mySet)

// console.log(mySet.size)

// mySet.clear()
// console.log(mySet)

// const mySet = new Set([1,2,3,4, 1,2,3]);

// const myarray = [...mySet]

// console.log(myarray)

// const a = 'myString'

// const myarray2 = [...a]

// console.log(myarray2)

// const key = `key ${1+4+ 7}`

// const param = 'hello'

// const obj = {
//   param
// }
// const obj2 = {
//   [param] : 'sadsa'
// }

// console.log(obj)

// const arr = [1,2,3,4]

// const newArray = arr.map( (item, index, array) =>
// {
//   console.log({item, index, array})
//   return  item * 2
// } )

// // console.log(newArray)

// const evenNumbers = arr.filter((item) => item % 2 === 0 );

// console.log(evenNumbers)

// // const newarr = arr.forEach()

// const arr = [[1,2],[3,4],[5,6]]

// // [1,2,3,4,5,6]

// // const flttenedArray = arr.map(item => {

// //   return
// // }, [])

// // const result = arr.reduce((acc, item) => {
// //   acc =  [...acc, ...item]
// //   return acc
// // }, [])

// const names = [
//   { name: "Shehab", gender: "male", id: 1 },
//   { name: "Ahmed", gender: "male", id: 2 },
//   { name: "Mona", gender: "female", id: 3 },
//   { name: "Wael", gender: "male", id: 4 },
//   { name: "Dina", gender: "female", id: 5 }
// ];

// const obj = {name: 'Shehab', gender: 'male', id: 1};

// let y = obj;

// y.age = 12

// const y = { ...obj,
//            age: 12 
//           };

// console.log(y);

// const newNames = names
//   .map(item => ({
//     ...item,
//     name_id: `${item.name}_${item.id}`
//   }))
//   .filter(item => item.gender === "female");

// console.log(newNames);

// // console.log(result)

// const names = ["Ahmed", "Mohamed", "Ali", "Ahmed", "Ahmed"]

// const requuired11 = {Ahmed: 3, Mohamed: 1, Ali: 1}

// const obj = names.reduce((acc, item) => {
//   const accKeys = Object.keys(acc)
//   if (accKeys.includes(item)) {
//     acc[item] = acc[item] + 1
//   } else {
//     acc[item] =  1
//   }
//   acc[item] =  acc[item] ?  acc[item] + 1: 1;
//   return acc
// }, {})

// console.log(obj)

// const newObj = {}

// newObj['name'] = 'shehab'




// class Person {
//   constructor (fn = "John", ln= "Doe") {
//     this._firstName = fn
//     this._lastName = ln
//   }

//   get fullName () {
//     return `${this._firstName} ${this._lastName}`
//   }

//   set firstName (name) {
//     if(typeof(name) === 'string') {
//       this._firstName = name;
//     } 
//   }


//   getFullName () {
//     return `${this._firstName} ${this._lastName}`
//   }
// }
// const person1 = new Person()

// person1.firstName = 23 


// console.log(person1)


// person1.getFullName()
// person1.fullName



  // class Animal {
  //   constructor ( a1 = "lion", color = "yellow") {
  //     this.type = a1;
  //     Animal.count++
  //   }

  //   static count () {
  //     return Animal.count;
  //   }
  // }

  // class ChildAnimal extends Animal{
  //   constructor(type) {

  //   }
  // }

  // const newAnimal = new ChildAnimal('hello')


// console.log(new)

// Animal.count = 0

// console.log(Animal.count)

// const animal = new Animal('cat', 'red', 3)

// console.log(Animal.count)


// const data = fetch('https://randomuser.me/api/').then((resp) => {
//  return resp.json()
// }).then(dt => {
//   console.log(dt)
// })





// const returnOne = async () => {
//   // const ahemd = await returnOne()
//   return 1
// }

// const data = async  () {
  // const a =  await data
//   return /////
// }



// console.log(returnOne())




const data = fetch('https://randomuser.me/api/').then((resp) => {
 return resp.json()
}).then(dt => {
  console.log(dt)
})

const fetchData = async () => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json()
  const name = data[0]
  const githbavvcount  = await fetch('', name)
  return data
} 

const data = fetchData();

