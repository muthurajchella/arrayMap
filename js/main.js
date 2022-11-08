let cartIteams = [
    {id:1, name: "iteam1", price: 100},
    {id:2, name: "iteam1", price: 300},
    {id:3, name: "iteam1", price: 500},
    {id:4, name: "iteam1", price: 600},
    {id:5, name: "iteam1", price: 700},
    {id:6, name: "iteam1", price: 800},
    {id:7, name: "iteam1", price: 900},
];

let result = cartIteams.map((val,index) => {
    let i = [val.id,val.name,val.price];
    return i;
});
console.log(result);