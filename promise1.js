function get(a){
    let getPromise = new Promise((resolve,reject)=>{
        const obj = {
            1:{name : "darshil",age : 21},
            2:{name:"namra", age : 20}
        }
        if(obj[a])
        {
            resolve(obj[a])
        }
        else
        {
            reject("user is not exists")
        }
    })
    return getPromise
}

get(1)

.then((msg)=>{
    console.log("User Data : ",msg)
})
.catch((err)=>{
    console.log("Error : ",err)
})