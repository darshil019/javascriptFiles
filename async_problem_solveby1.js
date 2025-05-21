const arrobj = [{Name:"darshil",age:22},{Name:"dhruv",age:21}];


function start(){
    setTimeout(()=>
    {
        arrobj.forEach((data)=>
        {
            console.log(data) 
        }) 
    },8000)
}

function pushh(newdata,callback){
    setTimeout(()=>{
        arrobj.push(newdata)
        console.log("DATA ADDED")
        callback()
    },6000)
}


pushh({Name:"namra",age:21},start)





