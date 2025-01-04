function get(a,b){
    let getPromise = new Promise((resolve,reject)=>{
        if(a+b > 5)
        {
            resolve("greater then 5")
        }
        else
        {
            reject("not greate then 5")
        }
    })
    return getPromise
}

get(3,4)
.then((msg)=>{
    console.log("Answer : ",msg)
})
.catch((err)=>{
    console.log("Error : ",err)
})