//1. Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene

function triangle(a, b, c){
    if(a==b && a==c ){
        return "Equilateral";
    }

    else if(a == b || b == c || c == a){
        return "Isosceles";
    }

    else return "Scalene";
}

const prompt = require('prompt-sync')();

var a = prompt("Enter length of side a ");
var b = prompt("Enter length of side b ");
var c = prompt("Enter length of side c ");

let result = triangle(a, b, c);

console.log("Given triangle is "+result);

