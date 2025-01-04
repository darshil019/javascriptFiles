let arr = ['a','e','i','f','y']

let result = arr.filter((val,idx)=>{
    if (val == 'a' || val == 'e')
    {
        return arr
    }
})

console.log(result)