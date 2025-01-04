const arrobj = [{Name:"darshil",age:22},{Name:"dhruv",age:21}];


/*arrobj.forEach((data)=>{
    console.log(data)
})*/

function start(){
    setTimeout(()=>
    {
        arrobj.forEach((data)=>
        {
            console.log(data) 
        }) 
    },5000)
}

function pushh(newdata){
    setTimeout(()=>{
        arrobj.push(newdata)
    },6000)
}

start()
pushh({Name:"namra",age:21})





