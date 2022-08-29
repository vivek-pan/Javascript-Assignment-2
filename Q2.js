//2. Write a function using switch case to find the grade of a student based on marks obtained

function grade(marks){

    switch (true) {
        case marks>90&&marks<=100:
            return "S grade";
            break;

        case marks>80&&marks<=90:
            return "A grade";
            break;
        
        case marks>70&&marks<=80:
            return "B grade";
            break;
            
        case marks>60&&marks<=70:
            return "C grade";
            break;

        case marks>50&&marks<=60:
            return "D grade";
            break;

        case marks>40&&marks<=50:
            return "E grade";
            break;
            
        case marks>0&&marks<=40:
            return "F grade";
            break;    
        
        default:
            return "Invalid marks";
            break;
    }
}

const prompt = require('prompt-sync')();

var marks = prompt("Enter Marks ");

let result = grade(marks);

console.log(result);