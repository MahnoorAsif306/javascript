// //Problem 1 (Object property access)
const car = {
    Model:"Lamborghini",
    Year:1963,
    Baseprice: 3000000,
    TopSpeed: "190-mph",
    Engine:" Twin-TurboV8",
    Power: "641-hp-6000-rpm",
}
console.log(car.Model);

// //Problem 2 ()
let numbers = [2,4,6,8,10]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// // //Problem 3 (Array sum function)
function sum(a,b,c,d) {
    return [a+b+c+d]
}
let nums =[3+5+8+16]
console.log(nums);

// //Problem 4 (Date manipulation)
let right = new Date()
let currentYear = right.getFullYear()
console.log("Current year",currentYear);

// //  //Problem 5 (If-Else statement)
const IsPositive = (num)=>{
if(num>0){
    return "Positive"
}
if(num<0){
    return "Negative"
}
else{
    return "Zero"
}
}
let value =IsPositive(100)
 console.log(value);
 
// //  Problem 6 (While Loop)
 let n = 6
 let i = 1
while (i<n) {
    console.log(i);
    i++
}

// //Problem 10 ( Object Methods )
const calculator = (a,b)=>{
return [a+b, b-a, a/b, a*b ]
}
let math = calculator (2,2)
console.log(math);


// //Problem 11 (Nested if-Else)
let num = prompt ("Enter your marks")
const result = ()=>{
    if(n>90){
        return "A"
    }else if(n<90 && n>=80){
        return "B"
    }
    else if (n<80 && n>=70) {
        return "C"
    } else {
        return "F"
    }
    }
     console.log(result())

// //    //Problem 12 ( Array Length)
   let array = [2,3,6,4,9,1,0]
console.log(array.length);


//problem 14 (date coparison)
function isEarlier(date1,date2) {
    let firstDate = new Date (date1)
    let secondDate = new Date (date2)
    return  firstDate > secondDate
}
 let date = isEarlier ("24 may", "21 may")
console.log(date);
// //problem 13  (For loop with break)
let number = [1,2,3,4,5,6]
for (let i = 0; i < number.length - 1 ; i++) {
    console.log(numbers[i]);
}
//problem 15  (Switch Statement)
////
//  //Problem 7 (Math Operations)
// /////
//  Problem 8 (Array filtering)
// //Problem 9 (Function with Default Parameters)
// /////
