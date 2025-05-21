//Async and Await function

let impObj = [{uName:"Darshil",rollNo:16}]


function addUser(newData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(newData){
                impObj.push(newData)
                console.log("ADDED")
                resolve()
            }
            else{
                reject()
            }
        },5000)
    })
}

function printUser(){
    setTimeout(()=>{
        impObj.forEach((val)=>{
            console.log(val)
        })
    },1000)
}


async function main(){
    let newData = {uName:"Namra",rollNo:76}
    // await addUser(newData)
    // .then(()=>{
    //     printUser()
    // })
    // .catch(()=>{
    //     console.log("Error")
    // })
    // do not use .then and .catch when async / await used , use try/catch
    
    try{
        await addUser(newData)
        printUser()
    }
    catch(err){
        console.log("Error",err)
    }
}

main()