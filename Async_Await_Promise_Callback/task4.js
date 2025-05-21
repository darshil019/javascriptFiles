let impObj = [{uName:"Darshil",rollNo:16}]


function addUser(newData){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!newData){
                reject()
            }
            else{
                impObj.push(newData)
                console.log("ADDED")
                resolve()
            }
        },3000)
    })

}

function removeUser(pos){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!pos && pos > impObj.length-1 && pos < 0){
                reject()
            }
            else{
                impObj.splice(pos,1)
                console.log("REMOVED POSITION AT : ",pos)
                resolve()
            }
        },3000) 
    })
   
}

function viewUser(){
    setTimeout(()=>{
        impObj.forEach((val)=>{
            console.log(val)
        })
    },1000)
}

async function main(){
    try{
        let newData1 = {uName:"Namra",rollNo:76}
        let newData2 = {uName:"Arpan",rollNo:106}

        await addUser(newData1)
        await addUser(newData2)
        await removeUser(1)

        viewUser()
    }
    catch(err){
        console.log("ERROR",err)
    }
}

main()