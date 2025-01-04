const arrobj = [{Name:"darshil",age:22},{Name:"dhruv",age:21}];


function start(){
    setTimeout(()=>
    {
        arrobj.forEach((data)=>
        {
            console.log(data) 
        }) 
    },5000)
}

function pushh(newdata,callback){
    setTimeout(()=>{
        arrobj.push(newdata)
        callback()
    },6000)
}


pushh({Name:"namra",age:21},start)





