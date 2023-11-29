// console.log('javascript running')

// var and let and const
// let local, var global

// function testFunction() {

//     for(var i = 0; i < 10; i++) {
//         console.log(i)
//     }
//     console.log('outside: ', i)
// }

// testFunction();

// const k = 50
// k = 70
// console.log(k)

// const person = {
//     name: "John James",
//     age:20,
//     walk: function() {
//         console.log('walking...')
//     }
// }

// person.walk();
// console.log(person.name)
// console.log(person.age)
// console.log(person['name'])

// let targetMember = 'age'

// console.log(person[targetMember])

// const firstName = 'John'
// const lastName = 'Doe'
// const age = 20
// const ageIncrement = 5

// const fullName = firstName + " P." + lastName  + " is " + age + ageIncrement + ' years old'
// const fullName = firstName + " P." + lastName  + " is " + (age + ageIncrement) + ' years old'

// template literals
// const fullName = `${firstName} P. ${lastName} is ${age+ageIncrement} years old`
// console.log(fullName)

// ternary operator
const a = 7
const b =2
const color = 'green'
const someVar =  color === 'green' && 0 && console.log('it is green') && 'hello'

// console.log(someVar)

// truthy
// string
// non-zero number
// true
// any object {}
// []

// falsy
// ""
// 0
// false
// null
// undefined
// NaN

// this keyword

// "use strict"

// const person = {
//     name: "John Doe",
//     walk() {
//         console.log(this)
//     }
// }

// person.walk();
// const walk = person.walk;
// walk();

// const myWalk = person.walk.bind(person)
// myWalk();

// arrow function
// function squareNum(number) {
//     return number * number
// }

const squareNum = (number) => number * number

// console.log(squareNum(5))

// const person = {
//     name: "James",
//     talk() {
//         // var self = this
//         // setTimeout(function() {
//         //     console.log(self.name)
//         // }, 1000)
//         setTimeout(() =>
//             console.log(this.name)
//         , 1000)
//     }
// }

// person.talk()

// array

// const tags = ['tag1', 'tag2', 'tag3']

// const updateTags = tags.filter(function(tag) {
//     return tag.includes('1')
// })
// const updateTags = tags.filter((tag) => tag.includes('1'))

// console.log(updateTags)

// const tags = [
//     {id: 1, value: "tag1"},
//     {id: 2, value: "tag2"},
//     {id: 3, value: "tag3"},
// ]

// const deleteTagById = (id) => tags.filter((tag) => tag.id !== id)

// console.log(deleteTagById(2))

// const tags = ['tag1', 'tag2', 'tag3']

// // const updatedTags = tags.map((tag) => `my tag: ${tag}`)
// // const updatedTags = tags.map((tag) => `<li>${tag}</li>`)
// const updatedTags = tags.map((tag, index) => 
// index % 2 === 0 ? `<li>${tag}</li>` :`black`
// )

// console.log(updatedTags)

// destructuring

const address = {
    city: 'Pasig',
    region: 'NCR',
    street: 'Springs St.'
}

// console.log(address.city)
// console.log(address.region)
// console.log(address.street)

// const { region } = address;

// const { city:cty, region:rgn, street } = address;

// console.log(cty)
// console.log(rgn)
// console.log(street)


// const logAddress = (address) => {
//     const {city, region, street} = address
//     console.log(`My city is: ${city}`)
//     console.log(`My region is: ${region}`)
//     console.log(`My street is: ${street}`)
// }

// const logAddress = ({city, region, street}) => {
//     console.log(`My city is: ${city}`)
//     console.log(`My region is: ${region}`)
//     console.log(`My street is: ${street}`)
// }

// logAddress(address)

// spread operator
const numbers = [1, 2, 3]
const numbersAgain = [4, 5, 6]

// const combine = numbers + numbersAgain;
// const combine = numbers.concat(numbersAgain);
// const combine = [1, ...numbersAgain, 123456, ...numbers, 7, 8];

// const copyNumbers = numbers
// copyNumbers[1] = 8

// const copyNumbers2 = [...numbers]
// copyNumbers2[1] = 7

// console.log(copyNumbers2)
// console.log(numbers)

// spread operator on object

const person = {
    id: 3,
    name: 'Jake'
}

const personDetails = {
    age:21
}

// const combiperson = {...person, ...personDetails}
// console.log(combiperson)

// const combiperson = {...person, location:'Sampaloc', ...personDetails}
// // // console.log(combiperson)

// const logPerson = ({id, age, ...restProperties}) => {
//     // logic
//     console.log(id)
//     console.log(restProperties)
// }

// logPerson(combiperson)

class Person {
    constructor(name) {
        this.name = name
    }
    walk() {
        console.log(`${this.name} is walking`)
    }
}

const myPerson = new Person("James")
// myPerson.walk()

class Trainer extends Person {
    constructor(name, topic) {
        super(name)
        this.topic = topic
    }
    train() {
        console.log(`${this.name} is training ${this.topic}`)
    }
}

// const trainor = new Trainer("Jose", "react")
// trainor.train()


// named export default export

// export const name = "Jake Joson";
// export const name2 = "Jhake Joson";
// export const name3 = "Jake Jhoson";

// export default "Default Jake Joson"

export function login() {
    console.log('export logging in...')
}
const register = () => {
    console.log('export register...')
}
export function logout() {
    console.log('export logging out...')
}

export default register