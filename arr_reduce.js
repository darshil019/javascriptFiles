let arr = [2,5,6]

let result = arr.reduce((acc,val)=>{
    return acc + (val*2)
},0)

console.log(result)