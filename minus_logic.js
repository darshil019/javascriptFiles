let arr = [-12,11,-13,-5,6,-7,5,-3,-6,0]

let a

for (let i = 0 ; i < arr.length - 1; i++)
{
    for(let j = i+1 ; j < arr.length ; j++)
    {
        if (arr[i] < arr[j])
        {
            a = arr[i]
            arr[i] = arr[j]
            arr[j] = a
        }
    }
}

console.log(arr)