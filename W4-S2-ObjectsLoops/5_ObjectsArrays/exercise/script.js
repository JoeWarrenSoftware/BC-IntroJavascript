// create your coffee object array here
var orders = [
    {
        type: "Latte",
        milk: true,
        customer: "Larry"
    },
    {
        type: "Espresso",
        milk: false,
        customer: "Sarah"
    },
    {
        type: "Mocha",
        milk: false,
        customer: "Peter"
    },
];

// Insert an additional element
orders.push(
    {
        type: "Experimental",
        milk: false,
        customer: "TestName"
    }
)

// Remove last element
orders.pop()

// create your print order function here
for(i=0; i<orders.length; i++)
{
    console.log(`${orders[i].customer} has ordered a ${orders[i].type}. ${orders[i].milk ? "Milk included":""}`);
}
