// alert('error')
// types o variables declarations
// var(outdated)
// let
// const

// types of data values
// strings - 'any word or sentence'
// numbers - 'just numbers'
// float - 2.5(any decimal number)
// boolean - true or false values
// undefined(a variable without data)
// BigInt - 537829098736789(with a long number)

// operators in java script
// Aritmetic, comparison operators, logical operators

// types of Aritmetic operators
// Addition +
// subtraction -
// Multiplication *
// division /
// modulus %
// Exponentation * *

// let u = 40
// let p = 30
// let h = 10
// let k = 3

// console.log(u + p - h)
// console.log(p / k)

// types of comparison operators
// Comparisons - ==, ===, !=, <, >, <=, >=
// let s = 40;
// let fine = true;
// let y = '40';

// console.log(s !==y)

// logical operators && , ||
// let g = 50
// let t = '50'
// let fine = true
// console.log(g === t && fine)

// conditional statement
// if statement excecute a specified blocks of  code
// if :
// else: a condition can't be put at the front of an else 
// let age = prompt('age')

// if(age > 16){
//     alert('Sorry,kids party')
// } else{
//     alert('welcome to the party bro')
// }


// else if :we use this when we have multiple conditions to be met.
// let age = prompt('How old are you')
// 5-12
// 13-17
// 18-40
// 41-60

// if(age >=5 && age<=12){
//     alert('You are welcome to the kids party')
// }
// else if(age >=13 && age<=17){
//     alert('You are welcome to the teens party')
// }else if(age >=18 && age<=40){
//     alert('you are welcome to the mills party')
// }else if(age >=41 && age<=60){
//     alert('You are welcome to the adults party')
// }else{
//     alert('you are way too old')
// }

// Function:
// let score = prompt('Input your score to see you grade.')
// 70 - 100 Scored A
// 65 - 69 Scored B
// 55 - 64 Scored C
// 45 - 54 Scored D
// 30 - 44 Scored E
// 0 - 29 Scored F

// if(score>= 70 && score<= 100){
//     alert('You scored an A')
// }
// else if(score >=65 && score <=69){
//     alert('You scored a B')
// }
// else if(score >=55 && score <=64){
//     alert('You scored a C, you can do better')
// }
// else if(score >=45 && score<= 54){
//     alert('You scored a D, Try harder')
// }
// else if(score >=30 && score<= 44){
//     alert('You scored an E, please come with your parents')
// }
// else if(score >= 0 && score <=29){
//     alert('You scored an F, come to the principals office on monday')
// }
// else{
//     alert('Invalid input')
// }

// let code = '*312#'
// let ussd = prompt('Enter ussd code')
// if(ussd === code){
//      let response0 = prompt('What service do you want?\n 1.Data \n 2.Airtime \n 3.Transfer')

// if(response0 === '1'){
//     let response1 = prompt('1.Select data plan\n 2.Transfer data \n 3.Gift from data balance')
//     if(response1 === '1'){
//     let response6 = prompt('1.1gb \n 2.2gb \n 3.3gb \n 4.4gb') 
//     if(response6 === '1','2','3','4'){
//         let response7 = alert('You have succesfully purchased this bundle')
//     }
//     }
// }
// if(response0 === '2'){
//     let response2 = prompt('Select network operator \n 1.MTN \n 2.AIRTEL \n 3.9MOBILE \n 4.GLO')
//     if(response2 ==='1','2','3','4'){
//         let response3 = prompt('Select amount\n 1.100 \n 2.200 \n 3.300 \n 4.400 \n 5.500')

//     if(response3 === '1','2','3','4','5'){
//         let response4 = alert('You have succesfully purchased airtime.')
//     }
//     }
// }
// if(response0 === '3'){
//     let response5 = prompt('Select bank')
// }
// }
// else{
//     alert('Invalid input')
// }

// Arrays

// let numbers = ['1','2','3','4','5']
// numbers.push(17)// -this is a method used to add another element at the end to the array.
// numbers.pop()// -this is a method used in removing an element at the end of an array.
// numbers.shift()// -this is to remove the first element of an array.
// numbers.unshift('0')// -this is used to add an element to the beginning of an array.
// numbers.splice(2, 1, '02')// -: Adds or removes elements from the array at a specific index.
// console.log(numbers)// -this is to make the arrays or data visible in ur console.
// console.log(numbers.length)// -this is a method used to check the lenght of an array.
// console.log(numbers.includes('2'))// -to know if the particular word or number number is present

// let food = ['cow','fowl','dog','goat','ram']
// console.log(food.length)
// console.log(food[4])// -this is to show the particular word of the number you input.
// console.log(`hello ${numbers}`)

// let games = 'asphalt'

// let games1 = Array.from(games)
// console.log(games1)

// sorting, reversing, join

// sort
// noa.sort((a,b)=>a - b)-ascending order
// numbers.sort((a,b)=> a - b);
// numbers.sort()
// console.log(numbers);

// reverse
// numbers.reverse()
// console.log(numbers);

// join
// let numberses = numbers.join(',')
// console.log(numberses)

// loops
// for loop & while loop

// let totalscore = 0;
// for(let r = 0; r <= 9; r++){
//     let score = (prompt('loop'));
//     totalscore+= score;9
// }
// DOM - DOCUMENT OBJECT MODEL
const h = document.getElementsByClassName('edehprank');
console.log(h);
const k = document.getElementById('cup');
console.log(k);
const y = document.querySelector('.bro');
console.log(y)
y.innerHTML = 'Hello world';

const hh2 = document.getElementById('ja')
console.log(hh2)
hh2.textContent = 'IM YOU ARENT I'

y.style.backgroundColor = "green"

let img = document.getElementById('my')
img.setAttribute("src", "jinx.jpg")

// let food = 'h1'
// console.log(k)