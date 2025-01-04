let str = "I am an Indian"
let arr = [ ]
for (let i = str.length ; i >=0 ; i--)
{
    //console.log(str[i])
    arr.push(str[i])
    
}
console.log(arr.join(' '))