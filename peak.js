let array = [10, 20, 15, 2, 23, 90, 67]

for (let i = 0 ; i < array.length ; i++)
{
    for (let j = i + 1 ; j < array.length ; j++)
    {
        if (array[i] > array[j] && array[i] > array[i-1])
        {
            console.log("element "+array[i]+"is greater then both"+array[j]+array[i-1] )
        }
    }
}