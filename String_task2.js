let str = "I am an Indian"
let str1 = " "
let arr = str.split(' ')

for(let i = 0 ; i < arr.length ; i++)
{
    str1 = str1 + " " + reverseWord(arr[i])
}



function reverseWord(s)
{
    let a = s.split('')
    let s2 = ""
    for (i = s.length-1 ; i>=0 ; i--)
    {
        s2 = s2 + a[i]
    }
    return s2
}
console.log(str1)
