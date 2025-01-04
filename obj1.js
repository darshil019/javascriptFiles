let sum = 0
let sum1 = 0
let arr = [
    {product:'a',cost:100},
    {product:'b',cost:190},
    {product:'c',cost:500},
    {product:'d',cost:200},
    {product:'e',cost:700},
    {product:'f',cost:1700},
    {product:'g',cost:300}
]
console.log(arr)
for (let i = 0 ; i < arr.length ; i++)
{
    sum = sum + arr[i].cost;
    if(arr[i].cost >= 500)
    {
        console.log("this is product above 500 : "+arr[i].product)
        sum1 = sum1 + arr[i].cost;
    }
}
let min = arr[0].cost
for (let i = 0 ; i < arr.length ; i++)
{
    if(arr[i].cost < min)
    {
        min = arr[i].cost
    }
}

let max = arr[0].cost
for (let i = 0 ; i < arr.length ; i++)
{
    if(arr[i].cost > max)
    {
        max = arr[i].cost
    }
}

console.log("all cost of product : "+sum)
console.log("above 500 cost of product : "+sum1)
console.log("max is "+max)
console.log("min is "+min)