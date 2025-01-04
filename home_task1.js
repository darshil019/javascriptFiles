let arr = [1,5,7,9,12,10,6]
let sum
sum = 0
const t = arr.map((val,idx)=>{
    
    sum = sum + val

    return sum;
})
console.log(t[t.length-1])
