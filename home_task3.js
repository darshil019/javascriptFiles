let arr = [1,5,7,9,12,10,6]

const task1 = arr.forEach((val,idx)=>{
    if (val%2==0)
    {
        console.log(val)
    }
    else
    {
        console.log(val+2)
    }
})

task1
