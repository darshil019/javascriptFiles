let arr = [1,2,3,4]
let arr1 = [...arr,3,4,5,6]

console.log(arr1)

let result = arr1.filter((val,idx)=>{
    if(arr1.indexOf(val) === idx)
    {
        return true
    }
    return false
})

console.log(result)