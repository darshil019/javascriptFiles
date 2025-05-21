let arr = [1,3,4,5,6]
let val = 3

/*let idx = arr.findIndex((val1)=>{
    return val==val1
})*/

/*let idx = arr.indexOf(val)

if(idx>=0)
{
    arr.splice(idx,1)
    console.log(arr)
}
else
{
    console.log(arr)
}*/


    if(arr.includes(val))
    {
        arr.splice(arr.indexOf(val),1)
        console.log(arr)
    }
    else
    {
        console.log(arr)
    }

