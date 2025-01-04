function add(a,b,addCompleted)
{
    setTimeout(()=>{
        console.log(a+b)
        addCompleted()
    },2000)
    
}

function addCompleted()
{
    console.log("addCompleted")
}

add(2,3,addCompleted)