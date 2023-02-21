const practice = '30 Days Of JavaScript'
console.log(practice);
console.log(practice.length);
console.log(practice.toUpperCase());
console.log(practice.toLowerCase());
console.log(practice.substring(0,2))
console.log(practice.slice(3))
console.log(practice.includes('Script'))
console.log(practice.split(''))
console.log(practice.split(' '))
const task = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(task.split(','))
console.log(practice.replace('Script', 'Python'))
console.log(practice.charAt(15))
console.log(practice.charCodeAt(11))
console.log(practice.indexOf('a'))
console.log(practice.lastIndexOf('a'))
 index = 'You cannot end a sentence with because because because is a conjunction'
console.log(index.indexOf('because'))
console.log(index.lastIndexOf('because'))
console.log(index.search('because'))
console.log(practice.trim())
console.log(practice.startsWith('30'))
console.log(practice.endsWith('Script'))
console.log(practice.match('a'))
const part1 = '30 Days of'
const part2 = ' javaScript'
console.log(part1.concat(part2))
console.log(practice.repeat('2'))

// Exercise level 2

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

const num = '10'
const myNum = 10
console.log(num == myNum)
const number = '9.81'
console.log( myNum == number)
const numberFloat = Math.ceil(number)
console.log(numberFloat == myNum)
const two = "python"
const three ="jargon"
console.log(two.endsWith('on'))
console.log(three.endsWith('on'))
const four= 'I hope this course is not full of jargon'
console.log(four.includes('jargon'))
const number1 =Math.floor(Math.random ()*101)
console.log(number1)
const number2 =Math.floor((Math.random()*51 )+50)
console.log(number2)
const number3 =Math.floor((Math.random()*256 ))
console.log(number3)
const ran="javaScript"
console.log(Math.random(ran))
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')
string='You cannot end a sentence with because because because is a conjunction'
 console.log(string.substring(31,54))

//  exercise level 3
count= 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(count.match(/Love/gi))
console.log(string.match(/because/gi))
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
 cleanSentence= sentence.replace(/[@#$%&;]/gi, "")
 console.log(cleanSentence)
concat='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(concat.match(/\d+/g))
