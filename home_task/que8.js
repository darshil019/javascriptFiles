let arr = [4,8,16,9]
let arr1 = []
let square = 1
let sum = 0
let sum1 = 0

console.log("array : "+arr)

for (let i = 0 ; i < arr.length ; i++)
{
   
    square = arr[i]*arr[i]
    console.log("square of array : "+square)
    sum = sum + square
}
console.log("sum of square array : "+sum)
