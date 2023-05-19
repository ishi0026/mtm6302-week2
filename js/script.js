//console.log("JavaScript is included!")
/*
the above list of code is commented out using a single line comment +
/ or command + /
this comment is a multiple comment, shortcut is shift + alt + A or shift +option + A
*/


let myName = "Yuka"
console.log(myName)

myName = "Yuka I"
console.log(myName)//let can reassign value

const address ="Earth"
console.log(address)
/*
address = "Earth, Milkyway"
console.log(address)//const can not reassign value
 */
let myProfession
console.log(myProfession)

myProfession = "Student"
console.log(myProfession)

const myScore = [52, 78, 90]
console.log(myScore[1])

//not confusing map and object
//not confusing sets and arrays

let num = 10
num ++
console.log(num)

// let num = 10
// num += 1
// console.log(num) // ++ & += same thing


console.log(num == "11")//== check data, === strictly check data type
console.log(num > 90)
console.log(num != 90)
console.log(!(num != 90))// first ! erase the inside of ()

console.log(num >= 7 && num != "12" && myScore[0] < 40 )
console.log(num >= 7 || num != 12)

console.log(num.toFixed(2))

numA = "10"
numB = 5
numC = 6.9
console.log(numA + numB)
console.log(parseInt(numA) + numB)
console.log(numA + numC)
console.log(numA + parseInt(numC))
console.log(numA + parseFloat(numC))
console.log(numC.toPrecision(3))


const pets = 2;
const pet1Name = "Jack"
const pet2Name = "Ron"
console.log("I have " + pets + " dogs," + pet1Name +" & "+ pet2Name)
console.log(`I have ${pets} dogs,${pet1Name} & ${pet2Name}`)

