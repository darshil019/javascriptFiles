s = 0
e = 0
function sum(...num)
{

    for (let i = 0 ; i < num.length ; i++)
    {
        s = s + num[i]
    }

    let ans = num.filter((val,idx)=>{
        e = e + val
        return e;
    })
    
    console.log("using for loop : "+s)
    console.log("using filter : "+ e)
}



sum(1,2,4,5)