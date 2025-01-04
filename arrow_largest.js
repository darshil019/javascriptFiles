const max = (a, b, c) => 
{
    if (a > b && a > c) {
        console.log(a + " = a is largest")
    }
    else if (b > a && b > c) 
    {
        console.log(b + " = b is largest")
    }
    else 
    {
        
        console.log(c + " = c is largest")
    }
}

max(5,17,10)