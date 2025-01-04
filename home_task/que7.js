let arr = [7, 10, 5, 12, 17, 20]
let mean = 0
let median = 0
sum = 0
n = arr.length

console.log("n is : "+n)

for(let i = 0 ; i < n ; i++)
{
    sum = sum + arr[i] / n
}

console.log("Mean : "+sum)

if(n%2==0)
{
    median = n + 1 / 2
}
else
{
    median = ((n/2) + (n + 1 / 2))/2
}

console.log("Median : "+median)
