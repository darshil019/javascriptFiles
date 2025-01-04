let arr = [2,3,4,11,6,7]
let n = arr.length
max = arr[0]
function que2(arr,n)
{
    for(let i = 0 ; i < n ; i++)
    {
        if(arr[i] > max)
        {
            max = arr[i]
        }
    }
    console.log(max)
}

que2(arr,n)