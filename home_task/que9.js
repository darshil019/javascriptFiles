let arr = [1,2,10,4,5,12,7]

let ans = arr.sort((a,b)=>{
    return a-b
})

console.log(arr)

console.log("Second Highest : "+arr[arr.length-2])

/**let people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Alex", age: 35 }
];

// Sort by age in ascending order
people.sort(function(a, b) {
    return a.age - b.age;
});
console.log(people);
// Output: [{ name: "Jane", age: 25 }, { name: "John", age: 30 }, { name: "Alex", age: 35 }]
 */