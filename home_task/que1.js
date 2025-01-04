const pi = 3.14
let area = 0
let perimeter = 0
let diameter = 0

que=(obj)=>{
    obj = {Radius:5}

    area = pi * (obj.Radius * obj.Radius)
    console.log("area of circle : "+area)

    perimeter = 2 * pi * obj.Radius
    console.log("area of perimter : "+perimeter)

    diameter = obj.Radius * 2
    console.log("area of diameter : "+diameter)
}

que()