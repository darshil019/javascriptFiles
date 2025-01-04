let str = "throw"
let str1 = "worth"

console.log("String 1 : "+str)
console.log("String 2 : "+str1)

let arr = str.split('')
let arr1 = str1.split('')

arr.sort()
arr1.sort()

let s = arr.join('')
let s1 = arr1.join('')

if(arr.length == arr1.length && s === s1)
{

    console.log("yes it is anagram")
}
else
{
    console.log("no")
}