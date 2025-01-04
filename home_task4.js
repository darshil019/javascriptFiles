let arr = [5,2,7,9,12,10,6]

let max = arr[0]
let min = arr[0]

for (let i = 0 ; i < arr.length ; i++)
{
    if(arr[i]>max)
    {
        max = arr[i]
    }
}
console.log("maximum element : "+max)

for (let i = 0 ; i < arr.length ; i++)
{
    if(arr[i]<min)
    {
        min = arr[i]
    }
}
console.log("minimum element : "+min)

const task1 = arr.map((val,idx)=>{
    if (val > max)
    {
        max = val
    }
    return max
})

console.log("Maximum number using map : "+task1[task1.length-1])

const task2 = arr.map((val,idx)=>{
    if (val < min)
    {
        min = val
    }
    return min
})

console.log("Minimum number using map : "+task2[task2.length-1])
