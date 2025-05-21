//USing promise that same task

let impObj = [{uName:"Darshil",rollNo:16}]

function addUser(newData,printUser){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!newData){
                reject()
            }
            else{
                console.log("ADDED DATA SUCCESSFULLY")
                resolve()
                impObj.push(newData)
            }
        },2000)
    })
    .then(()=>{
        printUser()
    })
    .catch(()=>{
        console.log("Error ! , Data Provided")
    })
}

function printUser(){
    setTimeout(()=>{
        impObj.forEach((val)=>{
            console.log(val)
        })
    },1000)
}

let newData = {uName:"Namra",rollNo:76}
addUser(newData,printUser)

// const users = [{ name: "Alice" }, { name: "Bob" }];

// function addUser(newUser) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             users.push(newUser);
//             resolve(); // Success
//         }, 2000);
//     });
// }

// function displayUsers() {
//     users.forEach((user) => {
//         console.log(user.name);
//     });
// }

// addUser({ name: "Charlie" })
//     .then(displayUsers)
//     .catch(err => console.error("Error:", err));
