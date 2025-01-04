let arr = [5,17,16,2,16,3]
let a = 1
let result = arr.filter((val)=>{
    if(val < 10)
    {
        a = val * a
        
        return arr
    }
})
console.log(a)
console.log(result)