for(let i = 1 ; i <= 20 ; i++)
{
    if(i%2==0)
    {
        console.log("even numbers : "+i)
    }
}
let arr = [2,3,4,5,6,7]
for(let i = 0 ; i <= arr.length-1 ; i++)
{
    console.log(arr[i])
}

for(let val of arr)
{
    if(val%2==0)
    {
        console.log("even numbers : "+val)
    }
}
let arr1 = [2,3,4,5,6,7,12]

for(let val in arr1)
    {
        if(val%3==0 && val%4==0)
        {
            console.log(val)
        }
    }
