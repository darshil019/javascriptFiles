/* ✅ 1. Practice Exercise – Using Callbacks
🔧 Task:
Add a new user to an array after 2 seconds
Then print all users
*/

impObj = [{uName:"Darshil",rollNo:16}]

function printUser(){
    setTimeout(()=>{
        impObj.forEach((val)=>{
            console.log(val)
        })
    },1000)
}

function addUser(newData,callback){
    setTimeout(()=>{
        impObj.push(newData)
        console.log("DATA ADDED")
        callback()
    },2000)
}

newData = {uName:"Namra",rollNo:76}
addUser(newData,printUser)