let str = "darshil"

let arr = str.split('')

console.log(arr)

count = 0
c = 0

for(let i = 0 ; i < arr.length ; i++)
{
    if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u')
    {
        count = count + 1
    }
    else
    {
        c = c + 1
    }
}

console.log("total number of vowels : "+count)
console.log("total number of consonants : "+c)