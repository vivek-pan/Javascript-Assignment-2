// 4. Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).

function factorial(num){
    let fact =1;

    for(i=1;i<=num;i++){
    fact = fact*i;
    }
    return fact;
}

function factorialPrime(n1, n2){
    for (let i = n1; i <= n2; i++) {
        let flag = 0;
    
        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
    
        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {

            result = factorial(i);
            console.log(i + " : " + result);
        }
    }

}

let n1 = 0, n2 = 100;

console.log("\nThe factorial of Prime NUmbers between " + n1 + " - " + n2 + " is\n");
factorialPrime(n1,n2);