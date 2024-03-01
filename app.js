// // Assighnment # 9-10
// //Q#1
// var city= prompt("Enter your city name")
// if (city==="karachi"){
//     alert("City of lights")
// }
// else{
//     alert("Its not sure")
// } 
// //Q#2
// var gender= prompt("Enter your GENDER")
// if (gender==="male"){
//     alert("Good Morning Sir.")
// }
// else if (gender==="female"){
//     alert("Good Morning Ma'am.")
// }
// else{
//     alert("Its not sure")
// } 
// // Q#3
// var Signal = prompt("Enter Traffic signal color")
// if(Signal==="red"){
//     alert("Massage \n Must Stop")
// }
// else if(Signal==="yellow"){
//     alert("Massage \n Ready to move")
// }
// else if(Signal==="green"){
//     alert("Massage \n Move Now")
// }
// //Q#4
// var fuel = prompt("Enter Remaining Fuel in your car")
// if(fuel <= 0.25){
//     alert("Massage" + fuel +"liter \n Please Refill the fuel in your car")
// }
// if(fuel >= 10){
//     alert("Massage " + fuel + "liter \n Please Refill the fuel in your car")
// }
// //Q #5
// //a.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// //b. 
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// //c.
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// //d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// //e.
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// //f. 
// if("car" < "cat"){
//   alert("car is smaller than cat");
// }
// //Q#6
// var Total_Marks = 300
// var Marks_Obtained = 219
// var perc = Marks_Obtained / Total_Marks * 100
// // if(percentage >= 80 && percentage < 100){
// //    alert("A+")
// //}
// console.log=("MARKS-SHEET <br> Total_Marks = 300 <br> Marks_Obtained = 219 <br> Percentage ="+perc +"% <br> Remarks : You Need To Improve")
// Q#7
// var number = prompt("Shows any one number 1 to 10")
// if (number == 5){
//     alert("BINGO! correct answer")
// }
// else if( number < 5){
//    alert("Close Enogh To The Correct Answer")
// } 
// else if( number > 5){
//    alert("Close Enogh To The Correct Answer")
// }
// Q#8 
// var number = prompt("Shows any one number which is divisble by 3")
// if (number == 6){
//     alert("BINGO! correct answer")
// }
// else if( number < 5){
//    alert("Close Enogh To The Correct Answer")
// } 
// Q#9
// var number= +prompt("enter odd or even number")
// var number1= number+ ++number + ++number
// if (number == number1){
//     alert ("Its an even number")
// }
// Q#10
// var number = prompt("enter temperature")
// if (number>40){
//     alert("it too hot out side")
// }
// if (number>30){
//     alert("The weather today is Normal.")
// }
// if (number>20){
//     alert("today's weather is so cool")
// }
// if (number>10){
//     alert("OMG! today's weather is so cool")
// }

// Q#11

// var value1= +prompt("Enter any number")
// var value2= prompt("Enter any mathmathic symbol")
// var value3= +prompt("Enter any number")
// var number = value1 + value2 + value3
// document.write (number)

// chap 10

// 1.

// var city = "Karachi" 
// if (city = "Karachi"){ 
//     console.log("The City OF Lights") 
// }

// 2.
// var x = 20
// var y = 20
// var z = prompt("Enter z value")
// if(z=20){
//     document.write("YOUR ANSWER !!TRUE!!")
// }
// else{
//     document.write("YOUR ANSWER !!FALSE!!")
// }

//3.
// var code = +prompt("enter your city zipcode")
// if(code=10010){
//     alert("that's !!KARACHI!!")
// }
// else{
//     alert("I dont know ")

//4.
// var y=1
// var x = y + ++y + ++y
// alert("x = "+ x)

// chapter11
// 1. 
// var x = 6
// var a = 5
// if (a-x){
//     alert("its unequal")
// }
// else if (a===x){
//     alert("its equal")
// 2.
// var number= prompt("enter value")
// if (number >=80 ){
//     alert("its 689")
// }
// else{
//     alert (false)
// }
// 3.
// var number= prompt("enter value")
// if (number <=50){
//     alert( "x = "+number)
// }
// 4.
// var x = 40
// var z = prompt ("enter number")
// var number = x=z 
// if (number=40){
//     alert("CONGRATULATION")
// }

// Q#5
// var firstname=prompt("enter your name")
// if (firstname !== "Muhammad"){
//     alert("no match")
// }

// chap#12
// var x=50
// var y=prompt("enter value")
// if (x===y){
//     alert ("its equal")
// }
// else if(x!==y){
//     alert("not match")
// }

// var a=prompt("enter value")
// if (a === 10){
//     alert("right \n a is 10")
// }
// else if (a !== 10){
//     alert("wrong \n a is "+ a)
// }

var city= prompt("enter your city name")
if (city >= "karachi"){
    alert ("acknowledging it is Karachi.")
}
if (city >= "lahore"){
    alert ("acknowledging it is Lahore.")
}
else{
    alert ("dont knoe other city")
}