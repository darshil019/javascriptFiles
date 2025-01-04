str = "darshil"
let arr = []
arr = str.split('')

console.log("without replace : "+arr)

for(let i = 0 ; i < arr.length ; i++)
{
    if(arr[i] == 'a' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u')
    {
        arr[i] = '@'
    }
}

console.log("replace with @ in vowels places : "+arr)


