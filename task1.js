let arr = [5,6,7,8,9,10]
let val = 6


for(let i = 0 ; i < arr.length ; i++)
{
    if(arr[i] == val)
    {
        arr.splice(arr.indexOf(arr[i]),1)
        console.log(arr)
    }
    else
    {
        console.log(arr)
    }
}
