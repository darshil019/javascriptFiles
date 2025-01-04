let arr = [1,0,2,3,4,0,0,5,6,-1]

console.log(arr)


for (let i = 0 ; i < arr.length - 1 ; i++)
{
    for(let j = i + 1 ; j < arr.length ; j++)
    {
        if(arr[i] >= 0 && arr[j] >=0)
        {
            if (arr[i] < arr[j])
            {
                a = arr[i]
                arr[i] = arr[j]
                arr[j] = a
            }
        }
        else
        {
            if (arr[i] > arr[j])
            {
                a = arr[i]
                arr[i] = arr[j]
                arr[j] = a
            }
        }
    }
}

console.log(arr)