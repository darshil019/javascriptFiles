let arr = [1, 2, 4, 6 , 7, 8]
let arr1 = []
let j = 0

arr.sort()

for (let i = 0 ; i < arr.length ; i++)
{
    j = j + 1
    if(arr[i] != j)
    {
        console.log("between 1 to "+(arr.length+1)+" is "+j)
        j = j + 1
    }
    if(arr[i] === j)
    {
        arr1.push(arr[i])
    }
}
console.log("transfer present element to another array : "+arr1)

