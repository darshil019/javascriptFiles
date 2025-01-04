let arr = [2, 3, 1, 4, 3, 2, 7, 11, 12]
let arr1 = [];

function removeDuplicates(arr)
{
    return arr.filter((val,idx) => arr.indexOf(val) === idx);
}
console.log(removeDuplicates(arr));

for (let val of arr)
{
    if(!arr1.includes(val))
    {
        arr1.push(val);
    }
}

console.log(arr1);
