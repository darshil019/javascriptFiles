n = 7
r = 6
nfact = 1
rfact = 1
newonefact = 1
let newone = n - r

for (let i = 1 ; i <= r ; i++)
{
    rfact = rfact * i
}

for (let i = 1 ; i <= newone ; i++)
{
    newonefact = newonefact * i
}

for (let i = 1 ; i <= n ; i++)
{
    nfact = nfact * i
}

ncr = nfact / (rfact * newonefact)
npr = nfact / newonefact

//console.log(nfact)
//console.log(rfact)
//console.log(newonefact)
console.log("NcR is : "+ncr)
console.log("NpR is : "+npr)