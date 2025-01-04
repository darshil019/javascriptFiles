let arr = ['hello','world','I']

let result = arr.filter((val,idx)=>{
    if (val.length >= 5)
    {
        return arr
    }
})

console.log(result)