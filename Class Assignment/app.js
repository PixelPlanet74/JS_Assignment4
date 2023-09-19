// ARRAYS & LOOPS

// Q no:1
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }

// Q no:2
// var table = +prompt("Enter a number to find its table")
// var tableLength = +prompt("Enter table Length")
// for (var i = 1; i <= tableLength; i++) {
//     console.log(table + " x " + i + " = " + table * i)
// }

// Q no:3
// var fruits = ["Banana", "Mango", "Apple", "Orange", "Grapes"]
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// document.write("<br>");
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>")
// }

// Q no:4
// document.write("<h4>Counting:</h4>");
// for(var i = 1;i<=15;i++){
//     document.write(i + ", ")
// }
// document.write("<h4>Reverse Counting:</h4>");
// for(var j = 10;j>0;j--){
//     document.write(j + ", ")
// }
// document.write("<h4>Even:</h4>");
// for(var k = 2;k<=20;k+2){
//     document.write(k + ", ")
// }
// document.write("<h4>Odd:</h4>");
// for(var l = 1;l<20;l+2){
//     document.write(l + ", ")
// }
// document.write("<h4>Series:</h4>");
// for(var m = 2;m<=20;m+2){
//     document.write(m + "k, ")
// }

// Q no:5
// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
// var user_input = prompt("Enter an item to search for:");
// let found = false;
// for (let i = 0; i < bakery.length; i++) {
//     if (user_input === bakery[i]) { 
//         found = true;
//         var j = i;
//         break;
//     }
// }
// if (found) {
//     document.write(user_input + " is available at index " + j + " in our Bakery");
// }
// else {
//     document.write("We are sorry. " + user_input + " is not available in our Bakery.");
// }

// Q no:6
// var A = [24, 53, 78, 91, 12];
// var largest = A[0];
// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// document.write("Array items: " + A + "<br>");
// document.write("The largest number is " + largest);

// Q no:7
// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];
// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }
// document.write("Array items: " + A + "<br>");
// document.write("The smallest number is " + smallest);

// Q no:8
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write("<b>" + i + ",</b>");
//     }
// }





