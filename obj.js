let obj = {product:"Macbook",cost:100000}
console.log(obj)

let obj2 = {}

obj2.product = "DELL"
obj2.product = "HP"
obj2.cost = 40000

console.log(obj2)
console.log(Object.keys(obj2))
console.log(Object.values(obj2))

console.log(JSON.stringify(obj))

let str = '{"product":"Macbook","cost":100000}'
console.log(JSON.parse(str))