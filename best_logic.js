let arr = [3, 2, 4, 5, 9]

let last_elemet = arr[arr.length-1];

for (i = arr.length-1 ; i > 0 ; i--)
{
    arr[i] = arr[i-1]
}
arr[0] = last_elemet
console.log(arr)

