let arr = [1,2,4]

let arr1 = [...arr,2,1,7]
let arr2 = []

console.log("Merge two array : "+arr1)

let result = arr1.filter((val)=>{
    if(!arr2.includes(val))
    {
        arr2.push(val)
    }
})

console.log("After remove duplicate element : "+arr2)