let arr = [5,-2,-1,4,7,28]

let ans = arr.filter((val,idx)=>{
    if (val % 4 == 0 && val % 7 == 0)
    {
        return val;
    }
})

let ans1 = arr.find((val,idx)=>{
    return val > 0
})

console.log(ans);
console.log(ans1);
console.log(arr.indexOf(-1));
console.log(arr.includes(51));