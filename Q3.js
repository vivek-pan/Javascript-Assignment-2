//3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

function sumMultipules3And5(n){
    let result1 = 0;
    let result2 = 0;

    let i=0,j=0;

    while(3*i<n)
    {
        result1 += 3*i;
        i++;
    }

    while(5*j<n)
    {
        result2 += 5*j;
        j++;
    }

    return result = result1+result2;
}

result = sumMultipules3And5(1000);
console.log(result)