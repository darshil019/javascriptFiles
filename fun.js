function sum(a,b,c)
{
    if ('+' == c)
    {
        return a+b
    }
    else if('-' == c)
    {
        return a-b
    }
    else if('*' == c)
    {
        return a*b
    }
    else
    {
        return a/b
    }
}
console.log(sum(4,5,'*'))