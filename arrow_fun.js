const pi = 3.14;

const area = (r,c) => {
    if(c == 'area')
    {
        return pi*(r*r)
    }
    else if(c == 'perimeter')
    {
        return 2*pi*r
    }
    else if(c == 'diameter')
    {
        return 2*r
    }
}

console.log(area(5,'area'))