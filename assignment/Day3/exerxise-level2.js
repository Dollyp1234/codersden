// Exercise level 2 
 base = prompt("Enter base" )
 height = prompt("Enter height")
 area = (0.5 *base * height)
 console.log("the area of a triangle is "+ area)

 sidea =prompt("Enter side a")
 sideb =prompt("Enter side b")
 sidec =prompt("Enter side c",)
 perimeter = parseInt(sidea) + parseInt(sideb) + parseInt(sidec);
 console.log("The perimeter of a triangle is " + perimeter);

length = prompt("Enter Length")
 width = prompt("Enter width")
 lengths = parseInt(length) 
 widths = parseInt(width)
 area = lengths * widths
 perimeters = 2*(lengths + widths)
 console.log("The area of a rectangle is " + area + " and the perimeter of a rectangle is "+ perimeters);

radius = prompt("Enter radius")
pi = 3.14
r = parseInt(radius)
area =  pi * r * r 
circumference = 2 * pi * r
console.log("The area of a circle is " + area + " and the circumference of a circle is " + circumference);

hours = prompt("enter hours")
rate = prompt("enter rate per hour")
earning = parseInt(hours) * parseInt(rate);
console.log("Your weekly earning is " + earning)

Name = prompt("please enter your name")
if(Name.length > 7){
    console.log("Your name is long")
} 
else {
    console.log("Your name is short ")
}

 firstName = 'Asabeneh'
 lastName = 'Yetayeh'

 if (firstName.length > lastName.length){
    console.log("Your first name, Asabeneh is longer than your family name, Yetayeh")

 }
 else {
    console.log("nothing")
 }
 myAge = 250
 yourAge = 25
 diffAge = myAge - yourAge
console.log("I am " + diffAge + " years older than You")

// userAge = prompt("Enter birth Year")
// console.log(userAge);
// if(userAge < 2005){
//     console.log()
// }

const now = new Date()
console.log(now)
const year = now.getFullYear() 
const month = now.getMonth() + 1
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes() 

console.log(`${year}-0${month}-0${date} 0${hours}:${minutes}`)
console.log(`0${date}-0${month}-${year} 0${hours}:${minutes}`)
console.log(`0${date}/0${month}/${year} 0${hours}:${minutes}`)


// Exercise level 3
const day = new Date()
let years = day.getFullYear()
let months = day.getMonth()
let dates = day.getDate()
let hour = day.getHours()
let minute = day.getMinutes()
console.log(`${years}-0${months}-0${dates} 0${hour}:${minute}`)



 