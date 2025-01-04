str = "ddadadac"

let arr = []
let arr1 = []
let arr2 = []
arr = str.split('')

console.log(arr)

for(let i = 0 ; i < arr.length ; i++)
{
    for(let j = i + 1 ; j < arr.length-1 ; j++)
    {
        if(arr[i]==arr[j])
        {
            arr1.push(arr[i])
       
        }
        else
        {
            arr2.push(arr[i])
        }
    }
}
console.log(arr1)
console.log(arr2)
/*let arr1 = []
let arr2 = []

let result = arr.filter((val)=>{
    if(!arr1.includes(val))
    {
        arr1.push(val)
    }
    else
    {
        arr2.push(val)
    }
    
})

console.log(arr1)
console.log(arr2)*/

