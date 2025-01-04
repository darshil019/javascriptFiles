let arr = [3, 2, 4, 5, 9]
let a

for (let i = 0 ; i < arr.length-1 ; i++) 
{
    a = arr[i+1]
    arr[i+1] = arr[0]
    arr[0] = a
}

console.log(arr)