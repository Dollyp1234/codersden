import { countries } from "./country.js";
import { webTechs } from "./web_tech.js";
console.log(countries, webTechs);

// First remove all the punctuations and change the string to array and count the number of words in the array
const text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python." 
let newText = text.replace(/[.,]/g, '');
const arr = newText.split(" ");
console.log(arr);
console.log(arr.length);

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
  shoppingCart.unshift('meat');
 console.log(shoppingCart);
 shoppingCart.pop()
 console.log(shoppingCart);
 shoppingCart.push('sugar')
 console.log(shoppingCart);
 shoppingCart.splice(3, 1, "Green Tea");
 console.log(shoppingCart);

//  In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
  if( countries.includes('Ethiopia')){
    console.log('ETHOPIA')
  }
  else{
    console.log(countries.push('Ethopia'))
  }

//   In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess')
}
else{
    webTechs.push('Sass');
    console.log(webTechs);
}

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack);







// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
 let arrAge = ages.sort();
 let arrAgeLength= ages.length
 console.log(arrAgeLength);
console.log(arrAge);
   let max = arrAge[0];
  let min = arrAge[0];
 for( let i=0; i<ages.length; i++){
    if(arrAge[i] > max){
        max = arrAge[i];
    }
    if(arrAge[i] < min){
        min = arrAge[i];
    }
 }
 console.log('Maximum age ' + max);
 console.log('Minmum age ' + min);

//  Find the median age(one middle item or two middle items divided by two)
  let medianAge = Math.floor(arrAge.length / 2);
if (arrAge.length % 2 !== 0) {
  midAgeOdd = arrAge[medianAge];
  console.log(`${midAgeOdd} is the median age`);
} 
else {
   let midAgeEven = (arrAge[medianAge] + arrAge[medianAge - 1]) / 2;
  console.log(`${midAgeEven} is the median age`);
}

// Find the average age(all items divided by number of items)

var total = 0;
console.log(total);
for (let i = 0; i<arrAgeLength; i++){
    total += ages[i]
}
console.log(total);
var average = total/arrAgeLength;
console.log("The average is: " +average);

// Find the range of the ages(max minus min)
var rangeAge = max - min;
console.log("The range is: " +rangeAge);

// Compare the value of (min - average) and (max - average), use abs() method 
var minAVerage = Math.abs(min - average);
var maxAverage = Math.abs(max - average);
// console.log(minAVerage);
// console.log(maxAverage);
if(minAVerage > maxAverage){
    console.log('Minimum value is greater than Maximum value')
}
else{
    console.log('Minimum value is less than Maximum value')
}

// 1.Slice the first ten countries from the countries array
 var firstTen = countries.slice(0,10)
 var countryLength = countries.length
console.log(firstTen);

// Find the middle country(ies) in the countries array
let middleCountry = Math.floor(countryLength / 2);
if (countryLength % 2 !== 0) {
   let midCountryOdd = countries[middleCountry];
  console.log(`${midCountryOdd} is  the middle country`);
} 
else {
   let midCountryEven = (countries[middleCountry] + " " + countries[middleCountry - 1]) / 2;
  console.log(`${midCountryEven} are the middle countries`);
}

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half

 let midCountryLength = Math.ceil(countryLength/2)
if(countryLength % 2 == 0){
    evenFirstHalf = countries.slice(0, midCountryLength)
    console.log(evenFirstHalf);
    evenSecondHalf = countries.slice(midCountryLength)
    console.log(evenSecondHalf);
}
else{
   let  oddfirstHalf = countries.slice(0, midCountryLength + 0)
    console.log(oddfirstHalf);
   let  oddSecondHalf = countries.slice(midCountryLength + 0)
    console.log(oddSecondHalf);
}


